import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateForMmc1746875940386 implements MigrationInterface {
    name = 'UpdateForMmc1746875940386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`averageGrade\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`fileParentalAuthorizationUrl\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`guardianFullName\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`guardianPhoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`healthInformations\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`highschool\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`mathAverageGrade\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`mathRanking\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`ranking\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`relationshipWithGuardian\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`studentNumber\``);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`emergencyContactFullName\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`emergencyContactPhoneNumber\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`emergencyContactRelationship\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`universityType\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`universityName\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`educationField\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`educationField\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`universityName\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`universityType\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`emergencyContactRelationship\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`emergencyContactPhoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`emergencyContactFullName\``);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`studentNumber\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`relationshipWithGuardian\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`ranking\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`mathRanking\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`mathAverageGrade\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`highschool\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`healthInformations\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`guardianPhoneNumber\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`guardianFullName\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`fileParentalAuthorizationUrl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`averageGrade\` varchar(255) NOT NULL DEFAULT ''`);
    }

}
