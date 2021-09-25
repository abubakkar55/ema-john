import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Main = () => {

    // for data load from fake db
    const [products, setProducts] = useState([]);

    // for clicked product
    const [cart, setCart] = useState([]);

    // to get data from local storage

    useEffect(() => {
        const lSData = getStoredCart();
        if (products.length) {
            const newArray = [];
            for (const keys in lSData) {
                const quantities = lSData[keys];
                const foundItems = products.find(pd => pd.key === keys);
                foundItems.qunatity = quantities;
                newArray.push(foundItems);
                setCart(newArray);
                console.log(foundItems);
            }
        }

    }, [products]);


    // for Fetching data
    useEffect(() => {
        fetch("./fakeData/products.JSON")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // Handle add To Cart btn
    const handleEvent = (product) => {
        const newArray = [...cart, product];
        setCart(newArray);
        addToDb(product.key);
        //console.log(newArray);
    }


    return (
        <div>
            <header className="App-header">
                <Header cart={cart} />
            </header>

            <div className="container flex gap-6">

                <div className="products  w-4/5 border-r-2 p-10">

                    {
                        products.map(pd => <Products key={pd.key} product={pd} handleEvent={handleEvent} />)
                    }

                </div>
                <div className="cart w-1/4 mt-10">
                    <Cart clickedProducts={cart} />
                </div>
            </div>

        </div>
    )
}

export default Main
