import { MigrationInterface, QueryRunner } from "typeorm"
import { InitSeed } from "../seeds/init.seed"

export class initialSeed1679196796423 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        InitSeed.run(queryRunner.manager)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
