import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUsersAddAvatar1718977950987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            type: 'varchar',
            name: 'avatar',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'avatar')
    }

}
