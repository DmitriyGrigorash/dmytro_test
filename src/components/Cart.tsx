import { useContext } from "react";
import { Context } from "../provider/ProductProvider";

export const Cart = () => {
    const { cart, removeFromCart } = useContext(Context);
    return (
        <div>
            <ul>
                {cart?.map((item) => {
                    return (
                        <li>
                            <h6>{item.title}</h6>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
