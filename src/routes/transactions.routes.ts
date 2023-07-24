import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'

const transactionsRoutes = async (app: FastifyInstance) => {
  //   app.get('/transactions', async (request, reply) => {})
  //   app.get('/transactions/:id', async (request, reply) => {})
  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : -amount,
    })

    return reply.status(201).send()
  })
}

export { transactionsRoutes }
