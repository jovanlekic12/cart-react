import { useState, useEffect } from "react";
import Header from "./header.jsx";
import Product from "./product.jsx";
import "./App.css";
const url = "https://fakestoreapi.com/products";
function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  function calculateTotalAmount() {
    let total;
    for (let i = 0; i < products.length; i++) {
      total += products[i].amount;
    }
    return total;
  }

  function handleDeleteProduct(id) {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  function increaseQuantity(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, amount: product.amount + 1 };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }

  function decreaseQuantity(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, amount: product.amount - 1 };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      totalPrice += products[i].price * products[i].amount;
    }
    return Math.trunc(totalPrice);
  }
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const productsWithAmounts = data;
      productsWithAmounts.forEach((product) => (product.amount = 1));
      setProducts(productsWithAmounts);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTotal(calculateTotalPrice);
  }, [products]);
  return (
    <>
      <Header calculateTotalAmount={calculateTotalAmount} />
      <main className="main__container">
        {error && <p>Error: {error.message}</p>}
        <h1>YOUR BAG</h1>
        <ul className="list">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                {...product}
                handleDeleteProduct={handleDeleteProduct}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            );
          })}
          <div className="total__container">
            <h3 className="total">Total:</h3>
            <h3 className="total__price">{total}$</h3>
          </div>
        </ul>
      </main>
    </>
  );
}

export default App;
