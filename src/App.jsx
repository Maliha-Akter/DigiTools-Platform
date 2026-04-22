
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/BannerPart/Banner'
import Batch from './Components/BannerPart/Batch'
import Digital from './Components/DigitalTools/Digital'
import NavBar from './Components/NavBar/NavBar'

const dataPromise = fetch('../public/data.json').then(res => res.json());

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Batch></Batch>
      <Suspense fallback={<div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-xl"></span>
      </div>}>
        <Digital dataPromise={dataPromise}></Digital>
      </Suspense>

    </>
  )
}

export default App
