// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/models'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let {name,email,password,userId} = req.body
      
    let newUser:User ={
        name:name,
        email:email,
        userId:userId,
        password:password,
    }    
    console.log(newUser)
}
