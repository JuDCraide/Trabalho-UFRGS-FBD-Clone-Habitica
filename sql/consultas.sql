/*
Consultas SQL 
Júlia e Leonardo
06/09/2020

Nas consultas abaixo os termos iniciados pelo sinal ${} representam variáveis que serão definidas em tempo de execução do programa. Nos comentários individuais é possível ver uma explicação sobre quais tipos de valores determinadas variáveis podem obter. Foi usada essa notação pois é a mesma utilizada pela linguagem javascript, com a qual o software em questão está sendo desenvolvido.
*/

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

SELECT * FROM atividade JOIN habito ON(habito.id_atividade = atividade.id) WHERE atividade.id_usuario = ${id};

--Listar detalhes de um hábito

--Editar um hábito

--Cadastrar um hábito

--Deletar um hábito

--Listar rotinas

SELECT * FROM atividade JOIN rotina ON(rotina.id_atividade = atividade.id) WHERE atividade.id_usuario = ${id};

--Listar detalhes de uma rotina

--Editar uma rotina

--Cadastrar uma rotina

--Deletar uma rotina

--Listar tarefas

SELECT * FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) LEFT JOIN atividades_realizadas ON (atividades_realizadas.id_atividade = atividade.id) WHERE atividades_realizadas.data_hora IS NULL AND atividade.id_usuario = ${id};

--Listar detalhes de uma tarefa

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

--Editar um grupo




--Criar um grupo

INSERT INTO grupo(nome, id_lider) VALUES ('saudaveis',1);

--Listar membros de um grupo

SELECT * FROM usuario JOIN membro_grupo ON (usuario.id = membro_grupo.id_usuario) WHERE membro_grupo.id_grupo = 1;

--Adicionar um membro a um grupo

--Remover um membro a um grupo

--Listar todas as missões do jogo

--Listar todas as missões concluídas pelo grupo

--Listar todas as mensagens de um grupo

--Enviar mensagens internamente no grupo

--Ver missão atual do grupo

--Iniciar missão com o grupo

--Ver detalhes de uma missão
