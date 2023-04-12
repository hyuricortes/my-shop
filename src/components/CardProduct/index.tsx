import { ImageCardProduct } from "../ImageCardProduct"
import { Card, CategoriesCardProduct, TextCardPriceProduct, TextNameProduct } from "./styles"




export const CardProduct = () => {
    return  (
        <Card>
            <ImageCardProduct />
            <CategoriesCardProduct>Corrida</CategoriesCardProduct>
            <TextNameProduct >Travis Scott x Air Max 270 React ENG 'Cactus Trails'</TextNameProduct>
            <TextCardPriceProduct>R$ 854,08</TextCardPriceProduct>
        </Card>
    )
}