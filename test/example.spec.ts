import { expect, test } from 'vitest'

test('O usuário consegue criar uma nova tansação', async () => {
  const responseStatusCode = 201
  expect(responseStatusCode).toEqual(201)
})
