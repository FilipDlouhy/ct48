// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog, User } from '@/models'
import { MongoClient } from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    
    const { img,title,text,reporterId,dateCreatedString,dateCreated,blogId,marked } = req.body;
    const client = MongoClient.connect("mongodb+srv://Augustus:Filipovoheslo1@cluster0.pwpm4qt.mongodb.net/Blogs?retryWrites=true&w=majority")        
    const db = (await client).db()
    const blogs = db.collection("blogs")
    await blogs.findOneAndDelete({blogId:blogId})
    await blogs.insertOne({marked:marked, img:img,title:title,text:text,reporterId:reporterId,dateCreatedString:dateCreatedString,dateCreated:dateCreated,blogId:blogId })
    res.json("updated")

  }