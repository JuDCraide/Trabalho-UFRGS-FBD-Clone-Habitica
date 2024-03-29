DROP TABLE missoes_vencidas_grupo;
DROP TABLE membro_grupo;
DROP TABLE usuario_possui_itens;
DROP TABLE atividades_realizadas;
DROP TABLE usuario_conquista;
DROP TABLE conquista;
DROP TABLE mensagem;
DROP TABLE missao_atual;
DROP TABLE missao;
DROP TABLE grupo;
DROP TABLE tarefa;
DROP TABLE rotina;
DROP TABLE habito;
DROP TABLE atividade;
DROP TABLE recompensa;
DROP TABLE item;
DROP TABLE usuario;
DROP TABLE classe;

CREATE TABLE classe(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL UNIQUE,
	forca FLOAT NOT NULL,
	defesa FLOAT NOT NULL,
	inteligencia FLOAT NOT NULL,
	CONSTRAINT `max_100` CHECK(forca + defesa + inteligencia <= 100)
);

CREATE TABLE usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	login VARCHAR(50) NOT NULL UNIQUE,
	moedas INT UNSIGNED NOT NULL DEFAULT 0,
	saude FLOAT DEFAULT 100 CHECK(saude>=0 AND saude<=100),
	experiencia FLOAT DEFAULT 0,
	id_classe INT NOT NULL,
	CONSTRAINT `id_classe`
	FOREIGN KEY (id_classe) REFERENCES classe(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE item(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL UNIQUE,
	tipo_poder INT(1) NOT NULL CHECK(tipo_poder>0 AND tipo_poder<4),
	valor_poder FLOAT NOT NULL,
	preco INT UNSIGNED NOT NULL,
	imagem TINYTEXT NOT NULL
);

CREATE TABLE recompensa(
	id INT AUTO_INCREMENT PRIMARY KEY,
	valor INT UNSIGNED,
	xp FLOAT UNSIGNED NOT NULL ,
	id_item INT,
	FOREIGN KEY (id_item) REFERENCES item(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE atividade(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	dificuldade INT(1) NOT NULL CHECK(dificuldade>0 AND dificuldade<5),
	id_recompensa INT ,
	id_usuario INT NOT NULL,
	FOREIGN KEY (id_recompensa) REFERENCES recompensa(id)ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE habito(
	id INT AUTO_INCREMENT PRIMARY KEY,
	id_atividade INT NOT NULL,
	eh_positivo BOOLEAN DEFAULT TRUE NOT NULL,
	FOREIGN KEY (id_atividade) REFERENCES atividade(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE rotina(
	id INT AUTO_INCREMENT PRIMARY KEY,
	id_atividade INT NOT NULL,
	dias_da_semana BIT(7) NOT NULL DEFAULT b'1111111',
	FOREIGN KEY (id_atividade) REFERENCES atividade(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE tarefa(
	id INT AUTO_INCREMENT PRIMARY KEY,
	id_atividade INT NOT NULL,
	data_entrega DATE,
	FOREIGN KEY (id_atividade) REFERENCES atividade(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE grupo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	id_lider INT NOT NULL,
	FOREIGN KEY (id_lider) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE missao(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL UNIQUE,
	saude FLOAT UNSIGNED NOT NULL ,
	imagem TINYTEXT NOT NULL,
	descricao TINYTEXT NOT NULL,
	id_recompensa INT NOT NULL,
	FOREIGN KEY (id_recompensa) REFERENCES recompensa(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE missao_atual(
	id_grupo INT NOT NULL,
	id_missao INT NOT NULL,
	dano_recebido FLOAT UNSIGNED NOT NULL DEFAULT 0 ,
	data_inicio DATE DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_grupo) REFERENCES grupo(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_missao) REFERENCES missao(id) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY(id_grupo, id_missao)
);

CREATE TABLE mensagem(
	id INT AUTO_INCREMENT PRIMARY KEY,
	texto TINYTEXT NOT NULL,
	id_usuario INT,
	id_grupo INT NOT NULL,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE SET NULL, -- mantem o registro da mensagem mesmo que o usuario encerre a conta
	FOREIGN KEY (id_grupo) REFERENCES grupo(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE conquista(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL UNIQUE,
	objetivo TINYTEXT NOT NULL
);

CREATE TABLE usuario_conquista(
	id_usuario INT NOT NULL,
	id_conquista INT NOT NULL,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_conquista) REFERENCES conquista(id) ON UPDATE CASCADE ON DELETE CASCADE,
	PRIMARY KEY(id_usuario, id_conquista)
);

CREATE TABLE atividades_realizadas(
	id_usuario INT NOT NULL,
	id_atividade INT NOT NULL,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_atividade) REFERENCES atividade(id) ON UPDATE CASCADE ON DELETE CASCADE,
	PRIMARY KEY(id_atividade,data_hora)
);

CREATE TABLE usuario_possui_itens(
	id_usuario INT NOT NULL,
	id_item INT NOT NULL,
	equipado BOOLEAN NOT NULL DEFAULT FALSE,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_item) REFERENCES item(id) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY(id_usuario, id_item)
);

CREATE TABLE membro_grupo(
	id_usuario INT NOT NULL,
	id_grupo INT NOT NULL,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_grupo) REFERENCES grupo(id) ON UPDATE CASCADE ON DELETE CASCADE,
	PRIMARY KEY(id_usuario, id_grupo)
);

CREATE TABLE missoes_vencidas_grupo(
	id_grupo INT NOT NULL,
	id_missao INT NOT NULL,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_grupo) REFERENCES grupo(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_missao) REFERENCES missao(id) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY(id_grupo, id_missao)
);