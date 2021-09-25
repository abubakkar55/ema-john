import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
const  logo =  "images/logo.png";
const Header = () => {
    return (
        <div>
<div className="container">
    <div> <img src={logo} alt="" /> </div>
    <div> 
    <input type="text" placeholder="Search your desire product"
    // onChange={props.searchText}

     /> </div>
    <div>
        <nav>
            <ul>
                <li><a href="/home"> Home</a></li>
                <li><a href="/about">About </a></li>
                <li><a href="/products">Products </a></li>
                <li><a href="/contact">Contact us </a></li>
                <li><a href="/"> <FaShoppingCart /> </a></li>
            </ul>
        </nav>
    </div>
</div>
        </div>
    )
}

export default Header
