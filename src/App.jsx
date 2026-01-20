import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MyIntro from "./pages/MyIntro";
import SignIn from "./pages/SignIn"; 
import Menu from "./pages/Menu";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import ErrorHandle from "./pages/ErrorHandle";
import CartModel from "./pages/CartPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";



function App() {

  const [categories,setCategories] = useState([]);
  const [coffees,setCoffee] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const fetchcategories =async()=>{
    try{
      const res = await fetch("https://corsproxy.io/?https://thenextcoders.com/coffee/cats.php")
      const data = await res.json();
      setCategories(data);
    }
    catch(err){
      console.log("error", err);
    }}
    fetchcategories();
    
  }
  ,[])

  useEffect(()=>{
    const getcoffees =async()=>{
      try{
        const res= await fetch("https://corsproxy.io/?https://thenextcoders.com/coffee/list.php");
        const data = await res.json();
        setCoffee(data);
      }
      catch(err){
        console.log("error",err);
      }
    }
    getcoffees();
  },[])



  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage categories={categories} coffees={coffees} cart={cart} setCart={setCart}/>} />
        <Route path="cartpage" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path='/my-intro' element={<MyIntro />} />
        <Route path='sign-up'  element={<SignIn/>} />
        <Route path='sign-up'>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<ErrorHandle />} />
        <Route path="/checkoutpage"  element={<Checkout cart={cart} setCart={setCart}/>} />
        <Route path='/menu' element={<Menu />}  />
      </Routes>
    </>
    
  );
}

export default App;
