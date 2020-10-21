import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Blog} from "./Blog"

export const App=()=> {
  return (
    <>
    <div className="header">
        <div className="blog__head"><h2>FOOD BLOG</h2></div>
        </div>

    <Blog
    imgsrc="https://www.kagomeindia.com/wp-content/uploads/Shahi-Paneer.jpg"
    name="Shahi Paneer"
    desc = "Shahi paneer is one of the most popular paneer recipe ever. This is one of most ordered dish on Indian restaurant menu. Any party or special occasion Two of the most popular paneer recipes are undoubtedly paneer butter masala, and shahi paneer."
    link="http://www.mathurapureveg.com/">
    </Blog>

    <Blog 
    imgsrc="https://www.thestatesman.com/wp-content/uploads/2019/07/pav-bhaji.jpg"
    name="Pav Bhaji"
    desc = "Pav bhaji, the ‘trade mark’ of Maharashtrian cuisine, is no less popular than the Mumbai Film Industry. Pav Bhaaji comprises of Bhaji, the mashed vegetable curry and Pav, the buttery bread bun. This is one of the most loved Vegan recipes from India and makes the iconic Indian snack item."
    link="http://www.mh12pavbhaji.com/">
    </Blog>
    </>
      );
}

export default App;
