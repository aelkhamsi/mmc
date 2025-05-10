import { MigrationInterface, QueryRunner } from 'typeorm';

export class EmailVerification1745947027096 implements MigrationInterface {
  name = 'EmailVerification1745947027096';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`verified\` tinyint NOT NULL DEFAULT 0`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`verificationCode\` varchar(255) NOT NULL DEFAULT ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP COLUMN \`verificationCode\``,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`verified\``);
  }
}
