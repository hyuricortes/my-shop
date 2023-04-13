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
  precoMin: string;
  precoMax: string;
  setPrecoMin: any;
  setPrecoMax: any;
  handleLimparFiltro: any;
  setCategoria: any;
  categoria: [];
}

export const Filtro = ({setCategoria, categoria, categories, precoMin, precoMax, setPrecoMin, setPrecoMax, handleLimparFiltro} : Filtros) => {
    const [tagPreco, setTagPreco] = useState<boolean>(false);
    const [tagCategorias, setTagCategorias] = useState<boolean>(false);

    
    return (
        <>
        <ButtonCollapse  onClick={() => setTagCategorias(!tagCategorias)}>Categorias</ButtonCollapse>
         {
          tagCategorias &&
           <BoxFilter>
            {
              categories.data.length &&
              categories.data.map((item: Category) => {
                return <CheckBoxInput value={item.id} setCategoria={setCategoria} categoria={categoria} key={String(item.id)} name={item.id}  label={item.name} /> 
              })
            }
           </BoxFilter>
         }
         <Divisor />
         <ButtonCollapse onClick={() => setTagPreco(!tagPreco)}>Preço</ButtonCollapse>
          {
           tagPreco &&
              <BoxFilter>
                <FiltroInput 
                  setPrecoMin={setPrecoMin}  
                  setPrecoMax={setPrecoMax}
                  precoMin={String(precoMin)}
                  precoMax={String(precoMax)}
                />
              </BoxFilter>
          }
         <Divisor />
         <BoxCleanFilter>
           <ButtonFilter onClick={() => handleLimparFiltro()}>Limpar Filtrar</ButtonFilter> 
         </BoxCleanFilter>
        </>
    )
}