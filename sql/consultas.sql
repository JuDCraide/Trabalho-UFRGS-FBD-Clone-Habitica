/*
 Consultas SQL 
 Júlia e Leonardo
 06/09/2020
 */


----------VIEWS----------

--Atividade / Hábito / Recompensa
DROP VIEW atividade_habito;
CREATE VIEW atividade_habito(
    id,
    nome,
    dificuldade,
    id_usuario,
    eh_positivo,
    valor,
    xp,
    id_item,
    feita,
    atividade
) AS (
    SELECT habito.id,
        atividade.nome,
        atividade.dificuldade,
        atividade.id_usuario,
        habito.eh_positivo,
        recompensa.valor,
        recompensa.xp,
        recompensa.id_item,
        feitaHoje(atividade.id), --chamada de função
        atividade.id
    FROM atividade
        JOIN habito ON (habito.id_atividade = atividade.id)
        LEFT JOIN recompensa ON (atividade.id_recompensa = recompensa.id)
);

--Atividade / Rotina / Recompensa
DROP VIEW atividade_rotina;
CREATE VIEW atividade_rotina(
    id,
    dias_da_semana,
    nome,
    dificuldade,
    id_usuario,
    valor,
    xp,
    id_item,
    feita,
    atividade
) AS (
    SELECT rotina.id,
        rotina.dias_da_semana,
        atividade.nome,
        atividade.dificuldade,
        atividade.id_usuario,
        recompensa.valor,
        recompensa.xp,
        recompensa.id_item,
        feitaHoje(atividade.id), --chamada de função
        atividade.id
    FROM atividade
        JOIN rotina ON (rotina.id_atividade = atividade.id)
        LEFT JOIN recompensa ON (atividade.id_recompensa = recompensa.id)
);

--Atividade / Tarefa / Recompensa
DROP VIEW atividade_tarefa;
CREATE VIEW atividade_tarefa(
    id,
    nome,
    dificuldade,
    id_usuario,
    valor,
    xp,
    id_item,
    data_entrega,
    feita,
    atividade
) AS (
    SELECT tarefa.id,
        atividade.nome,
        atividade.dificuldade,
        atividade.id_usuario,
        recompensa.valor,
        recompensa.xp,
        recompensa.id_item,
        tarefa.data_entrega,
        feitaHoje(atividade.id), --chamada de função
        atividade.id
    FROM atividade
        JOIN tarefa ON (tarefa.id_atividade = atividade.id)
        LEFT JOIN recompensa ON (atividade.id_recompensa = recompensa.id)
);


----------Consultas----------
--Nas consultas abaixo os termos iniciados pelo sinal ${} representam variáveis que serão definidas em tempo de execução do programa.
--Nos comentários individuais é possível ver uma explicação sobre quais tipos de valores determinadas variáveis podem obter.
--Foi usada essa notação pois é a mesma utilizada pela linguagem javascript, com a qual o software em questão está sendo desenvolvido.


-----Atividade Controller-----

--Insere atividade na tabela atividades_realizadas
INSERT INTO atividades_realizadas (id_usuario, id_atividade)
VALUES (${id_usuario}, ${id_atividade}) 


-----Classe Controller-----

--Ver classe de um usuario
SELECT classe.nome AS classe
FROM usuario
    JOIN classe ON(classe.id = usuario.id_classe)
WHERE usuario.id = ${id};

--Listar todas classes
SELECT *
FROM classe;


-----Conquista Controller-----

--Listar todas as conquistas obtidas por um usuário
SELECT conquista.id as id, conquista.nome as nome, conquista.objetivo as objetivo
FROM usuario
    JOIN usuario_conquista ON(usuario_conquista.id_usuario = usuario.id)
    JOIN conquista ON(conquista.id = usuario_conquista.id_conquista)
WHERE usuario.login = '${login}';

--Listar conquistas não obtidas por um usuário
--SUBCONSULTA - Está na listagem de SUBCONSULTAS, no final do arquivo

--Inserir conquista possuída

--Conquistas em Comum
--NOTEXIST - Está na listagem de NOTEXISTS, no final do arquivo

-----Grupo Controller-----

--Criar um grupo
INSERT INTO grupo(nome, id_lider)
VALUES ('${nome}', ${id_lider});

--Adicionar um membro a um grupo
--Onde ${id_grupo} e ${id_usuario} representam um inteiro identificador do grupo e do usuário respectivamente
INSERT INTO membro_grupo(id_grupo, id_usuario)
VALUES (${id_grupo}, ${id_usuario});

--Remover um membro de um grupo
DELETE FROM membro_grupo
WHERE id_usuario = ${id_usuario};

--Descobre o id do grupo a partir do id do usuário
SELECT id_grupo
FROM membro_grupo
where id_usuario = ${id};

--Listar detalhes de um grupo
SELECT *
FROM grupo
where id = ${id};

--Lista dados de todos os membros de um grupo
SELECT usuario.id as id,
    usuario.nome as nome,
    usuario.experiencia as xp,
    usuario.saude as saude,
    classe.nome as classe
