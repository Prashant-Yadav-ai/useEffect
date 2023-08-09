import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './style.css'

export const UseEfc = () => {

   const [stock, setStock]=useState(10);
   const [Cancle, setCancle]=useState(' ');

  const buy=()=>{
    setStock(stock-1);
    
    if(stock<1){
      alert("you have clicked more times");
      setStock(0);
    }
  }

  const cancle=()=>{
    setStock(stock+1);
    if(stock>9){
      alert("you have clicked more times");
      setStock(10);
    }
    if(stock==0){
       
    }
  }

  return (
    <>
      <div className='head'>
        <div className='center'>
        <br/>
        <h1> New Shoes 🩰 stocks</h1>
        <br/>
        <p> {stock} Shoes are available</p>
        <br/>
        <button onClick={buy} className='btn1'>Buy</button>
        <button onClick={cancle} className='btn2'>Cancle</button>
        <br/>
        <br></br>
        <h6>About Shoes</h6>
        <p className='para'>This is stylish and latest design fashionable shoes. This is made by Bata group of companies.</p>
        <div className='img'>
        </div>
        </div>
      </div>
    </>
  )
}
