import React from 'react'
import tseepLogo from '../img/tseep-square-logo.png';

function Navbar() {
  return (
    <div>
        <img
          src={tseepLogo}
          alt="TSEEP Logo"
          className="logo"
        />  
    </div>
)
}

export default Navbar