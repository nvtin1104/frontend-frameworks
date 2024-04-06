/* eslint-disable no-console */
import { corsOptions } from './configs/cors.js';
const express = require('express')
const bodyParser = require('body-parser')
const { APIs } = require('./routes/index.js')
const { env } = require('./configs/environment.js');
const { CONNECT_DB } = require('./configs/mongodb.js');
const { errorHandlingMiddleware } = require('./middlewares/errorHandlingMiddleware.js');
const cors = require('cors');

const START_SERVER = () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors())
  app.use('/api', APIs)

  // app.use('/api', chatgpt);
  // app.use('/api/prompt', promptRouter);

  app.use(errorHandlingMiddleware);

  // -----------------

  app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
  })
  // app.use(errorHandlingMiddleware);
  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server is running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })
};
(async () => {
  try {
    await CONNECT_DB()
    console.log('Connect to MongoDB Atlas successfully')
    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
})()

