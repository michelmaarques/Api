import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673729285039 implements MigrationInterface {
    name = 'default1673729285039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cursos" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "descricao" text, "vagas" integer NOT NULL, "modelo" text NOT NULL, CONSTRAINT "PK_391c5a635ef6b4bd0a46cb75653" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cursos"`);
    }

}
