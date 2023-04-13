import { InputText } from "../Input"
import { DivInputFiltroPreco } from "../Input/styles"
import { ContainerPrecosFiltros } from "./styles"

type FiltroInputDTO = {
    precoMin: string;
    precoMax: string;
    setPrecoMin: any;
    setPrecoMax: any;
}

export const FiltroInput = ({ precoMax, precoMin, setPrecoMax, setPrecoMin }: FiltroInputDTO) => {
    return  (
        <ContainerPrecosFiltros>
             <InputText text={precoMin} handleText={setPrecoMin} placeholder="100" />
             <DivInputFiltroPreco>-</DivInputFiltroPreco>
             <InputText  text={precoMax} handleText={setPrecoMax} placeholder="500"/>
        </ContainerPrecosFiltros>
    )
}