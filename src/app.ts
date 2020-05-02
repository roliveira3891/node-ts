import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import * as dotenv from 'dotenv'

import routes from './routes'

dotenv.config()
class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
      console.log(process.env.DB_HOST)
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect(`mongodb+srv://${process.env.DB_HOST}@cluster0-cocfn.mongodb.net/test?retryWrites=true&w=majority`, {
        useNewUrlParser: true
      })
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
