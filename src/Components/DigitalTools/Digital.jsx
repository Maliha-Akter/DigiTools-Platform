import React, { use} from 'react';
import DigitalHeader from './DigitalHeader';
import DigitalCard from './DigitalCard';

const Digital = ({ dataPromise, selectCart,setSelectCart ,handleSelectCart,cartArray,setCartArray,handleCartArray,deleteCart}) => {
    const digitalData = use(dataPromise);
    console.log(digitalData)

    
    return (
        <div>
            <DigitalHeader digitalData={digitalData} selectCart={selectCart} setSelectCart={setSelectCart} handleSelectCart={handleSelectCart} cartArray={cartArray} setCartArray={setCartArray} handleCartArray={handleCartArray} deleteCart={deleteCart}></DigitalHeader>
        </div>
    );
};

export default Digital;