FROM grupo
    JOIN membro_grupo ON (grupo.id = membro_grupo.id_grupo)
    JOIN usuario ON(usuario.id = membro_grupo.id_usuario)
    JOIN classe ON (classe.id = usuario.id)
WHERE grupo.id = ${id};


-----Habito Controller-----

--Listar hábitos de um usuário
SELECT *
FROM atividade_habito
WHERE id_usuario = ${id_usuario};

--Listar detalhes de um hábito
SELECT *
FROM atividade_habito
WHERE id = ${id_habito};

--Cadastrar um hábito
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario)
VALUES ("${nome}",${dificuldade},${id_recompensa},${id_usuario});

INSERT INTO habito(id_atividade, eh_positivo)
VALUES (${id_atividade},${eh_positivo});

--Editar um hábito
UPDATE atividade 
SET nome = "${nome}", dificuldade = ${dificuldade}
WHERE atividade.id = ${id_atividade};

UPDATE habito 
SET eh_positivo = ${eh_positivo}
WHERE habito.id = ${id_habito};

--Deletar um hábito
DELETE FROM habito where id = ${id};

--Contar repetições diárias de um hábito
--GROUPBY - Está na listagem de GROUPBY, no final do arquivo 

-----Item Controller-----

--Listar item a partir do id
SELECT *
FROM item
where id = ${id};

--Listar todos os itens adquiridos
SELECT item.id as id, item.nome as nome, item.tipo_poder as tipo_poder, item.valor_poder as valor_poder, item.preco as preco, item.imagem as imagem
FROM item
    JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
    JOIN usuario ON(usuario_possui_itens.id_usuario=usuario.id)
WHERE usuario.login = '${login}';

--Listar todos os itens equipados
SELECT item.id as id, item.nome as nome, item.tipo_poder as tipo_poder, item.valor_poder as valor_poder, item.preco as preco, item.imagem as imagem
FROM item
    JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
    JOIN usuario ON(usuario_possui_itens.id_usuario=usuario.id)
WHERE usuario.login = '${login}'
    AND usuario_possui_itens.equipado;

--Listar todos os itens disponíveis no mercado
SELECT *
FROM item
where id < 8;

--Equipar um item
UPDATE usuario_possui_itens
SET equipado = '1'
WHERE id_usuario = ${id_usuario}
    AND id_item = ${id_item};

--Desequipar um item
UPDATE usuario_possui_itens
SET equipado = '0'
WHERE id_usuario = ${id_usuario}
    AND id_item = ${id_item};

--Comprar um item
INSERT INTO usuario_possui_itens(id_usuario, id_item, equipado)
VALUES(${id_usuario}, ${id_item}, '0');


-----Mensagem Controller-----

--Enviar mensagens internamente no grupo
INSERT INTO mensagem(texto, id_usuario, id_grupo) 
VALUES ('${texto}', ${id_usuario}, ${id_grupo});

--Listar todas as mensagens de um grupo
--SUBCONSULTA - Está na listagem de SUBCONSULTAS, no final do arquivo


-----Missao Controller-----

--Listar todas as missões do jogo
SELECT missao.id as id,
    missao.nome as nome,
    missao.saude as saude,
    missao.imagem as imagem,
    missao.descricao as descricao,
    missao.id_recompensa as id_recompensa,
    missaoFeita(id, ${id_grupo}) as feita -- chamada função
FROM missao;

--Ver detalhes de uma missão
SELECT *
FROM missao
WHERE id = ${id_missao} 

--Listar todas as missões concluídas pelo grupo
SELECT *
FROM missao
    JOIN missoes_vencidas_grupo
WHERE id_grupo = ${id_grupo};

--Ver missão atual do grupo
SELECT missao.id as id,
    missao.nome as nome,
    missao.saude as saude,
    missao.imagem as imagem,
    missao.descricao as descricao,
    missao.id_recompensa as id_recompensa
FROM missao JOIN missao_atual ON(missao.id = missao_atual.id_missao) JOIN grupo ON(missao_atual.id_grupo = grupo.id) JOIN membro_grupo ON (membro_grupo.id_grupo = grupo.id) JOIN usuario ON (usuario.id= membro_grupo.id_usuario)
WHERE login = '${login}'

--Iniciar missão com o grupo
INSERT INTO missao_atual(id_grupo, id_missao)
VALUES (${id_grupo}, ${id_missao});

--Editar dano na missão atual

UPDATE missao_atual SET dano_recebido = ${dano} WHERE missao_atual.id_grupo = ${id_grupo} AND missao_atual.id_missao = ${id_missao}; 

--Cadastrar missão vencida

INSERT INTO missoes_vencidas_grupo (id_grupo, id_missao) VALUES (${id_grupo}, ${id_missao});

--Excluir missão atual

DELETE FROM missao_atual WHERE missao_atual.id_grupo = ${id_grupo};

--Pegar recompensas

SELECT valor, xp, id_item from missao_atual 
    JOIN missao ON(missao.id = missao_atual.id_missao) 
    JOIN recompensa ON(recompensa.id = missao.id_recompensa) 
    LEFT JOIN item ON(item.id = recompensa.id_item) 
    WHERE missao_atual.id_grupo = ${id_grupo};

