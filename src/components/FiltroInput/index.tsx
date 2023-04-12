import { InputText } from "../Input"
import { DivInputFiltroPreco } from "../Input/styles"
import { ContainerPrecosFiltros } from "./styles"



export const FiltroInput = () => {
    return  (
        <ContainerPrecosFiltros>
             <InputText />
             <DivInputFiltroPreco>-</DivInputFiltroPreco>
             <InputText />
        </ContainerPrecosFiltros>
    )
}