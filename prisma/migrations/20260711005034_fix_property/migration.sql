/*
  Warnings:

  - You are about to drop the column `pricePerDay` on the `gear_items` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerDay` on the `rental_order_items` table. All the data in the column will be lost.
  - Added the required column `price` to the `gear_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `rental_order_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gear_items" DROP COLUMN "pricePerDay",
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL;

-- AlterTable
ALTER TABLE "rental_order_items" DROP COLUMN "pricePerDay",
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL;
