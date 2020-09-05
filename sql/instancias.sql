INSERT INTO classe(nome, forca, defesa, inteligencia) VALUES ('mago',10,10,80);
INSERT INTO classe(nome, forca, defesa, inteligencia) VALUES ('guerreiro',85,5,10);
INSERT INTO classe(nome, forca, defesa, inteligencia) VALUES ('escudeiro',10.5,79,10.5);
INSERT INTO classe(nome, forca, defesa, inteligencia) VALUES ('cidadão',33.5,33.5,33);

INSERT INTO usuario(nome,login,moedas,saude,experiencia, id_classe) VALUES ('FitNelson','Saudavelson',0,100,200,3);
INSERT INTO usuario(nome,login,moedas,saude,experiencia, id_classe) VALUES ('SidNelson','MePoupo',10,100,0,1);
INSERT INTO usuario(nome,login,moedas,saude,experiencia, id_classe) VALUES ('BodyBuildNelson','VemMonstro',100,100,200,1);
INSERT INTO usuario(nome,login,moedas,saude,experiencia, id_classe) VALUES ('BobOConstruNelson','Bob',10,100,0,1);
INSERT INTO usuario(nome,login,moedas,saude,experiencia, id_classe) VALUES ('ZenNelson','zen',300,100,0,1);
INSERT INTO usuario(nome,login,moedas,saude,experiencia, id_classe) VALUES ('StudyNelson','engenheiroNaoFormado',10,100,500,1);

INSERT INTO item(nome, tipo_poder, valor_poder, preco) VALUES ('espada',1,0.5,90);
INSERT INTO item(nome, tipo_poder, valor_poder, preco) VALUES ('escudo',2,1,195);
INSERT INTO item(nome, tipo_poder, valor_poder, preco) VALUES ('livro secreto',3,2.5,600);

INSERT INTO recompensa(valor, xp, id_item) VALUES (50,25, NULL);
INSERT INTO recompensa(valor, xp, id_item) VALUES (15,9, NULL);
INSERT INTO recompensa(valor, xp, id_item) VALUES (10,400,3);

INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('comer salada',2,2,1);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('meditar',3,2,5);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('tomar refrigerante',1,NULL,1);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('lavar a louça',1,1,5);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('academia',4,1,3);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('conferir finanças',2,2,2);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('trabalho faculdade',4,2,6);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('comprar presente de dia dos pais',2,1,2);
INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ('consertar telhado',3,2,4);

INSERT INTO habito(id_atividade, eh_positivo) VALUES (1,TRUE);
INSERT INTO habito(id_atividade, eh_positivo) VALUES (2,TRUE);
INSERT INTO habito(id_atividade, eh_positivo) VALUES (3,FALSE);

INSERT INTO rotina(id_atividade, dias_da_semana) VALUES (4,b'1111111');
INSERT INTO rotina(id_atividade, dias_da_semana) VALUES (5,b'0100100');
INSERT INTO rotina(id_atividade, dias_da_semana) VALUES (6,b'0000100');

INSERT INTO tarefa(id_atividade, data_entrega) VALUES (7,'2020-10-23');
INSERT INTO tarefa(id_atividade, data_entrega) VALUES (8,'2020-08-10');
INSERT INTO tarefa(id_atividade, data_entrega) VALUES (9,null);

INSERT INTO grupo(nome, id_lider) VALUES ('saudaveis',1);
INSERT INTO grupo(nome, id_lider) VALUES ('atarefados',2);
INSERT INTO grupo(nome, id_lider) VALUES ('eu, euzinho e eu mesmo',5);

