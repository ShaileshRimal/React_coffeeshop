import CartDetails from "../components/CartDetails";
import "./cartpage.css"

const Checkout = ({cart, setCart})=>{
    return (
        <>
        <div style={{display:"flex",flexDirection:"column", width:400, backgroundColor:"bisque", margin:"0 auto", padding: "5px", borderRadius:8 , marginTop:"20px", alignItems:"center"}}>
            <CartDetails  cart={cart} setCart={setCart} />
            <h2>Payment Method</h2>
           <select style={{width:"100%", height:30, marginBottom:10}} name="payment" id="payment">
            <option value="card">Card</option>
            <option value="banktransfer">Bank Transfer</option>
            <option value="cashondelivery">Cash on Delivery</option>
           </select>
           <button style={{display:"block", width: "100%", border:"none", height:40, cursor:"pointer"}}>Place Order</button>
        </div>
        </>
    );
}

export default Checkout;