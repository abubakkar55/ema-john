import React from 'react'

const Cart = (props) => {
    const {clickedProducts} = props;

let itemsPrice = 0;
let shippingPrice = 0;
let totalBT = 0;
let tax = 0;
let grandTotal = 0;

const common = (data) => data ? data.toFixed(2) : 0; 



//let price = itemsPrice ? itemsPrice.toFixed() : 0;

clickedProducts.map(pd => {
    itemsPrice += pd.price;
    shippingPrice += pd.shipping;
    totalBT = itemsPrice + shippingPrice;
    tax = totalBT * .1;
    grandTotal = totalBT + tax;
})

    return (
        <div className="p-4 bg-white-50 shadow-md fixed right-5 rounded h-60 top-30 w-1/4">
<h3 className="text-2xl font-bold">Order Summary </h3>            
<h3> items ordered: {clickedProducts.length} </h3>            
<h3> items ordered price: ${common(itemsPrice)} </h3>            
<h3> Delivery Charge: ${common(shippingPrice)} </h3>            
<h3> total before tax: ${common(totalBT)} </h3>            
<h3> tax: ${common(tax)} </h3>            
<h3 className="text-2xl font-bold"> Total ${common(grandTotal)} </h3>            
        </div>
    )
}

export default Cart
