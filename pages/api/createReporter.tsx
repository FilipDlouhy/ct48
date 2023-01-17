// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/models'
import { MongoClient } from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let {name,email,password,userId} = req.body

    const client = MongoClient.connect("mongodb+srv://Augustus:Filipovoheslo1@cluster0.pwpm4qt.mongodb.net/Blogs?retryWrites=true&w=majority")        
    const db = (await client).db()
    const reporters = db.collection("reporters")
    const reporter= await reporters.findOne({email:email}) 
    if(reporter)
    {
      res.json({message:"Email already Registered"})
    }
    else{
      await reporters.insertOne({ email:email,password:password,name:name,userId:userId}) 
      
      res.json({email:email,password:password,name:name,userId:userId})
    }
  }
