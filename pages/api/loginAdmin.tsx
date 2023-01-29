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
    const admins = db.collection("admin")
    const admin= await admins.findOne({email:email}) 
      if(admin)
      {
        if(admin.password === password)
        {
          res.json(admin)
        }
        else
        {
          res.json({message:"Wrong Password"})
          console.log(admin)
        }
      }
      else{
          res.json({message:"Email not found"})

      }
  }
