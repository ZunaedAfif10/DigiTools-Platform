import { Suspense, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Info } from './components/Info/Info'
import { Navbar } from './components/Navbar/Navbar'
import { Toggle } from './components/Toggle/Toggle'
import { ToastContainer } from 'react-toastify'
import { Getstarted } from './components/Getstarted/Getstarted'
import { Offer } from './components/Offer/Offer'
import { Moreinfo } from './components/Moreinfo/Moreinfo'
import { Footer } from './components/Footer/Footer'

const fetchProduct = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const [selectedType, setSelectedType] = useState('products');
  const promiseProduct = fetchProduct();
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Info></Info>
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>}>
        <Toggle promiseProduct={promiseProduct} selectedType={selectedType} setSelectedType={setSelectedType}></Toggle>
      </Suspense>
      <ToastContainer />
      {selectedType === 'products' ? <>
        <Getstarted></Getstarted>
        <Offer></Offer>
        <Moreinfo></Moreinfo>
        <Footer></Footer>
      </> : ''}
    </>
  )
}

export default App
