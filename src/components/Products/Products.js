import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Products = (props) => {
    //console.log(props.product);
    const { stock, name, price, star, img, seller, features } = props.product

    return (
        <div className="mb-8 p-5 border-b-2 flex items-center gap-6">
            <div>
                <img src={img} alt="product-img" />
            </div>
            <div>
                <div>
                    <h3 className="text-xl font-semibold">
                        {name}
                    </h3>
                    <span>by: {seller} </span>
                </div>
                <div className="mt-6 flex items-center gap-7">
                    <div>
                        <h3 className="text-2xl"> {price} </h3>
                        <h3 className="mb-4"> only {stock} left in stock - order soon</h3>
                        <button
                        onClick={() => props.handleEvent(props.product)} 
                        className="bg-yellow-400 outline-none px-9 py-2 rounded flex items-center gap-2"> 
                        
                        <FaShoppingCart /> 
                        add to cart </button>
                    </div>
                    <div>
                        <h3>

                        </h3>
                        <h3 className="text-2xl font-semibold">Features: </h3>
                        <ul>
                            {
                                features.map(item => <li>{item.description} : {item.value} </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products