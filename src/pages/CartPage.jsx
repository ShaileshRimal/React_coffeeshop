import CartDetails from "../components/CartDetails";
import "./cartpage.css"
import {Link} from "react-router-dom";

const CartPage = ({cart, setCart}) =>{

    return (
        <>
       
        <div style={{width:400, backgroundColor:"bisque", margin:"0 auto", padding: "5px", borderRadius:8 , marginTop:"20px"}}>
            <CartDetails cart={cart} setCart={setCart} />
            <Link style={{textDecoration:"none "}} to="/checkoutpage"> <button style={{display:"block", width: "100%", marginBottom:5 ,height:40 , cursor:"pointer" , border:"none"}}>checkout</button></Link>
            <Link style={{textDecoration:"none"}} to="/"><button  style={{display:"block", width: "100%", border:"none", height:40, cursor:"pointer"}}> Close</button></Link>
        </div>
        </>
    );
}
export default CartPage;