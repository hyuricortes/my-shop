import { CardProduct } from "@/components/CardProduct";
import { Filtro } from "@/components/Filtro";
import { SelectOrderFiltro } from "@/components/SelectOrderFiltro";
import { useState } from "react";
import { ContainerFilter, ContainerIndex, ContainerOrderFiltro, ContainerProducts, ContainerProductsList } from "./styles";


export default function Home() {

  const [tagCollapse, setTagCollapse] = useState<string>("")

  return (
    <ContainerIndex>
      <ContainerFilter>
         <Filtro />
      </ContainerFilter>
      <ContainerProducts>
         <ContainerOrderFiltro>
            <SelectOrderFiltro />
         </ContainerOrderFiltro>
         <ContainerProductsList>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
         </ContainerProductsList>
         <p>3</p>
      </ContainerProducts>
    </ContainerIndex>
  )
}
