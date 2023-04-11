import { createContext, FC, useEffect, useState } from "react";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category:string;
    description:string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
export interface ContextProvider {
    totalPages: number;
    products: IProduct[];
    cart?: IProduct[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    setPage: (id: number) => void;
}
export const Context = createContext<ContextProvider>({
    totalPages: 0,
    products: [],
    cart: [],
    addToCart: (id) => {},
    removeFromCart: (id) => {},
    setPage: (id: number) => {},
});

export const ProductProvider: FC = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=> res.json())
            .then(data => setProducts(data));
    }, []);

    const removeFromCart = (id: number) => {
        const result = cart.filter((item) => item.id !== id);
        setCart(() => [...result]);
    }

    const addToCart = (id: number) => {
        const currentProduct = products.find((item) => {
            return item.id === id;
        })
        if (currentProduct) {
            setCart((prevState) => [...prevState, currentProduct])
        }
    }

    const setPage = (id: number) => {

    }

    return <Context.Provider value={{
        products,
        totalPages: 0,
        cart,
        addToCart,
        removeFromCart,
        setPage,
    }}>
        {children}
    </Context.Provider>
}
