import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "rentx",
  password: "rentx",
  database: "rentx",
  logging: false,
  subscribers: [],
  entities: [
    "src/modules/**/infra/typeorm/entities/*{.ts,.js}"
 ],
  migrations: ['src/shared/infra/typeorm/migration/*.{ts,js}'],
})