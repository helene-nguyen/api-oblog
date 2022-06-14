-- Verify oblog:oblog_v1 on pg

BEGIN;

-- Vérifications de l'existances des tables
SELECT "id" FROM "article";
SELECT "id" FROM "category";


ROLLBACK;
