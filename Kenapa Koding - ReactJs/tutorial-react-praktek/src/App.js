import "./App.css";
import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";

function App() {
  const [products, setProduct] = useState(Products);

  const onCreateProduct = (product) => {
    // console.log("Ini dari Parent :", product);
    setProduct([
      ...products,
      { id: Math.round(Math.random() * 7777), ...product },
    ]);
  };

  const onDeleteProduct = (id) => {
    const updateProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProduct(updateProduct);
  };

  return (
    <>
      <h1 className="app-title">Belanja Mobil</h1>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList products={products} onDeleteProduct={onDeleteProduct} />
    </>
  );
}

export default App;
