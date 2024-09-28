import { useState, useEffect } from "react";
import Phone from "./phone.jsx";
import "./App.css";
const url = "https://fakestoreapi.com/products";
function App() {
  const [phones, setPhones] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPhones(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="main__container">
      {error && <p>Error: {error.message}</p>}
      <h1>YOUR BAG</h1>
      <ul className="list">
        {phones.map((phone) => {
          return <Phone key={phone.id} {...phone} />;
        })}
      </ul>
    </main>
  );
}

export default App;
