import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <div className="cart-dropdown-container">
          <Button buttonType="button">GO TO CHECKOUT</Button>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
