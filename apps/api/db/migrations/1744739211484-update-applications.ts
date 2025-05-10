import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateApplications1744739211484 implements MigrationInterface {
  name = 'UpdateApplications1744739211484';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`activityChoices\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`educationField\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`numberOfStudentsInClass\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`hasPreviouslyParticipated\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`previousCompetitions\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoTitle\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoLink\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoSubject\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoMotivations\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoRessources\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`standSubjectTitle\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`standSubjectDetails\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`standMembers\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileMembersCnieUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`studentNumber\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`healthInformations\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`hasPreviousMathMarocParticipations\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`previousMathMarocParticipations\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`hasPreviousExperiences\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`previousExperiences\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileSchoolCertificateUrl\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileRegulationsUrl\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileRegulationsUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileSchoolCertificateUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`previousExperiences\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`hasPreviousExperiences\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`previousMathMarocParticipations\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`hasPreviousMathMarocParticipations\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`healthInformations\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`studentNumber\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileMembersCnieUrl\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`standMembers\` text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`standSubjectDetails\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`standSubjectTitle\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoRessources\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoMotivations\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoSubject\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoLink\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoTitle\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`previousCompetitions\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`hasPreviouslyParticipated\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`numberOfStudentsInClass\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`educationField\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`activityChoices\` text NOT NULL`,
    );
  }
}
