import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

const knex = setupKnex(config)

export { knex, config }
