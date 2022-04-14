import dotenv from 'dotenv';
import { Knex } from 'knex';
import knex from 'knex';

dotenv.config();

export class BaseDataBase {
  protected static connection: Knex | null = null;
  protected getConnection(): Knex {
    if (!BaseDataBase.connection) {
      BaseDataBase.connection = knex({
        client: 'mysql',
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_SCHEMA,
          multipleStatements: true,
        },
      });
    }
    return BaseDataBase.connection;
  }
}
