// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/models'
import { MongoClient } from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let {email,password} = req.body
    console.log(req.body)
    const client = MongoClient.connect("mongodb+srv://Augustus:Filipovoheslo1@cluster0.pwpm4qt.mongodb.net/Blogs?retryWrites=true&w=majority")        
    const db = (await client).db()
    const users = db.collection("users")
    const user= await users.findOne({email:email}) 
    if(user)
    {
      if(user.password === password)
      {
        res.json(user)
      }
      else
      {
        res.json({message:"Wrong Password"})
      }
    }
    else{
        res.json({message:"Email not found"})

    }
  }
