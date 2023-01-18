// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog, User } from '@/models'
import { MongoClient } from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    const query = req.query;
    const { blogId } = query;
    const client = MongoClient.connect("mongodb+srv://Augustus:Filipovoheslo1@cluster0.pwpm4qt.mongodb.net/Blogs?retryWrites=true&w=majority")        
    const db = (await client).db()
    const blogs = db.collection("blogs")
    let blog =await blogs.findOneAndDelete({blogId:blogId})
    res.json(blog)

  }