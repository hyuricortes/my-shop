import { ImageProduct } from "./styles"

type Image = {
    url: string;
}

export const ImageCardProduct =  ({ url }: Image) => {
    return (
        <ImageProduct defaultValue={url} />
    )
}