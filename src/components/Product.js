import { useState, useEffect } from "react";
import ProductItems from "./ProductItems";

const Product = () => {
  const [products, getProducts] = useState([]);

  const product = 'https://fakestoreapi.com/products';


  useEffect(() => {
    fetch(product)
      .then((response) => response.json())
      .then((data) => getProducts(data));
  }, []);

 

  return (
    <>
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <ProductItems 
           key={product.id}
           id={product.id}
           image={product.image}
           title={product.title}
           price={product.price}
           
          />
        ))}
      </div>
    </>
  );
};

export default Product;

