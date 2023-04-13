import { useRouter } from "next/router"
import { ButtonsProduct, ImagePequenoProduto, ContainerDescriptionProduct, ContainerImagemProduct, ContainerProduct, DescriptionProduct, NumberInputQt, NumberSizeProduct, PriceProduct, ShareProduct, SizeProduct, SubTextPriceProduct, TextLikeShareProduct, TextPriceProduct, TextProduct, TextShareProduct, TextSizeProduct } from "./styles"

import { FaHeart, FaShare } from "react-icons/fa";
import { Button } from "@/components/Button";

import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { borderColor } from "polished";

type Produt = {
  id: string
  name: string 
  categoria_id:string 
  preco: string
  preco_desconto: string
  imagem: string
  descricao: string
  created_at: Date 
}

type Size = {
  id: string
  size: String
  url: string
  product_id: string 
  created_at: Date
}

type Sizes = {
    data: Array<Size>
}

export default function Product() {
    const { query } = useRouter()
    const [product , setProduct] = useState<Produt>()
    const [sizes, setSizes] = useState<Sizes>()
    const [size, setSize] = useState<string>()
    const [isLike, setIsLike] = useState<boolean>(false)
    const [quant, setQuant] = useState<number>(1);

   useEffect(() => {
    if(query.product_id){
      getProduct(String(query.product_id))
      getSizes(String(query.product_id))
    }
   }, [query.product_id])

   const getProduct = async (uuid: string) => {
     try {
       const { data } = await api.get(`/products/one/${uuid}`);  
       if(data) {
        setProduct(data)
       } 
      } catch (error) {
       console.log(error)  
      }
   }

   const getSizes = async (uuid: string) => {
     try {
       const { data } = await api.get(`/sizes/${uuid}`);  
       if(data) {
        setSizes(data)
       } 
      } catch (error) {
       console.log(error)  
      }
   }

    return (
        <ContainerProduct>
            <ContainerImagemProduct defaultValue={`../../images/products/produto-grande.jpg`}>
               <ImagePequenoProduto datatype='ativo'/>
               <ImagePequenoProduto />
               <ImagePequenoProduto />
            </ContainerImagemProduct>
            <ContainerDescriptionProduct>
                <TextProduct>{product?.name}</TextProduct>
                <DescriptionProduct>{product?.descricao}.</DescriptionProduct>
                <SizeProduct>
                    <TextSizeProduct>Tamanho: </TextSizeProduct>
                    {
                        sizes?.data.length ?
                        sizes?.data.map((item) => {
                         if(item.size !== ''){
                          return(
                            // eslint-disable-next-line react/jsx-key
                            <NumberSizeProduct onClick={() => setSize(String(item.size))} style={(size == item.size) ? {borderColor:'#6237BE'} : {borderColor:'#E2E5EA'}}>{item.size}</NumberSizeProduct>
                          )
                         }
                        })
                        :
                        <p></p>
                    }
                </SizeProduct>
                <PriceProduct>
                    <SubTextPriceProduct>R$ {product?.preco}</SubTextPriceProduct>
                    <TextPriceProduct>R$ {product?.preco_desconto}</TextPriceProduct>
                </PriceProduct>
                <ButtonsProduct>
                    <NumberInputQt type="number" name="qt_produtos" value={quant} onChange={(e) => setQuant(Number(e.target.value))}/>
                    <Button />
                </ButtonsProduct>
                <ShareProduct>
                    <TextLikeShareProduct><FaHeart onClick={() => setIsLike(!isLike)} color={ isLike ? "#b32c2c" : "#828D9E" } /> &nbsp; Lista de desejos</TextLikeShareProduct>
                    <TextShareProduct><FaShare /> &nbsp; Compartilhar</TextShareProduct>
                </ShareProduct>
            </ContainerDescriptionProduct>
        </ContainerProduct>
    )
}