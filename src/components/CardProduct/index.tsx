import { ImageCardProduct } from "../ImageCardProduct"
import { Card, CategoriesCardProduct, TextCardPriceProduct, TextNameProduct } from "./styles"

type Product = {
    categories: string;
    name: string;
    preco: string;
    url: string;
}


export const CardProduct = ({ categories, name, preco, url }: Product) => {
    return  (
        <Card>
            <ImageCardProduct url={url} />
            <CategoriesCardProduct>{categories}</CategoriesCardProduct>
            <TextNameProduct >{name}</TextNameProduct>
            <TextCardPriceProduct>R$ {preco}</TextCardPriceProduct>
        </Card>
    )
}