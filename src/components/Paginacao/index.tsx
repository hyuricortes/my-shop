import { ButtonArrow, ButtonNumber, ContainerPaginacao } from "./styles"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Paginacao = () => {
    return (
        <ContainerPaginacao>
             <ButtonArrow><FaArrowLeft /></ButtonArrow>
               <ButtonNumber hidden={true} datatype="first">1</ButtonNumber>
               <ButtonNumber>2</ButtonNumber>
               <ButtonNumber>...</ButtonNumber>
               <ButtonNumber>8</ButtonNumber>
               <ButtonNumber datatype="lasted">9</ButtonNumber>
             <ButtonArrow><FaArrowRight /></ButtonArrow>
        </ContainerPaginacao>
    )
}