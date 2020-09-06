-- Função que recebe o id de uma atividade e retorna se ela foi realizada no dia atual
CREATE FUNCTION feitaHoje(id_atividade INT)
RETURNS INT
RETURN (SELECT COUNT(*) FROM atividades_realizadas WHERE atividades_realizadas.id_atividade = id_atividade AND DAY(atividades_realizadas.data_hora) = DAY(CURRENT_DATE()));

--Função que recebe o id de uma missão e de um grupo e retorna se algum dia aquele grupo já a completou
CREATE FUNCTION missaoFeita(id_missao INT, id_grupo INT)
RETURNS INT
RETURN (SELECT COUNT(*) FROM missoes_vencidas_grupo WHERE missoes_vencidas_grupo.id_grupo = id_grupo AND missoes_vencidas_grupo.id_missao = id_missao);

--Função que diz o tamanho do grupo
CREATE FUNCTION groupSize(idGrupo INT)
RETURNS INT
RETURN (SELECT COUNT(*) > 0 FROM membro_grupo WHERE id_grupo = idGrupo);

--Função que recebe o id de um usuário e retorna se ele é líder de algum grupo
CREATE FUNCTION isLider(idUser INT)
RETURNS BOOLEAN
RETURN (SELECT COUNT(*) > 0 FROM grupo WHERE grupo.id_lider = idUser);

--Função que retorna o membro mais antigo de um grupo
CREATE FUNCTION oldestMember(idGrupo INT) RETURNS INT RETURN (SELECT usuario FROM(SELECT membro_grupo.data_hora,membro_grupo.id_usuario as usuario FROM membro_grupo WHERE membro_grupo.id_grupo = idGrupo ORDER BY membro_grupo.data_hora ASC LIMIT 1) as users);
 
/*
Procedimento que serve para trocar o dono do grupo após o líder sair do mesmo.
Considerando que o app serve para ajudar pessoas a cumprirem metas, criarem hábitos, essas coisas e que algo que está inerte 
a qualquer tipo de aplicativo é que um percentual dos usuários iniciais acaba deixando de usar o app depois de um tempo.
Sendo assim, não é justo prejudicar um grupo todo pois o usuário que o criou parou de usar o app, por isso a importância do 
procedimento em questão.

Utilizando as três funções acima, após um usuário sair do grupo é verificado(com o procedure, chamado por um trigger) se ele era líder do 
grupo, em caso positivo, considerando que tenha alguém restante no grupo, o seu membro mais antigo vira o novo líder do grupo.
*/
DELIMITER $$

CREATE PROCEDURE changeOwnershipGroup(idUser INT, idGroup INT)
BEGIN
	IF isLider(idUser) AND groupSize(idGroup) > 0 THEN
    	UPDATE grupo
        SET grupo.id_lider = oldestMember(idGroup)
        WHERE grupo.id = idGroup;
    END IF;
END$$

DELIMITER ;
--
DELIMITER $$

CREATE TRIGGER changeGroupOwner
AFTER DELETE ON membro_grupo FOR EACH ROW
BEGIN
	CALL changeOwnershipGroup(OLD.id_usuario,OLD.id_grupo);
END$$

DELIMITER ;