-----Rotina Controller-----

--Listar rotinas
SELECT *
FROM atividade_rotina
WHERE id_usuario = ${id_usuario};

--Listar detalhes de uma rotina
SELECT * FROM atividade
JOIN rotina ON(rotina.id_atividade = atividade.id)
WHERE  rotina.id = ${id};

--Cadastrar uma rotina
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario)
VALUES ("${nome}",${dificuldade},${id_recompensa},${id_usuario});

INSERT INTO rotina(id_atividade, dias_da_semana)
VALUES (${id_atividade},b'${dias_da_semana}');

--Deletar uma rotina
DELETE FROM rotina where id = ${id};

--Editar uma rotina
UPDATE atividade
SET nome = "${nome}", dificuldade = ${dificuldade} 
WHERE atividade.id = ${id_atividade};

UPDATE rotina
SET dias_da_semana = b'${dias_da_semana}' 
WHERE rotina.id = ${id_rotina};


-----Tarefa Controller-----

--Listar tarefas
SELECT *
FROM atividade_tarefa
WHERE id_usuario = ${id_usuario};

--Listar detalhes de uma tarefa
SELECT * 
FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) 
WHERE tarefa.id = ${id};

--Cadastrar uma tarefa
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario)
VALUES ("${nome}",${dificuldade},${id_recompensa},${id_usuario});

INSERT INTO tarefa(id_atividade, data_entrega) 
VALUES (${id_atividade},"${data_entrega}");

--Deletar uma tarefa
DELETE FROM tarefa where id = ${id};

--Editar uma tarefa
UPDATE atividade
SET nome = "${nome}", dificuldade = ${dificuldade}
WHERE atividade.id = ${id_atividade};

UPDATE tarefa
SET data_entrega = ${data_entrega}
WHERE tarefa.id = ${id_tarefa};


-----Usuario Controller-----

--Login
--Onde ${login} representa o username do usuário
SELECT id 
FROM usuario 
WHERE login = "${login}";

--Cadastrar usuario
INSERT INTO usuario(nome,login, id_classe) 
VALUES ("${nome}","${login}",${id_classe});

--Listar dados de um usuário
--Onde ${id} representa o id de algum usuário
SELECT *
FROM usuario
WHERE usuario.id = ${id};

--Deletar usuario
DELETE FROM usuario
WHERE usuario.id = ${id};

--Editar saude,xp e moedas de um usuário
UPDATE usuario SET moedas = ${moedas}, saude = ${saude}, experiencia = ${xp} WHERE usuario.id = ${id_usuario}; 

----------GROUP BY----------

--Dano Pendente
SELECT SUM(dificuldade) as dano_pendente
FROM atividades_realizadas
    JOIN atividade ON (atividade.id = atividades_realizadas.id_atividade)
    LEFT JOIN habito ON (habito.id_atividade = atividade.id)
WHERE (
        habito.eh_positivo != false
        or habito.eh_positivo is NULL
    )
    and DAY(atividades_realizadas.data_hora) = DAY(CURRENT_DATE())
    and id_usuario = ${id_usuario}
GROUP BY atividades_realizadas.id_usuario;

--Contagem hábitos
SELECT atividade_habito.id, COUNT(*)
FROM atividades_realizadas
    JOIN atividade_habito ON(atividades_realizadas.id_atividade = atividade_habito.id)
    JOIN usuario ON (usuario.id = atividades_realizadas.id_usuario)
WHERE DAY(atividades_realizadas.data_hora) = DAY(CURRENT_DATE()) AND usuario.login='${login}'
GROUP BY atividade_habito.id
HAVING COUNT(*) > 0;

----------SUBCONSULTA----------
--ver conquistas ainda nao obtidas
SELECT *
FROM conquista
WHERE id NOT IN (
    SELECT conquista.id as id
    FROM usuario
        JOIN usuario_conquista ON(usuario_conquista.id_usuario = usuario.id)
        JOIN conquista ON(conquista.id = usuario_conquista.id_conquista)
    WHERE usuario.login = '${login}'
);

--ver mensagens de um grupo no qual o usuário se encontra
SELECT mensagem.id as id,
    usuario.id as id_usuario,
    texto,
    data_hora,
    nome,
    login
FROM mensagem
    LEFT JOIN usuario ON(mensagem.id_usuario = usuario.id)
WHERE id_grupo IN (SELECT id_grupo as id
FROM membro_grupo JOIN usuario ON(usuario.id = membro_grupo.id_usuario)
WHERE usuario.login = ${login});

----------NOT Exists----------

--Serve para ver quais usuários possuem as mesmas conquistas que você
SELECT id
FROM usuario USR
WHERE id != ${id }
    AND NOT EXISTS (
        SELECT id_conquista
        FROM usuario_conquista
        WHERE usuario_conquista.id_usuario = ${id}
            AND id_conquista NOT IN (
                SELECT DISTINCT id_conquista
                FROM usuario_conquista
                WHERE usuario_conquista.id_usuario = USR.id
            )
    );