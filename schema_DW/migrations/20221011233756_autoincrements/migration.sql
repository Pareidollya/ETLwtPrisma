-- AlterTable
CREATE SEQUENCE "alunos_id_alu_seq";
ALTER TABLE "alunos" ALTER COLUMN "id_alu" SET DEFAULT nextval('alunos_id_alu_seq');
ALTER SEQUENCE "alunos_id_alu_seq" OWNED BY "alunos"."id_alu";

-- AlterTable
CREATE SEQUENCE "cursos_id_curso_seq";
ALTER TABLE "cursos" ALTER COLUMN "id_curso" SET DEFAULT nextval('cursos_id_curso_seq');
ALTER SEQUENCE "cursos_id_curso_seq" OWNED BY "cursos"."id_curso";

-- AlterTable
CREATE SEQUENCE "disciplinas_id_disc_seq";
ALTER TABLE "disciplinas" ALTER COLUMN "id_disc" SET DEFAULT nextval('disciplinas_id_disc_seq');
ALTER SEQUENCE "disciplinas_id_disc_seq" OWNED BY "disciplinas"."id_disc";
