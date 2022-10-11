/*
  Warnings:

  - The primary key for the `ft_matriculas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ft_matriculas" DROP CONSTRAINT "mat_pk",
ADD COLUMN     "id_mat" SERIAL NOT NULL,
ADD CONSTRAINT "mat_pk" PRIMARY KEY ("id_data", "id_alu", "id_disc", "id_curso", "id_mat");

-- AlterTable
CREATE SEQUENCE "tempo_id_data_seq";
ALTER TABLE "tempo" ALTER COLUMN "id_data" SET DEFAULT nextval('tempo_id_data_seq');
ALTER SEQUENCE "tempo_id_data_seq" OWNED BY "tempo"."id_data";
