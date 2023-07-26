import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Plant.css'

import Data from '../../Data'; 

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addItem } from '../../action/Action';


const Plant = () => {


  const[qnt, setQnt] = useState(0)

  const getdata = useSelector((state) => state.addToCart.cart)
  console.log( getdata );

  const dispatch = useDispatch();


  const handleSubmit = (e, ind, nm, prc, img) => {
    e.preventDefault();
    let obj = {
      id : ind,
      name : nm,
      quantity : Number(qnt),
      price : Number(prc),
      image : img
    }
    dispatch(addItem(obj));
  }


  return (
    <>
      <Navbar />


      {Data.map((ele,ind) => {
        return(
          <section className='item m1' id={ind}>

          <div className="image">
          <div className='sale'>Sale!</div>
            <img src={ele.img} alt="product" />
          </div>
          <div className="des">
            <div className="main">
              <h2>{ele.name}</h2>
              <div className="price">
                <p>&#8377;{ele.price + 100}.00 </p>
                <p>&#8377;{ele.price}.00 </p>
                <p>+ Free Shipping</p>
              </div>
              <p>{ele.des}</p>
              <div className="atc">
                <input type="number" onChange={(e) => {setQnt(e.target.value)}} />
                <button onClick={(e)=>{handleSubmit(e, ind, ele.name, ele.price, ele.img)}}>ADD TO CART</button>
              </div>
              <p>Categories: <span>Best Selling Products</span>, <span>Plants</span></p>
            </div>
          </div>
          </section>
        )
      })}

    </>
  )
}

export default Plant


