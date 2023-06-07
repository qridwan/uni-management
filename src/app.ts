import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersRouter from './app/modules/users/users.route'
import ApiError from './errors/ApiError'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)

//Testing
app.get('/', () => {
  //   res.send('Working Successfully')
  //   throw new Error('Working Failure')
  throw new ApiError(400, 'ore baba error')
})
app.use(globalErrorHandler)
export default app
