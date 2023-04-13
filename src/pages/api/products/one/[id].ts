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


export default async function handle(req: NextApiRequest, res: NextApiResponse<any>) {

    if(req.method !== 'GET') {
        return res.status(405).end()
    }
    
   const product = await prisma.products.findFirst({
        where: {
            id: String(req.query.id)
        }
    }) 

    return res.status(200).json(product); 
}