import express from 'express'
import swagger from 'swagger-ui-express'
import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())

app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile))
app.use(router)

const port = 3333

app.listen(port, () => {
  console.log(`server is running ${port}`)
})
