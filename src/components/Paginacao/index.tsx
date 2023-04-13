import { ButtonArrow, ButtonNumber, ButtonNumberLeft, ButtonNumberRigth, ContainerPaginacao } from "./styles"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "@/contexts/SeachContext";

type Pag = {
  size: number;
}

export const Paginacao = ({ size }: Pag) => {
    const pags = size/9;
    const { handlePage, page } = useContext(SearchContext)

    return (
        <ContainerPaginacao>
             <ButtonArrow><FaArrowLeft /></ButtonArrow>
               {
                pags <= 1  ? 
                 <ButtonNumber onClick={() => handlePage(1)}>1</ButtonNumber>
                :
                pags <= 2 ?
                 <>
                  <ButtonNumberLeft onClick={() => handlePage(1)}>1</ButtonNumberLeft>
                  <ButtonNumberRigth onClick={() => handlePage(2)}>2</ButtonNumberRigth>
                 </>
                 :
                  <>
                    <ButtonNumberLeft onClick={() => handlePage(page)}>{page}</ButtonNumberLeft>
                    <ButtonNumber>...</ButtonNumber>
                    <ButtonNumberRigth onClick={() => handlePage(page + 1)}>{page + 1}</ButtonNumberRigth>
                  </>
               }
             <ButtonArrow><FaArrowRight /></ButtonArrow>
        </ContainerPaginacao>
    )
}