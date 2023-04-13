import { useState } from "react"
import { CheckBoxInput } from "../CheckboxInput";
import { FiltroInput } from "../FiltroInput";
import { BoxCleanFilter, BoxFilter, ButtonCollapse, ButtonFilter, Divisor } from "./styles"

type Category = {
  id: string 
  name: string 
}

type Filtros = {
  categories: any
}

export const Filtro = ({categories} : Filtros) => {
    const [tagPreco, setTagPreco] = useState<boolean>(false);
    const [tagCategorias, setTagCategorias] = useState<boolean>(false);

    console.log('cat', categories) 
    
    return (
        <>
        <ButtonCollapse  onClick={() => setTagCategorias(!tagCategorias)}>Categorias</ButtonCollapse>
         {
          tagCategorias &&
           <BoxFilter>
            {
              categories.data.length &&
              categories.data.map((item: Category) => {
                return <CheckBoxInput key={String(item.id)} name={item.id}  label={item.name} /> 
              })
            }
           </BoxFilter>
         }
         <Divisor />
         <ButtonCollapse onClick={() => setTagPreco(!tagPreco)}>Preço</ButtonCollapse>
          {
           tagPreco &&
              <BoxFilter>
                <FiltroInput />
              </BoxFilter>
          }
         <Divisor />
         <BoxCleanFilter>
           <ButtonFilter onClick={() =>{}}>Limpar Filtrar</ButtonFilter> 
         </BoxCleanFilter>
        </>
    )
}