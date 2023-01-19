// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog, User } from '@/models'
import { MongoClient } from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log()
    const client = MongoClient.connect("mongodb+srv://Augustus:Filipovoheslo1@cluster0.pwpm4qt.mongodb.net/Blogs?retryWrites=true&w=majority")        
    const db = (await client).db()
    const reporters = db.collection("reporters")
    let allReporters =await reporters.find().toArray()
    res.json(allReporters)

  }