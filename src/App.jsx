import { useState } from "react";
import "./App.css";
const url = "https://course-api.com/react-useReducer-cart-project";
function App() {
  const [count, setCount] = useState(0);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
}

export default App;
