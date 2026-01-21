import { useLocation, Link } from "react-router-dom";

const Orderstatus = () => {
  const { state } = useLocation();

  // protect direct access
  if (!state) {
    return <h2 style={{ textAlign: "center" }}>No order found</h2>;
  }

  const { cart, payment, total } = state;

  return (
    <div style={{
      backgroundColor: "white",
      width: 500,
      margin: "50px auto",
      padding: "8px 20px",
      boxShadow: "1px 2px 10px gray",
      borderRadius: 20
    }}>
      <h2 style={{ textAlign: "center" }}>Order Successful ✅</h2>
      <p style={{ textAlign: "center" }}>
        Thank you for your purchase. Your coffee is being prepared.
      </p>
      <hr />

      <div>
        <p><strong>Payment Method:</strong> {payment}</p>
        <p><strong>Order Date:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      <h3>Order Summary</h3>
      {cart.map(item => (
        <div
          key={item.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>{item.title}</span>
          <span>x{item.qty}</span>
        </div>
      ))}

      <hr />

      <h3 style={{ textAlign: "center" }}>Total Paid</h3>
      <p style={{ textAlign: "center" }}>${total.toFixed(2)}</p>

      <Link to="/">
        <button style={{
          width: "100%",
          height: 45,
          backgroundColor: "#3c7d80",
          color: "white",
          borderRadius: 8,
          border: "none"
        }}>
          Back to Shop
        </button>
      </Link>
    </div>
  );
};

export default Orderstatus;