INSERT INTO missao(nome, saude, imagem, descricao, id_recompensa) VALUES ('The Lista de Atividades Gigante',100,'https://nossafuturaapi.com/lista','Há uma agitação no mercado - do tipo que deve fazer você fugir. Sendo um aventureiro corajoso, em vez disso você corre em direção a ela e descobre uma Lista de Atividades Gigante, formada por um amontoado de coisas a fazer incompletas! Habiticanos próximos estão paralisados ​​de medo com a extensão da lista Basi, incapazes de começar a trabalhar. De algum lugar nas proximidades, você ouve Arcosine gritar: "Rápido! Conclua suas tarefas e rotinas para desfigurar o monstro, antes que alguém corte o papel!" Ataque rápido, aventureiro, e verifique algo - mas cuidado! Se você deixar alguma rotina desfeita, a lista Basi irá atacar você e seu grupo!',2);
INSERT INTO missao(nome, saude, imagem, descricao, id_recompensa) VALUES ('Terríveis coelhos de poeira',175,'https://nossafuturaapi.com/coelhos','Já faz um tempo que você não limpa o pó aqui, mas não está muito preocupado - um pouco de poeira nunca faz mal a ninguém, certo? Não é até que você coloque a mão em um dos cantos mais empoeirados e sinta algo mordendo que você se lembra do aviso do Inspetor Caracal: "Deixar a poeira inofensiva permanecer por muito tempo faz com que ela se transforme em terríveis coelhos de poeira!". É melhor derrotá-los antes que cobrem toda a Habitica com finas partículas de sujeira!',2);
INSERT INTO missao(nome, saude, imagem, descricao, id_recompensa) VALUES ('Despertar do Vício',1500,'https://nossafuturaapi.com/vicio','Depois de muito esforço, seu grupo descobriu o covil de Vício. O monstro gigantesco olha para o seu grupo com desgosto. Enquanto sombras giram em torno de você, uma voz sussurra em sua cabeça "Mais cidadãos idiotas de Habitica vêm me parar? Fofo. Você teria sido mais sábio em não vir." O assustador titã ergue a cabeça e se prepara para atacar. Essa é sua chance! Dê tudo de si e derrote o Vício de uma vez por todas!',3);

INSERT INTO missao_atual(id_grupo, id_missao, dano_recebido) VALUES (1,3,4.5);
INSERT INTO missao_atual(id_grupo, id_missao, dano_recebido) VALUES (2,1,0);
INSERT INTO missao_atual(id_grupo, id_missao, dano_recebido) VALUES (3,2,26);

INSERT INTO mensagem(texto, id_usuario, id_grupo) VALUES ('Missão díficil :O',3,1);
INSERT INTO mensagem(texto, id_usuario, id_grupo) VALUES ('Oi, galera, como vão as coisas?',6,2);
INSERT INTO mensagem(texto, id_usuario, id_grupo) VALUES ('Oii tudo bem e você?',2,2);

INSERT INTO conquista(nome, objetivo) VALUES ('Primeira Atividade','Completou sua primeira atividade');
INSERT INTO conquista(nome, objetivo) VALUES ('Anfitrião','Criou um grupo');
INSERT INTO conquista(nome, objetivo) VALUES ('Compras','Comprou seu primeiro item');

INSERT INTO usuario_conquista(id_usuario, id_conquista) VALUES (1,2);
INSERT INTO usuario_conquista(id_usuario, id_conquista) VALUES (2,2);
INSERT INTO usuario_conquista(id_usuario, id_conquista) VALUES (5,2);
INSERT INTO usuario_conquista(id_usuario, id_conquista) VALUES (1,1);
INSERT INTO usuario_conquista(id_usuario, id_conquista) VALUES (5,1);

INSERT INTO atividades_realizadas(id_usuario, id_atividade) VALUES (1,1);
INSERT INTO atividades_realizadas(id_usuario, id_atividade) VALUES (5,2);
INSERT INTO atividades_realizadas(id_usuario, id_atividade) VALUES (5,4);

INSERT INTO usuario_possui_itens(id_usuario, id_item) VALUES (5,1);
INSERT INTO usuario_possui_itens(id_usuario, id_item) VALUES (5,2);
INSERT INTO usuario_possui_itens(id_usuario, id_item) VALUES (1,1);

INSERT INTO membro_grupo(id_grupo, id_usuario) VALUES (1,1);
INSERT INTO membro_grupo(id_grupo, id_usuario) VALUES (1,3);
INSERT INTO membro_grupo(id_grupo, id_usuario) VALUES (2,2);
INSERT INTO membro_grupo(id_grupo, id_usuario) VALUES (2,6);
INSERT INTO membro_grupo(id_grupo, id_usuario) VALUES (2,4);
INSERT INTO membro_grupo(id_grupo, id_usuario) VALUES (3,5);

INSERT INTO missoes_vencidas_grupo(id_grupo, id_missao) VALUES (1,1);
INSERT INTO missoes_vencidas_grupo(id_grupo, id_missao) VALUES (1,2);
INSERT INTO missoes_vencidas_grupo(id_grupo, id_missao) VALUES (3,2);