import {Link} from "react-router-dom";
const Navbar = ()=>{
  return (
    <>
    <nav className="navbar-section">
     <div className="left-navbar-section">Caption</div>
     <div className="right-navbar-section">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#service">Service</a>
      <Link  to="/sign-up"><button className="signup-button">SignUp</button></Link>
      

      </div>
    </nav>
    </>

  );
};

export default Navbar;