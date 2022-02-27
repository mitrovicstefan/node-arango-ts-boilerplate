'use strict'
import 'dotenv/config'
import express  from 'express'
import cookieParser from 'cookie-parser'

import indexRouter from './routes/index'

const PORT = (process.env as any).PORT | 8091
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('dont-tell-anyone'))

app.use('/api', indexRouter)


app.listen(PORT, HOST)
console.log(`Running on https://${HOST}:${PORT}`)