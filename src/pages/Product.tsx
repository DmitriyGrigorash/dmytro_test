import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context, IProduct } from "../provider/ProductProvider";

const Product = () => {
    const { products } = useContext(Context);
    const { productId } = useParams();

    const [product, setProduct] = useState<IProduct | undefined>(undefined);

    useEffect(() => {
        const currentProduct = products.find((item) => {
            return productId && item.id === +productId;
        })
        setProduct(currentProduct);
    }, [])

    console.log('### product:', product);

    return (
        <div>

        </div>
    );
}

export default Product;
