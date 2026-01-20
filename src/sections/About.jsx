import shailesh_photo from "../assets/download.jpeg";
import { Link } from "react-router-dom";
const About = ()=>{
  return (
    <>
    <div style={{marginTop:"8px", paddingBottom:"10px"}} className="homepage-div">
      <div style={{ paddingTop:"60px", paddingLeft:"8px"}} className="homepage-leftsection">
        <p style={{fontSize:"30px", fontWeight:"bold"}}>ABOUT ESPRESSO CAFE</p>
        <p style={{marginTop:"0", fontWeight:"bold"}}>where you find delicious coffees</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae suscipit asperiores eius, quisquam laborum qui dolor commodi a dolorem dicta aut libero tempore mollitia alias totam facere modi voluptatem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum maiores pariatur iusto quae officia mollitia illo, quo tempore sint at cum sequi, soluta aperiam doloribus aut, voluptatem delectus impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae suscipit asperiores eius, quisquam laborum qui dolor commodi a dolorem dicta aut libero tempore mollitia alias totam facere modi voluptatem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum maiores pariatur iusto quae officia mollitia illo, quo tempore sint at cum sequi, soluta aperiam doloribus aut, voluptatem delectus impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae suscipit asperiores eius, quisquam laborum qui dolor commodi a dolorem dicta aut libero tempore mollitia alias totam facere modi voluptatem. Lorem ipsum dolor sit amet consectetur, adi</p>
        <Link to="my-intro">Explore espresso more</Link>
      </div>
      <div  className="homepage-rightsection">
        <img style={{width:"95%", marginTop:"120px", marginLeft:"8px",borderRadius:"20px"}} src={shailesh_photo} alt="" />
      </div>
      </div>
      </>
      
  );
};

export default About;