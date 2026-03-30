import { Suspense } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Info } from './components/Info/Info'
import { Navbar } from './components/Navbar/Navbar'
import { Toggle } from './components/Toggle/Toggle'
import { Product } from './components/Product/Product'

const fetchProduct = async()=>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const promiseProduct = fetchProduct();
  console.log(promiseProduct);
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Info></Info>
      <Toggle></Toggle>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Product promiseProduct={promiseProduct}></Product>
      </Suspense>
    </>
  )
}

export default App
