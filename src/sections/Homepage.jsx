  import { Link } from "react-router-dom";
  import "./Homepage.css";
  import coffeeimg from "../assets/download.jpeg";
  import Filterbar from "../layout/Filterbar";
  import { useState } from "react";


  const Homepage = ({categories, coffees}) => {
    const [filter, setfilter] = useState('all');
    const filteredcoffees = filter === "all" ? coffees : coffees.filter(c=>(c.category_id===filter))
    const mycoffee= filteredcoffees;

    return (
      <>
        <div style={{border:"1px soild gray"}}>
          <Filterbar categories={categories} setfilter={setfilter}/>
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
                  <button style={{width:"100%", backgroundColor:"white", border:"none", borderRadius:5, height:30, marginTop:10}}>Add to Cart</button>
                </div>
            ))}
          </div>
          <div style={{margin: 5}}><Link style={{textDecoration:"none"}} to="./menu">Menu</Link> </div>

        </div>
      </>
    );
  };

  export default Homepage;


