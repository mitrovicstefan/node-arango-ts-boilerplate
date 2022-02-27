'use strict'
import { Request, Response } from "express"
import { Database, aql } from "arangojs"

const DB = new Database({
    url: process.env.ARANGO_URL,
    databaseName: process.env.ARANGO_DB_NAME,
    auth: {username: 'root', password: process.env.ARANGO_PW}
})

export async function index(_req: Request, res: Response) {
    return res.send("Hello world")
}