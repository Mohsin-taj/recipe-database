import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1770396606217 implements MigrationInterface {
    name = 'InitialMigration1770396606217'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe_ingredient" ("recipeIngredientId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "quantity" character varying NOT NULL, "recipeId" uuid, CONSTRAINT "PK_15ee5c7584a82287163252ae03c" PRIMARY KEY ("recipeIngredientId"))`);
        await queryRunner.query(`CREATE TABLE "recipe" ("recipeId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_8494c93842e9eba2d6006812855" PRIMARY KEY ("recipeId"))`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_1ad3257a7350c39854071fba211" FOREIGN KEY ("recipeId") REFERENCES "recipe"("recipeId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_1ad3257a7350c39854071fba211"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
        await queryRunner.query(`DROP TABLE "recipe_ingredient"`);
    }

}
