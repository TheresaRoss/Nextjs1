// /api/profile-update
import { PrismaClient } from "@prisma/client";
import  { NextApiHandler,NextApiResponse } from "next"
import { sendError } from "next/dist/server/api-utils";

const  prisma = new PrismaClient()
export default async function handler(req, res) {

  //res.status(200).json({ name: 'John Doe' })
  if (req.method === 'GET'){
        console.log('dsdssssds')

        const newUser= await prisma.Profile.findMany({

        })
        
        const haha = JSON.stringify(newUser)
       
        res.status(200).json({
            body:newUser
        })
        console.log('finished')
    }
}
