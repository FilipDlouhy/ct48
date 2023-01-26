// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog, User } from '@/models'
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    
    const { img,title,text,reporterId,dateCreatedString,dateCreated,blogId,marked } = req.body;
    const client = await MongoClient.connect("mongodb+srv://Augustus:Filipovoheslo1@cluster0.pwpm4qt.mongodb.net/Blogs?retryWrites=true&w=majority")        
    const db =  client.db()
    const blogs = db.collection("blogs")
    await blogs.updateOne({blogId:blogId},{$set: { marked: marked }})
    const newBlogs = await blogs.find().toArray()
    res.json(newBlogs)
  }