import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { createContext } from 'react';
export type User = {
    name: string;
    userId:string,
    password:string,
    email:string
  };
  export type BlogContext = {
    userId:string|undefined,
    setUserId:Dispatch<SetStateAction<string|undefined>>,  
    user:User|undefined,
    setUser:Dispatch<SetStateAction<User|undefined>>,
    reporterId:string|undefined,
    setReporterId:Dispatch<SetStateAction<string|undefined>>,  
    reporter:User|undefined,
    setReporter:Dispatch<SetStateAction<User|undefined>>,
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
  })