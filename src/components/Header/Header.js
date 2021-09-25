import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
const  logo =  "images/logo.png";
const Header = (props) => {
    return (
        <div>
<div className="header-container flex items-center justify-between px-20 h-20 bg-white shadow-md">
    <div> <img src={logo} className="w-48" alt="" /> </div>
    <div className="w-2/6"> 
    <input className="bg-white-50 shadow-md w-full h-12 ring-2  ring-yellow-300 p-4 rounded outline-none" type="text" placeholder="Search your desire product"
     onChange={props.searchProduct} 
    
    /> </div>
    <div>
        <nav>
            <ul className="flex items-center">
                <li><a className="mr-10 font-semibold text-xl" href="/home"> Home</a></li>
                <li><a className="mr-10 font-semibold text-xl" href="/about">About </a></li>
                <li><a className="mr-10 font-semibold text-xl" href="/products">Products </a></li>
                <li><a className="mr-10 font-semibold text-xl" href="/contact">Contact us </a></li>
                <li><a className="text-xl flex items-center" href="/"> <FaShoppingCart /> <span className="ml-2 text-yellow-400"> {props.cart} </span>   </a></li>
            </ul>
        </nav>
    </div>
</div>
        </div>
    )
}

export default Header
