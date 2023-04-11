import { useContext } from "react";
import { Context } from "../provider/ProductProvider";
import { Link } from "react-router-dom";

const ProductsList = () => {
    const { products, addToCart } = useContext(Context);

    const handleAddToCart = (productId: number) => {
        addToCart(productId)
    }

    return (
        <article>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={`key_${product.id}`}>
                            <Link to={`/products/${product.id}`}>{product.title}</Link>
                            <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
                        </li>
                    )
                })}
            </ul>
        </article>
    );
}

export default ProductsList;
