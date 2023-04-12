import { Filtro } from "@/components/Filtro";
import { useState } from "react";
import { ContainerFilter, ContainerIndex, ContainerProducts } from "./styles";


export default function Home() {

  const [tagCollapse, setTagCollapse] = useState<string>("")


  return (
    <ContainerIndex>
      <ContainerFilter>
         <Filtro />
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
