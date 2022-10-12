/*
  Warnings:

  - You are about to alter the column `mat_alu` on the `alunos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "alunos" ALTER COLUMN "mat_alu" SET DATA TYPE INTEGER;
