  import { Link } from "react-router-dom";
  import "./Homepage.css";
  import coffeeimg from "../assets/download.jpeg";
  import Filterbar from "../layout/Filterbar";
  import { useState } from "react";


  const Homepage = ({categories, coffees, cart, setCart}) => {
    const [filter, setfilter] = useState('all');
    const filteredcoffees = filter === "all" ? coffees : coffees.filter(c=>(c.category_id===filter))
    const mycoffee= filteredcoffees;

    const addToCart = (coffee)=>{
      setCart((prevCart)=>{
        const exist = prevCart.find(item=>item.id===coffee.id);
        if (exist){
          return prevCart.map(item=>
              item.id===coffee.id
                ?{...item, qty: item.qty+1} 
                : item
          );
        }
        else{
          return [...prevCart, {...coffee, qty: 1}]
        }
        
      });
    }



    return (
      <>

        
        <div style={{ position: "relative", display:"flex", flexDirection:"column", }}>
          <Filterbar categories={categories} setfilter={setfilter} cart={cart}/>
          <div className="item-cards-flex" >
            {mycoffee.map(coffee=>(
                <div className="coffee-card" key={coffee.id}>
                  <div className="coffee-img-flex">
                    <img className="coffee-img" src={coffee.image} alt="alt" />
                  </div>

                  <div className="coffee-info-div">
                    <p style={{ marginBottom:" 5px",marginTop: "5px"}}>
                    {coffee.title}{" "}
                    </p>
                    <p style={{margin:"0"}}>{coffee.price}</p>
                  </div>
                  <button onClick={()=>{addToCart(coffee); }} style={{width:"100%", backgroundColor:"white", border:"none", borderRadius:5, height:30, marginTop:10}}>Add to Cart</button>
                </div>
            ))}
          </div>
        <div style={{textAlign:"center",position:"sticky", bottom:5}}>
          <Link to="cartpage" style={{textDecoration:"none", color:"black", backgroundColor:"antiquewhite", padding:"8px 12px", fontSize:30, borderRadius:12}}> Cart : {cart.length}</Link>
        </div>
          
        </div>
      </>
    );
  };

  export default Homepage;


