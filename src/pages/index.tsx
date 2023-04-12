import { Filtro } from "@/components/Filtro";
import { SelectOrderFiltro } from "@/components/SelectOrderFiltro";
import { useState } from "react";
import { ContainerFilter, ContainerIndex, ContainerOrderFiltro, ContainerProducts } from "./styles";


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
         <p>2</p>
         <p>3</p>
      </ContainerProducts>
    </ContainerIndex>
  )
}
