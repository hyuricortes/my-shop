import { prisma } from '@/pages/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next'; 


type Image = {
  id: string
  size: String
  url: string
  product_id: string 
  created_at: Date
}

type Images = {
    data: Array<Image>
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<Images>) {

    if(req.method !== 'GET') {
        return res.status(405).end()
    }

    const images = await prisma.sizesImages.findMany({
        where: {
            id: ''
        }
    })

    return res.status(200).json({
                data: images
        }); 
}