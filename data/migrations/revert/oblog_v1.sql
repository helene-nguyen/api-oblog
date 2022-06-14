-- Revert oblog:oblog_v1 from pg

BEGIN;

-- Suppression des tables si elles existent
DROP TABLE IF EXISTS "article", "category";

COMMIT;
