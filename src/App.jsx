
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/BannerPart/Banner'
import Batch from './Components/BannerPart/Batch'
import Digital from './Components/DigitalTools/Digital'
import NavBar from './Components/NavBar/NavBar'
import GetStart from './Components/BannerPart/GetStart'
import PricingOffer from './Components/BannerPart/PricingOffer'

const dataPromise = fetch('../public/data.json').then(res => res.json());

function App() {
  // For Button select and page change
    const [selectCart, setSelectCart] = useState("product");
    const handleSelectCart = (pros) => {
        setSelectCart(pros)
    }

    // For Cart page
    const [cartArray, setCartArray] = useState([]) ;
    const handleCartArray = (cart) => {
        const newArray = [...cartArray, cart];
        setCartArray(newArray);
    }

    // For Delete
    const deleteCart = (cartSelected) => {
        const alteredArray = cartArray.filter(cart => cart.id !== cartSelected.id);
        setCartArray(alteredArray);
    }
  return (
    <>
      <NavBar cartArray={cartArray} setCartArray={setCartArray}></NavBar>
      <Banner></Banner>
      <Batch></Batch>
      <Suspense fallback={<div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-xl"></span>
      </div>}>
        <Digital dataPromise={dataPromise} selectCart={selectCart} setSelectCart={setSelectCart} handleSelectCart={handleSelectCart} cartArray={cartArray} setCartArray={setCartArray} handleCartArray={handleCartArray} deleteCart={deleteCart}></Digital>
      </Suspense>
      <GetStart></GetStart>
      <PricingOffer></PricingOffer>

    </>
  )
}

export default App
