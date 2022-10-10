/*
  Warnings:

  - Added the required column `test` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test" ADD COLUMN     "test" INTEGER NOT NULL;
