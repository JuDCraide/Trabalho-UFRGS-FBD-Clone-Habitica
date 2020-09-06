CREATE FUNCTION feitaHoje(id_atividade INT)
RETURNS INT
RETURN (SELECT COUNT(*) FROM atividades_realizadas WHERE atividades_realizadas.id_atividade = id_atividade AND DAY(atividades_realizadas.data_hora) = DAY(CURRENT_DATE()));

CREATE FUNCTION missaoFeita(id_missao INT, id_grupo INT)
RETURNS INT
RETURN (SELECT COUNT(*) FROM missoes_vencidas_grupo WHERE missoes_vencidas_grupo.id_grupo = id_grupo AND missoes_vencidas_grupo.id_missao = id_missao);

CREATE FUNCTION isLider(idUser INT)
RETURNS BOOLEAN
RETURN (SELECT COUNT(*) > 0 FROM grupo WHERE grupo.id_lider = idUser);

CREATE FUNCTION oldestMember(idGrupo INT) RETURNS INT RETURN (SELECT usuario FROM(SELECT MIN(membro_grupo.data_hora),membro_grupo.id_usuario as usuario FROM membro_grupo WHERE membro_grupo.id_grupo = idGrupo) as users);
 

DELIMITER $$

CREATE PROCEDURE changeOwnershipGroup(idUser INT, idGroup INT)
BEGIN
	IF isLider(idUser) THEN
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