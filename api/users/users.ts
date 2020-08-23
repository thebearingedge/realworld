import Router from 'express-promise-router'

export default function usersRouter(): ReturnType<typeof Router> {
  return Router()
    .post('/users', async (req, res) => {

    })
}
