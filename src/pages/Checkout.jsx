import CartDetails from "../components/CartDetails";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("Card");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    navigate("/orderstatus", {
      state: {
        cart,
        payment,
        total
      }
    });

    setCart([]); // optional but realistic
  };

  return (
    <div style={{ width: 400, margin: "20px auto", background: "bisque", padding: 10 }}>
      <CartDetails cart={cart} setCart={setCart} />

      <h2>Payment Method</h2>
      <select
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
        style={{ width: "100%", height: 30 }}
      >
        <option value="Card">Card</option>
        <option value="Bank Transfer">Bank Transfer</option>
        <option value="Cash On Delivery">Cash On Delivery</option>
      </select>

      <button
        onClick={placeOrder}
        style={{ width: "100%", height: 40, marginTop: 10, border:"none" }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
