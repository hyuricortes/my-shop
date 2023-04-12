import { useState } from "react"
import { CheckBoxInput } from "../CheckboxInput";
import { FiltroInput } from "../FiltroInput";
import { BoxCleanFilter, BoxFilter, ButtonCollapse, ButtonFilter, Divisor } from "./styles"



export const Filtro = () => {
    const [tagPreco, setTagPreco] = useState<boolean>(false);
    const [tagCategorias, setTagCategorias] = useState<boolean>(false);
    
    return (
        <>
        <ButtonCollapse  onClick={() => setTagCategorias(!tagCategorias)}>Categorias</ButtonCollapse>
         {
          tagCategorias &&
           <BoxFilter>
              <CheckBoxInput name='1'  label="categoria 1" /> 
              <CheckBoxInput name='2' label="categoria 2" /> 
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