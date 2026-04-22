import React, { use, useState } from 'react';
import DigitalHeader from './DigitalHeader';
import DigitalCard from './DigitalCard';

const Digital = ({ dataPromise }) => {
    const digitalData = use(dataPromise);
    console.log(digitalData)

    // For Button select and page change
    const [selectCart, setSelectCart] = useState("product");
    const handleSelectCart = (pros)=>{
        setSelectCart(pros)
    }

    // For Cart page
    const [cartArray , setCartArray] = useState([]);
    const handleCartArray = (cart)=>{
        const newArray = [...cartArray, cart];
        setCartArray(newArray);
    }

    // For Delete
    return (
        <div>
            <DigitalHeader digitalData={digitalData} selectCart={selectCart} setSelectCart={setSelectCart} handleSelectCart={handleSelectCart} cartArray={cartArray} setCartArray={setCartArray} handleCartArray={handleCartArray}></DigitalHeader>
        </div>
    );
};

export default Digital;
