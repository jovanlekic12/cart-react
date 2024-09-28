import { useState, useEffect } from "react";
import Phone from "./phone.jsx";
import "./App.css";
const url = "https://fakestoreapi.com/products";
function App() {
  const [phones, setPhones] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1);

  function handleDeletePhone(id) {
    setPhones((prev) => prev.filter((phone) => phone.id !== id));
  }

  function increaseAmount() {
    if (amount > 0) return setAmount(amount + 1);
  }

  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < phones.length; i++) {
      totalPrice += phones[i].price;
    }
    return Math.trunc(totalPrice);
  }
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      //const phones with amount
      //
      setPhones(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("pozivam se");
    setTotal(calculateTotalPrice);
  }, [phones]);
  return (
    <main className="main__container">
      {error && <p>Error: {error.message}</p>}
      <h1>YOUR BAG</h1>
      <ul className="list">
        {phones.map((phone) => {
          return (
            <Phone
              key={phone.id}
              {...phone}
              handleDeletePhone={handleDeletePhone}
              amount={amount}
              increaseAmount={increaseAmount}
            />
          );
        })}
        <div className="total__container">
          <h3 className="total">Total:</h3>
          <h3 className="total__price">{total}$</h3>
        </div>
      </ul>
    </main>
  );
}

export default App;
