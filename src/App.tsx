
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import { ProductProvider } from "./provider/ProductProvider";
import { Cart } from "./components/Cart";
import './App.css'

function App() {
  return (
    <main className="App">
        <BrowserRouter>
            <div>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <ProductProvider>
                <Routes>
                    <Route path="/products" element={ <ProductsList /> }/>
                    <Route path="/products/:productId"  element={ <Product /> }/>
                    <Route path="/cart" element={ <Cart /> }/>
                </Routes>
            </ProductProvider>
        </BrowserRouter>
    </main>
  );
}

export default App;
