// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog, User } from '@/models'
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    
    const {banned,userId } = req.body;
    console.log("AASDADASD")
    const client = await MongoClient.connect("mongodb+srv://Augustus:Filipovoheslo1@cluster0.pwpm4qt.mongodb.net/Blogs?retryWrites=true&w=majority")        
    const db =  client.db()
    const reporters = db.collection("reporters")
    await reporters.updateOne({userId:userId},{$set: { banned: banned }})
    const newReporter = await reporters.findOne({userId:userId})
    res.json(newReporter)
  }