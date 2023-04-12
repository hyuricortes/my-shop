-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "preco_desconto" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_products" ("categoria_id", "created_at", "descricao", "id", "imagem", "name", "preco", "preco_desconto") SELECT "categoria_id", "created_at", "descricao", "id", "imagem", "name", "preco", "preco_desconto" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
