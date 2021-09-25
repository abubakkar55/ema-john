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

    // search result 
    const [displayPro, setDisplayPro] = useState([]);

    // for Fetching data
    useEffect(() => {
        fetch("./fakeData/products.JSON")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayPro(data);
            });
    }, [])

    // to get data from local storage
    useEffect(() => {
        if (products.length) {
            const newArray = [];
            const lSData = getStoredCart();
            for (const keys in lSData) {
                const foundItems = products.find(pd => pd.key === keys);
                if (lSData) {
                    const quantities = lSData[keys];
                    foundItems.quantity = quantities;
                    newArray.push(foundItems);
                }
                console.log(foundItems);
            }
            setCart(newArray);
        }

    }, [products]);

    // show product by search
    const searchProduct = (e) => {
        const searchText = e.target.value;
        const filteredItems = products.filter(pd => pd.name.toLowerCase().includes(searchText));
        setDisplayPro(filteredItems);
    }


    // Handle add To Cart btn
    const handleEvent = (product) => {
        const newArray = [...cart, product];
        setCart(newArray);
        addToDb(product.key);
        //console.log(newArray);
    }

    //

    let quantity = 0;
    cart.map(pd => {
        if (!pd.quantity) {
            pd.quantity = 1;
        }
        quantity += pd.quantity
    })

    return (
        <div>
            <header className="App-header">
                <Header cart={quantity} searchProduct={searchProduct} />
            </header>

            <div className="container flex gap-6">

                <div className="products  w-4/5 border-r-2 p-10">

                    {
                        displayPro.map(pd => <Products key={pd.key} product={pd} handleEvent={handleEvent} />)
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
