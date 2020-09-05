/*
Consultas SQL 
Júlia e Leonardo
06/09/2020
*/
--VIEW
--Atividade / Hábito / Recompensa
CREATE VIEW atividade_habito(id, nome, dificuldade, id_usuario, eh_positivo, valor, xp, id_item) AS (
    SELECT habito.id, atividade.nome, atividade.dificuldade, atividade.id_usuario, habito.eh_positivo, recompensa.valor, recompensa.xp, recompensa.id_item
    FROM atividade 
    JOIN habito ON (habito.id_atividade = atividade.id)
    LEFT JOIN recompensa ON (atividade.id_recompensa = recompensa.id)
);

--Atividade / Rotina / Recompensa
CREATE VIEW atividade_rotina(id, dias_da_semana, nome, dificuldade, id_usuario, valor, xp, id_item) AS (
    SELECT rotina.id, rotina.dias_da_semana, atividade.nome, atividade.dificuldade, atividade.id_usuario, recompensa.valor, recompensa.xp, recompensa.id_item
    FROM atividade 
    JOIN rotina ON (rotina.id_atividade = atividade.id)
    LEFT JOIN recompensa ON (atividade.id_recompensa = recompensa.id)
);

--Atividade / Tarefa / Recompensa
CREATE VIEW atividade_tarefa(id, nome, dificuldade, id_usuario, valor, xp, id_item) AS (
    SELECT tarefa.id, tarefa.data_entrega, atividade.nome, atividade.dificuldade, atividade.id_usuario, recompensa.valor, recompensa.xp, recompensa.id_item
    FROM atividade 
    JOIN tarefa ON (tarefa.id_atividade = atividade.id)
    LEFT JOIN recompensa ON (atividade.id_recompensa = recompensa.id)
);



--Nas consultas abaixo os termos iniciados pelo sinal ${} representam variáveis que serão definidas em tempo de execução do programa. Nos comentários individuais é possível ver uma explicação sobre quais tipos de valores determinadas variáveis podem obter. Foi usada essa notação pois é a mesma utilizada pela linguagem javascript, com a qual o software em questão está sendo desenvolvido.

--Login
--Onde ${login} representa o username do usuário
SELECT id from usuario where usuario.login = ${login};

--Listar dados de um usuário
--Onde ${id} representa o id de algum usuário
SELECT * FROM usuario WHERE usuario.id = ${id};

--Ver classe de um usuario
SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id};

--Cadastrar usuario
INSERT INTO usuario(nome,login, id_classe) VALUES (${nome},${login},${id_classe});

--Deletar usuario
DELETE FROM usuario WHERE usuario.id = ${id};

--Listar todas classes
SELECT * FROM classe;

--Listar hábitos
SELECT * FROM atividade_habito WHERE id_usuario = ${id_usuario};

--Listar detalhes de um hábito
SELECT * FROM atividade_habito WHERE id = ${id_habito};

--Editar um hábito

--Cadastrar um hábito


--Deletar um hábito


--Listar rotinas
SELECT * FROM atividade_rotina WHERE id_usuario = ${id_usuario};

--Listar detalhes de uma rotina
SELECT * FROM atividade_rotina WHERE id = ${id_rotina};

--Editar uma rotina

--Cadastrar uma rotina

--Deletar uma rotina

--Listar tarefas
SELECT * FROM atividade_tarefa WHERE id_usuario = ${id_usuario};

--Listar detalhes de uma tarefa
SELECT * FROM atividade_tarefa WHERE id = ${id_tarefa};

--Editar uma tarefa

--Cadastrar uma tarefa

--Deletar uma tarefa

--Listar todas as conquistas
SELECT * FROM conquista;

--Listar todas as conquistas de um usuário
SELECT * FROM usuario JOIN usuario_conquista ON(usuario_conquista.id_usuario = usuario.id) JOIN conquista ON(conquista.id = usuario_conquista.id_conquista) WHERE usuario.id = 1;

--Listar todos os itens disponíveis
SELECT * FROM item;

--Listar todos os itens equipados
SELECT * FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item) WHERE usuario_possui_itens.id_usuario = 1 AND usuario_possui_itens.equipado;

--Listar todos os itens adquiridos
SELECT * FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item) WHERE usuario_possui_itens.id_usuario = 1;

--Comprar um item
INSERT INTO usuario_possui_itens(id_usuario, id_item) VALUES (5,1);

--Equipar ou desequipar um item
UPDATE usuario_possui_itens
SET equipado = true
WHERE id_usuario = 5 and id_item =1;

--Listar detalhes de um grupo
SELECT * FROM grupo where id = 1;


--Criar um grupo
INSERT INTO grupo(nome, id_lider) VALUES ('saudaveis',1);

--Listar membros de um grupo
SELECT * FROM usuario JOIN membro_grupo ON (usuario.id = membro_grupo.id_usuario) WHERE membro_grupo.id_grupo = 1;

--Adicionar um membro a um grupo
--Onde ${id_grupo} e ${id_usuario} representam um inteiro identificador do grupo e do usuário respectivamente
INSERT INTO membro_grupo(id_grupo, id_usuario)
VALUES (${id_grupo},${id_usuario});

--Remover um membro de um grupo
DELETE FROM membro_grupo
WHERE id_usuario=${id_usuario};

--Listar todas as missões do jogo
SELECT * FROM missao;

--Listar todas as missões concluídas pelo grupo
SELECT * FROM missao JOIN missoes_vencidas_grupo
WHERE id_grupo=${id_grupo};

--Listar todas as mensagens de um grupo
SELECT * FROM mensagens 
WHERE id_grupo = ${id_grupo}

--Enviar mensagens internamente no grupo
INSERT INTO mensagem(texto, id_usuario, id_grupo)
ALUES (${texto},${id_usuario},${id_grupo});

--Ver missão atual do grupo
SELECT * FROM missao_atual WHERE id_grupo = ${id_grupo};

--Iniciar missão com o grupo
INSERT INTO missao_atual(id_grupo, id_missao) VALUES (${id_grupo}, ${id_missao});

--Ver detalhes de uma missão
SELECT * FROM missao WHERE id=${id_missao}

--GROUP BY
--Dano Pendente
SELECT SUM(dificuldade) as dano_pendente FROM atividades_realizadas JOIN atividade ON (atividade.id = atividades_realizadas.id_atividade) LEFT JOIN habito ON (habito.id_atividade = atividade.id)
WHERE (habito.eh_positivo!= false or habito.eh_positivo is NULL) and DAY(atividades_realizadas.data_hora)=DAY(CURRENT_DATE())
GROUP BY atividades_realizadas.id_usuario
HAVING id_usuario=${id_usuario};

--SUBCONSULTA
SELECT *
FROM conquista 
WHERE id NOT IN (
    SELECT conquista.id as id
    FROM usuario JOIN usuario_conquista ON(usuario_conquista.id_usuario = usuario.id)
        JOIN conquista ON(conquista.id = usuario_conquista.id_conquista)
    WHERE usuario.id = ${user_id}
);