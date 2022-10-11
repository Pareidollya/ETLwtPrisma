/*
  Warnings:

  - You are about to alter the column `nota` on the `matriculas` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(5,2)`.
  - Made the column `nota` on table `matriculas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "matriculas" ALTER COLUMN "nota" SET NOT NULL,
ALTER COLUMN "nota" SET DATA TYPE DECIMAL(5,2);
