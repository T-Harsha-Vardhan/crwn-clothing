import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <div className="cart-dropdown-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <Link className="checkout-btn" to="/checkout">
            <Button buttonType="button">GO TO CHECKOUT</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
