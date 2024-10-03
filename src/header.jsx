import { FaCartPlus } from "react-icons/fa";

function Header(props) {
  const { totalAmount } = props;
  return (
    <header className="header">
      <h1>CART</h1>
      <div className="cart__icon__container">
        <FaCartPlus />
        <div className="counter__container">
          <h1>{totalAmount}</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
