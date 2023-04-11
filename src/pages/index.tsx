import { useState } from "react";
import { BoxCleanFilter, ButtonCollapse, ButtonFilter, ContainerFilter, ContainerIndex, ContainerProducts, Divisor, TextCatgories } from "./styles";


export default function Home() {

  const [tagCollapse, setTagCollapse] = useState<string>("")


  return (
    <ContainerIndex>
      <ContainerFilter>
         <ButtonCollapse  onClick={() => setTagCollapse('categorias')}>Categorias</ButtonCollapse>

         {
          tagCollapse !== '' && tagCollapse == 'categorias' &&
              <p>categorias</p>
         }
          
         
         
         <Divisor />

         <ButtonCollapse onClick={() => setTagCollapse('precos')}>Preço</ButtonCollapse>

          {
          tagCollapse !== '' && tagCollapse == 'precos' &&
              <p>precos</p>
         }

         <Divisor />
         <BoxCleanFilter>
           <ButtonFilter onClick={() =>{}}>Limpar Filtrar</ButtonFilter> 
         </BoxCleanFilter>
         
      </ContainerFilter>
      <ContainerProducts>
         1222222222222222
         222222222222
         2222222222
         22222222222222
         222222222222222
         222222222222222
         22222222222222
      </ContainerProducts>
    </ContainerIndex>
  )
}
