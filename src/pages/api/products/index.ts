import { prisma } from '@/pages/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next'; 


type Produt = {
  id: string
  name: string 
  categoria_id:string 
  preco: string
  preco_desconto: string
  imagem: string
  descricao: string
  created_at: Date 
}

type Produts = {
    data: Array<Produt>
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<Produts>) {

    if(req.method !== 'GET') {
        return res.status(405).end()
    }

    const products = await prisma.products.findMany()

    return res.status(200).json({
                data: products
        }); 
}