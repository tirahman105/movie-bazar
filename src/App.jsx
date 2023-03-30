import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SideCart from './Components/SideCart/SideCart';

function App() {
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    
    if(previousWatchTime){
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
    }else{
      localStorage.setItem("watchTime", time);
    }
  }

  return (
    <div>
    <div className="m-auto">
      <Header></Header>
        
    </div>

    <div className="main row">
      <div className="home-container col-md-8">
        <Home handleWatchTime= {handleWatchTime}></Home> 
      </div>
      <div className="side-cart col-md-4 card">
        <SideCart></SideCart>
      </div>
    </div>


    </div>
  )
}

export default App
