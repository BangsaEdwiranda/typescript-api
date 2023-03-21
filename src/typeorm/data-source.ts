import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { initial1679196314642 } from "./migrations/1679196314642-initial";
import { initialSeed1679196796423 } from "./migrations/1679196796423-initial-seed";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    url: "postgres://postgres:postgres@postgres:5432/bangsa-api",
    entities: [ User ],
    migrations: [ initial1679196314642,
        initialSeed1679196796423
                ],
  };

export const dataSource = new DataSource(dataSourceOptions)
dataSource
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })