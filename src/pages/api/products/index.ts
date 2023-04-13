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

    
    const products = req.query.cat === '0' ? (
     req.query.name === "" ?
                await prisma.products.findMany({
                    where: {
                        preco: {
                            lte: String(req.query.max) !== "" ? String(req.query.max) : "950,00",
                            gte: String(req.query.min) !== "" ? String(req.query.min) : "0",
                        }
                    },
                    orderBy: {
                        name: req.query.order === "asc" ? "asc" : "desc"
                    },
                    skip: Number(req.query.p) == 1 ? 0 : (Number(req.query.p)- 1) + 9,
                    take: Number(req.query.p) == 1 ? 9 : (Number(req.query.p) - 1) + Number(req.query.p)*9
                })
                :
                await prisma.products.findMany({
                    where: {
                        preco: {
                            lte: String(req.query.max) !== "" ? String(req.query.max) : "950,00",
                            gte: String(req.query.min) !== "" ? String(req.query.min) : "0",
                        },
                        name: {
                            contains: String(req.query.name)
                        }
                    },
                    orderBy: {
                        name: req.query.order === "asc" ? "asc" : "desc"
                    },
                    skip: Number(req.query.p) == 1 ? 0 : (Number(req.query.p)- 1) + 9,
                    take: Number(req.query.p) == 1 ? 9 : (Number(req.query.p) - 1) + Number(req.query.p)*9
                })
         )
    :
    req.query.name === "" ?
        await prisma.products.findMany({
            where: {
                preco: {
                    lte: String(req.query.max) !== "" ? String(req.query.max) : "950,00",
                    gte: String(req.query.min) !== "" ? String(req.query.min) : "0",
                },
                categoria_id: {
                    in: [String(req.query.cat)]
                }
            },
            orderBy: {
                name: req.query.order === "asc" ? "asc" : "desc"
            },
            skip: Number(req.query.p) == 1 ? 0 : (Number(req.query.p)- 1) + 9,
            take: Number(req.query.p) == 1 ? 9 : (Number(req.query.p) - 1) + Number(req.query.p)*9
        }) 
    :
        await prisma.products.findMany({
            where: {
                preco: {
                    lte: String(req.query.max) !== "" ? String(req.query.max) : "950,00",
                    gte: String(req.query.min) !== "" ? String(req.query.min) : "0",
                },
                categoria_id: {
                    in: [String(req.query.cat)]
                },
                name: {
                    contains: String(req.query.name)
                }
            },
            orderBy: {
                name: req.query.order === "asc" ? "asc" : "desc"
            },
            skip: Number(req.query.p) == 1 ? 0 : (Number(req.query.p)- 1) + 9,
            take: Number(req.query.p) == 1 ? 9 : (Number(req.query.p) - 1) + Number(req.query.p)*9
        }) 



    return res.status(200).json({
                data: products
        }); 
}