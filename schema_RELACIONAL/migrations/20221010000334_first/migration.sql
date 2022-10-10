-- CreateTable
CREATE TABLE "alunos" (
    "mat_alu" INTEGER NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "dat_entrada" DATE NOT NULL,
    "cod_curso" INTEGER NOT NULL,
    "cotista" CHAR(1) NOT NULL,

    CONSTRAINT "alu_fk" PRIMARY KEY ("mat_alu")
);

-- CreateTable
CREATE TABLE "cursos" (
    "cod_curso" INTEGER NOT NULL,
    "nom_curso" VARCHAR(80) NOT NULL,
    "cod_dpto" INTEGER NOT NULL,

    CONSTRAINT "cur_pk" PRIMARY KEY ("cod_curso")
);

-- CreateTable
CREATE TABLE "departamentos" (
    "cod_dpto" INTEGER NOT NULL,
    "nome_dpto" VARCHAR(50) NOT NULL,

    CONSTRAINT "departamentos_pk" PRIMARY KEY ("cod_dpto")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "cod_disc" INTEGER NOT NULL,
    "nome_disc" VARCHAR(60) NOT NULL,
    "carga_horaria" INTEGER NOT NULL,

    CONSTRAINT "disc_pk" PRIMARY KEY ("cod_disc")
);

-- CreateTable
CREATE TABLE "matriculas" (
    "semestre" INTEGER NOT NULL,
    "mat_alu" INTEGER NOT NULL,
    "cod_disc" INTEGER NOT NULL,
    "nota" INTEGER,
    "faltas" INTEGER,
    "status" CHAR(1),

    CONSTRAINT "mat_pk" PRIMARY KEY ("mat_alu","semestre")
);

-- CreateTable
CREATE TABLE "matrizes_cursos" (
    "cod_curso" INTEGER NOT NULL,
    "cod_disc" INTEGER NOT NULL,
    "periodo" INTEGER NOT NULL,

    CONSTRAINT "mcu_pk" PRIMARY KEY ("cod_curso","cod_disc")
);

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alu_cur_fk" FOREIGN KEY ("cod_curso") REFERENCES "cursos"("cod_curso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cur_der_fk" FOREIGN KEY ("cod_dpto") REFERENCES "departamentos"("cod_dpto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "mat_alu_fk" FOREIGN KEY ("mat_alu") REFERENCES "alunos"("mat_alu") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "mat_dis_fk" FOREIGN KEY ("cod_disc") REFERENCES "disciplinas"("cod_disc") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "matrizes_cursos" ADD CONSTRAINT "mcu_cur_fk" FOREIGN KEY ("cod_curso") REFERENCES "cursos"("cod_curso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "matrizes_cursos" ADD CONSTRAINT "mcu_dis_fk" FOREIGN KEY ("cod_disc") REFERENCES "disciplinas"("cod_disc") ON DELETE NO ACTION ON UPDATE NO ACTION;
