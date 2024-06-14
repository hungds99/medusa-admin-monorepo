import { generateEntityId } from '@medusajs/medusa';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOnboarding1717289623271 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "onboarding_state" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "current_step" character varying NULL, "is_complete" boolean, "product_id" character varying NULL)`,
    );

    await queryRunner.query(
      `INSERT INTO "onboarding_state" ("id", "current_step", "is_complete") VALUES ('${generateEntityId(
        '',
        'onboarding',
      )}' , NULL, false)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "onboarding_state"`);
  }
}
