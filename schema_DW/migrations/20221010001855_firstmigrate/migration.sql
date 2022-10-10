-- CreateTable
CREATE TABLE "alunos" (
    "id_alu" SMALLINT NOT NULL,
    "mat_alu" BIGINT NOT NULL,
    "cotista" CHAR(1) NOT NULL,
    "cod_curso" INTEGER NOT NULL,

    CONSTRAINT "alu_fk" PRIMARY KEY ("id_alu")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id_curso" SMALLINT NOT NULL,
    "cod_curso" SMALLINT NOT NULL,
    "nom_curso" VARCHAR(80) NOT NULL,
    "nom_dpto" VARCHAR(50) NOT NULL,

    CONSTRAINT "cur_pk" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "id_disc" SMALLINT NOT NULL,
    "cod_disc" INTEGER NOT NULL,
    "nome_disc" VARCHAR(60) NOT NULL,
    "horas" INTEGER NOT NULL,

    CONSTRAINT "disc_pk" PRIMARY KEY ("id_disc")
);

-- CreateTable
CREATE TABLE "tempo" (
    "id_data" SMALLINT NOT NULL,
    "ano" SMALLINT NOT NULL,
    "semestre" SMALLINT NOT NULL,

    CONSTRAINT "tempo_pk" PRIMARY KEY ("id_data")
);

-- CreateTable
CREATE TABLE "ft_matriculas" (
    "id_data" SMALLINT NOT NULL,
    "id_alu" SMALLINT NOT NULL,
    "id_disc" SMALLINT NOT NULL,
    "id_curso" SMALLINT NOT NULL,
    "nota" DECIMAL(5,2) NOT NULL,
    "faltas" SMALLINT NOT NULL,
    "status" CHAR(1) NOT NULL,
    "cotista" VARCHAR NOT NULL,

    CONSTRAINT "mat_pk" PRIMARY KEY ("id_data","id_alu","id_disc","id_curso")
);

-- AddForeignKey
ALTER TABLE "ft_matriculas" ADD CONSTRAINT "ft_matr_aluno_fk" FOREIGN KEY ("id_alu") REFERENCES "alunos"("id_alu") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ft_matriculas" ADD CONSTRAINT "ft_matr_cur_fk" FOREIGN KEY ("id_curso") REFERENCES "cursos"("id_curso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ft_matriculas" ADD CONSTRAINT "ft_matr_data_fk" FOREIGN KEY ("id_data") REFERENCES "tempo"("id_data") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ft_matriculas" ADD CONSTRAINT "ft_matr_disc_fk" FOREIGN KEY ("id_disc") REFERENCES "disciplinas"("id_disc") ON DELETE NO ACTION ON UPDATE NO ACTION;
