import { CardProduct } from "@/components/CardProduct";
import { Filtro } from "@/components/Filtro";
import { Paginacao } from "@/components/Paginacao";
import { SelectOrderFiltro } from "@/components/SelectOrderFiltro";
import { useContext, useEffect, useState } from "react";
import { api } from "./lib/axios";
import { ContainerFilter, ContainerIndex, ContainerOrderFiltro, ContainerPaginationProducts, ContainerProducts, ContainerProductsList } from "./styles";

import { useRouter } from 'next/navigation';
import { SearchContext } from "@/contexts/SeachContext";

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
   const { push } = useRouter();
   const [products , setProducts] = useState<Produts>()
   const [categories , setCategories] = useState<Categories>()

    const [precoMin, setPrecoMin] = useState<string>("")
    const [precoMax, setPrecoMax] = useState<string>("")
    const [categoria, setCategoria] = useState<[]>([])
    const [filteredCategoryId, setFilteredCategoryId] = useState("0");
    const [clean, setClean] = useState<boolean>(false);

    const { stateSearchAll , page } = useContext(SearchContext);

    const [order, setOrder] = useState("asc");

   const handleLimparFiltro = () => {
      setPrecoMax("");
      setPrecoMin("");
      setFilteredCategoryId('0');
      setClean(!clean)
   }

   useEffect(() => {
      listProducts(precoMin, precoMax)
      listCategories()
   }, [precoMin, precoMax, categoria, order, stateSearchAll, page])

   const listProducts = async (min: string, max: string) => {
      if (categoria.length === 0) {
         setFilteredCategoryId('0');
      } else {
         setFilteredCategoryId(categoria.join(","));
      }
      try {
       const { data } = await api.get(`/products?min=${min}&max=${max}&cat=${filteredCategoryId}&order=${order}&name=${stateSearchAll}&p=${page}`);  
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

   const handleProductRedirect = async (uuid: string) => {
      push(`/product/${uuid}`);
   }

  return (
    <ContainerIndex>
      <ContainerFilter>
         <Filtro 
            categories={categories} 
            precoMin={String(precoMin)} 
            precoMax={String(precoMax)} 
            setPrecoMax={setPrecoMax} 
            setPrecoMin={setPrecoMin} 
            categoria={categoria}
            setCategoria={setCategoria}
            handleLimparFiltro={handleLimparFiltro}
            />
      </ContainerFilter>
      <ContainerProducts>
         <ContainerOrderFiltro>
            <SelectOrderFiltro 
             order={order}
             setOrder={setOrder}
            />
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
                     handleClick={handleProductRedirect}
                     uuid={String(item.id)}
                  />
               })
            }
         </ContainerProductsList>
         <ContainerPaginationProducts>
            <Paginacao size={Number(products?.data.length)} />
         </ContainerPaginationProducts>
      </ContainerProducts>
    </ContainerIndex>
  )
}


