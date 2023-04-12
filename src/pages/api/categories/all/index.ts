import { prisma } from '@/pages/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next'; 


type Category = {
  id: string 
  name: string 
}

type Categories = {
    data: Array<Category>
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<Categories>) {

    if(req.method !== 'GET') {
        return res.status(405).end()
    }

    const categories = await prisma.categories.findMany()

    return res.status(200).json({
                data: categories
        }); 
}