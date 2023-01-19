import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { createContext } from 'react';
export type User = {
    name: string;
    userId:string,
    password:string,
    email:string,
  };
  export type Reporter = {
    name: string;
    userId:string,
    password:string,
    email:string,
    img:string,
    dateCreatedString:string,
    dateCreated:number,

  };
  export type Blog = {
    img:string,
    title:string,
    text:string,
    reporterId:string,
    dateCreatedString:string,
    dateCreated:number,
    blogId:string,
    marked:string[]|undefined,

  }

  export type BlogContext = {
    userId:string|undefined,
    setUserId:Dispatch<SetStateAction<string|undefined>>,  
    user:User|undefined,
    setUser:Dispatch<SetStateAction<User|undefined>>,
    reporterId:string|undefined,
    setReporterId:Dispatch<SetStateAction<string|undefined>>,  
    reporter:Reporter|undefined,
    setReporter:Dispatch<SetStateAction<Reporter|undefined>>,
    reporterBlogs:Blog[] | undefined,
    setReporterBlogs:Dispatch<SetStateAction<Blog[] | undefined>>
    updatedBlog:Blog | undefined,
    setUpdatedBlog:Dispatch<SetStateAction<Blog | undefined>>,
    markedBlog:Blog | undefined,
    setMarkedBlog:Dispatch<SetStateAction<Blog | undefined>>
  }
  export const blogContext = createContext<BlogContext>({
    userId:"", // set a default value
    setUserId: () => {},
    user:undefined,
    setUser:()=>{},
    reporterId:"",
    setReporterId:()=>{},
    reporter:undefined,
    setReporter:()=>{},
    reporterBlogs:undefined,
    setReporterBlogs:()=>{},
    updatedBlog:undefined,
    setUpdatedBlog:()=>{}, 
    markedBlog:undefined,
    setMarkedBlog:()=>{}
  })