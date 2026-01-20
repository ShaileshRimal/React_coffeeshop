import Navbar from "../layout/Navbar";
import Homepage from "../sections/Homepage";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Service from "../sections/Service";
import CartModel from "./CartPage";

const LandingPage = ({categories,coffees, cart, setCart})=>{
    return (
    <div className="container">
        <Navbar />
        
            <div id="home" style={{paddingTop:65,  border:"1px solid gainsboro",borderRadius:"20px"}}>
                <Homepage categories={categories} coffees={coffees} cart={cart} setCart={setCart}/>

            </div>

            <div id="about" style={{height:"100vh" , paddingTop:"65px", border:"1px solid gainsboro",borderRadius:"20px"}}>
                <About />
            </div>

            <div id="contact" style={{height:"100vh" , paddingTop:"65px", border:"1px solid gainsboro",borderRadius:"20px"}}>
                <Contact />
            </div>

            <div id="service" style={{height:"100vh" , paddingTop:"65px", border:"1px solid gainsboro",borderRadius:"20px"}}>
                <Service />
            </div>
       </div>
  
    );
}

export default LandingPage;