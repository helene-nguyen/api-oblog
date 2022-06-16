
BEGIN;

-- Création de la table Article
CREATE TABLE IF NOT EXISTS "article" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "category" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL REFERENCES "category"("id")
    
);

-- Création de la table Category
CREATE TABLE IF NOT EXISTS "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "route" TEXT NOT NULL,
  "label"  TEXT NOT NULL
);

COMMIT;
