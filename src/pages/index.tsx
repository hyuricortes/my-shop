import { CardProduct } from "@/components/CardProduct";
import { Filtro } from "@/components/Filtro";
import { Paginacao } from "@/components/Paginacao";
import { SelectOrderFiltro } from "@/components/SelectOrderFiltro";
import { useEffect, useState } from "react";
import { api } from "./lib/axios";
import { ContainerFilter, ContainerIndex, ContainerOrderFiltro, ContainerPaginationProducts, ContainerProducts, ContainerProductsList } from "./styles";

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


type Category = {
  id: string 
  name: string 
}

type Categories = {
    data: Array<Category>
}


export default function Home() {

   const [products , setProducts] = useState<Produts>()
   const [categories , setCategories] = useState<Categories>()

   useEffect(() => {
      listProducts()
      listCategories()
   }, [])

   const listProducts = async () => {
      
      try {
       const { data } = await api.get('/products');  
       setProducts(data) 
      } catch (error) {
       console.log(error)  
      }
   }

   const listCategories = async () => {
      try {
       const { data } = await api.get('/categories/all');  
       setCategories(data) 
      } catch (error) {
       console.log(error)  
      }
   }

  return (
    <ContainerIndex>
      <ContainerFilter>
         <Filtro categories={categories} />
      </ContainerFilter>
      <ContainerProducts>
         <ContainerOrderFiltro>
            <SelectOrderFiltro />
         </ContainerOrderFiltro>
         <ContainerProductsList>
            {
               products?.data.length &&
               products.data.map((item) => {
                  return <CardProduct 
                     key={String(item.id)}
                     categories={item.categoria_id} 
                     name={item.name}
                     preco={item.preco}
                     url={item.imagem}
                  />
               })
            }
         </ContainerProductsList>
         <ContainerPaginationProducts>
             <Paginacao />
         </ContainerPaginationProducts>
      </ContainerProducts>
    </ContainerIndex>
  )
}


