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