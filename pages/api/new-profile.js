// /api/new-profile
import { PrismaClient } from "@prisma/client";
import  { NextApiHandler,NextApiResponse } from "next"
import { sendError } from "next/dist/server/api-utils";

const  prisma = new PrismaClient()
export default async function handler(req, res) {

  //res.status(200).json({ name: 'John Doe' })
  if (req.method === 'POST'){
    const {body:hoho} = req
    const data = JSON.parse(hoho)
    if(data.type === 'send'){
      console.log('sasa',data.isgay)
      const a = new Date(data.birthdate)
      var b = true
      if( data.isgay == ''){ b = false ;}
      else{
          b = data.isgay;
      }
      console.log('sasaasaasasas',b)
      console.log('test',data)
      res.json({data});
      const newUser= await prisma.Profile.create({
          data: {
              firstname: data.firstname,
              middlename: data.middlename,
              lastname: data.lastname,
              email: data.email,
              password: data.password,
              age: data.age,
              birthdate: a,    
              isgay: b
                
            }})
    
    }}
}
