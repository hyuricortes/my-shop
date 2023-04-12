import { prisma } from '@/pages/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next'; 


type Size = {
  id: string
  size: String
  url: string
  product_id: string 
  created_at: Date
}

type Sizes = {
    data: Array<Size>
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<Sizes>) {

    if(req.method !== 'GET') {
        return res.status(405).end()
    }

    const sizes = await prisma.sizesImages.findMany({
        where: {
            id: ''
        }
    })

    return res.status(200).json({
                data: sizes
        }); 
}