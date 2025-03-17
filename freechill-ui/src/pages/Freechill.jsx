import React, { useState } from 'react'
import Navbar from '../components/Navbar';

export default function Freechill() {

    const [isScrolled , setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageXOffset===0?false:true);
      return () => (window.onscroll = null);
    }
     
    <div>
      <Navbar isScrolled={isScrolled}/>
    </div>
}
