/*
  Warnings:

  - You are about to drop the column `categoria` on the `products` table. All the data in the column will be lost.
  - Added the required column `categoria_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "preco" TEXT NOT NULL,
    "preco_desconto" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_products" ("created_at", "descricao", "id", "imagem", "name", "preco", "preco_desconto") SELECT "created_at", "descricao", "id", "imagem", "name", "preco", "preco_desconto" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");
