import { FaCartPlus } from "react-icons/fa";

function Header(props) {
  const { calculateTotalAmount } = props;
  return (
    <header className="header">
      <h1>CART</h1>
      <div className="cart__icon__container">
        <FaCartPlus />
        <div className="counter__container">
          <h1>{calculateTotalAmount}</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
