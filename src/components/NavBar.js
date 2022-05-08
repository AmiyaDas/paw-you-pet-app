import React from 'react';
import { MdHome, MdChat, MdLocalHospital, MdShoppingCart, MdAddCircle } from "react-icons/md";

export default function NavBar() {
  return (
    <nav class="navbar fixed-bottom navbar-light bg-light px-3 bottomNavBar">
      <MdHome className="mdIcon" />
      <MdChat className="mdIcon" />
      <MdAddCircle className="lgIcon" />
      <MdLocalHospital className="mdIcon" />
      <MdShoppingCart className="mdIcon" />
    </nav>
  )
}
