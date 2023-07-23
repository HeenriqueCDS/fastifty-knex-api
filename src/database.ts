import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL env var')
}

const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

const knex = setupKnex(config)

export { knex, config }
