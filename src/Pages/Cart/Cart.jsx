import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Cart.css'

import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../action/Action'

const Cart = () => {

  const cartData = useSelector((state) => state.addToCart.cart)

  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();


  useEffect(() => {

    if( cartData.length !== 0 ){
      let total = 0;
      cartData.forEach((element) => {
        total += (element.price * element.quantity)
      });
      setTotal(total);
    }
    else{setTotal(0)}

  }, [cartData])

  return (
    <>
      <Navbar />
      

      <div className="items m1">
        <h2>Cart</h2>
        <div className="head">
          <h4>Delete</h4>
          <h4>Image</h4>
          <h4>Name</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <hr />
        <hr />
        {cartData.map((ele, ind) => {
          return(
            <>
            <div className="item" id={ind}>
              <p onClick={() => {dispatch(removeItem(ele.id))}}><i className="fa-solid fa-trash"></i></p>
              <img src="./product.webp" alt="img7788" />
              <p>{ele.name}</p>
              <p>{ele.quantity}</p>
              <p>{ele.price}.00</p>
            </div>
            <hr />
            </>
          )
        })}
        <div className="total">
          <p> <strong>Total : </strong>  {total} </p>
          <button>Cheak Out </button>
        </div>
      </div>

    </>
  )
}

export default Cart