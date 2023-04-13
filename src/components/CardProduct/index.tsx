import { ImageCardProduct } from "../ImageCardProduct"
import { Card, CategoriesCardProduct, TextCardPriceProduct, TextNameProduct } from "./styles"

type Product = {
    categories: string;
    name: string;
    preco: string;
    url: string;
    handleClick: any;
    uuid: string;
}


export const CardProduct = ({ categories, name, preco, url, handleClick, uuid }: Product) => {
    return  (
        <Card onClick={() => handleClick(uuid)}>
            <ImageCardProduct url={url} />
            <CategoriesCardProduct>{categories}</CategoriesCardProduct>
            <TextNameProduct >{name}</TextNameProduct>
            <TextCardPriceProduct>R$ {preco}</TextCardPriceProduct>
        </Card>
    )
}