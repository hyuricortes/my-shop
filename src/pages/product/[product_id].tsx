import { useRouter } from "next/router"
import { ButtonsProduct, ImagePequenoProduto, ContainerDescriptionProduct, ContainerImagemProduct, ContainerProduct, DescriptionProduct, NumberInputQt, NumberSizeProduct, PriceProduct, ShareProduct, SizeProduct, SubTextPriceProduct, TextLikeShareProduct, TextPriceProduct, TextProduct, TextShareProduct, TextSizeProduct } from "./styles"

import { FaHeart, FaShare } from "react-icons/fa";
import { Button } from "@/components/Button";

import Image from "next/image";

export default function Product() {
    const { query } = useRouter()

    return (
        <ContainerProduct>
            <ContainerImagemProduct>
               <ImagePequenoProduto datatype='ativo'/>
               <ImagePequenoProduto />
               <ImagePequenoProduto />
            </ContainerImagemProduct>
            <ContainerDescriptionProduct>
                <TextProduct>Tênis Nike Go FlyEase Feminino</TextProduct>
                <DescriptionProduct>Dispense os cadarços e saia para o mundo. Estes tênis contam com a revolucionária tecnologia FlyEase da Nike, que facilita calçar e tirar. Com um calcanhar que se abre para calçar sem o auxílio das mãos, eles são excelentes para pessoas com mobilidade limitada ou para qualquer pessoa que queira uma forma mais rápida de se preparar.</DescriptionProduct>
                <SizeProduct>
                    <TextSizeProduct>Tamanho: </TextSizeProduct>
                    <NumberSizeProduct >
                        40
                    </NumberSizeProduct>
                    <NumberSizeProduct hidden={true}>
                        41
                    </NumberSizeProduct>
                    <NumberSizeProduct>
                        42
                    </NumberSizeProduct>
                    <NumberSizeProduct>
                        43
                    </NumberSizeProduct>
                    <NumberSizeProduct>
                        44
                    </NumberSizeProduct>
                </SizeProduct>
                <PriceProduct>
                    <SubTextPriceProduct>R$ 1200.00</SubTextPriceProduct>
                    <TextPriceProduct>R$ 710,6</TextPriceProduct>
                </PriceProduct>
                <ButtonsProduct>
                    <NumberInputQt type="number" name="qt_produtos" />
                    <Button />
                </ButtonsProduct>
                <ShareProduct>
                    <TextLikeShareProduct><FaHeart /> &nbsp; Lista de desejos</TextLikeShareProduct>
                    <TextShareProduct><FaShare /> &nbsp; Compartilhar</TextShareProduct>
                </ShareProduct>
            </ContainerDescriptionProduct>
        </ContainerProduct>
    )
}