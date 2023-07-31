import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Plant.css'

import Data from '../../Data'; 

import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { addItem } from '../../action/Action';


const Plant = () => {

  const[minVal, setMinVal] = useState(190)
  const[maxVal, setMaxVal] = useState(14000)
  const[searchTerm, setSearchTerm] = useState("");

  // const getdata = useSelector((state) => state.addToCart.cart)
  // console.log( getdata );


  const dispatch = useDispatch();

  const [newData, setNewData] = useState(Data);


  const Handlefilter = (e) => {
    e.preventDefault();
    console.log( 'run' );
    let currentData = Data.filter((ele) => {
      // console.log(searchTerm)
      // console.log(ele.name.includes(searchTerm))
      return ele.name.includes(searchTerm)
    })
    // console.log(currentData);
    setNewData(currentData)
    console.log( newData );
  }


  const handleSubmit = (e, ind, nm, prc, img) => {
    e.preventDefault();
    let obj = {
      id : ind,
      name : nm,
      quantity : Number(1),
      price : Number(prc),
      image : img
    }
    dispatch(addItem(obj));
  }

  return (
    <>
      <Navbar />

      <section className="container m1">

        <div className="left">
          <div className="search">
            <input type="text"  placeholder='Search products... ' onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={(e) => {Handlefilter(e)}}>{">"}</button>
          </div>
          <h4>Filter by price</h4>

          <div className="slider">
            <div className="progress" style={{left: `${(minVal/14000)*100}%`, right: `${100-((maxVal/14000)*100)}%`}}>
            </div>
            <div className="range-input">
              <input type="range" className="range-min" min='190' max='14000' value={minVal} 
              onChange={e =>{ 
                if( e.target.value <= maxVal ){
                  setMinVal(Number.parseInt(e.target.value))
                }
              }}/>
              <input type="range" className="range-max" min='190' max='14000' value={maxVal} 
              onChange={e =>{ 
                if( e.target.value >= minVal ){
                  setMaxVal(Number.parseInt(e.target.value))
                }
              }}/>
            </div>
            <div className="range-btn">
              <input type="number" value={minVal}
              onChange={e => setMinVal(e.target.value)}
              />
              <input type="number" value={maxVal}
              onChange={e => setMaxVal(e.target.value)}
              />
            </div>

          </div>

          <div className="tag">
              <p><span>Bulk Plants</span>{" (9)"}</p>
              <p><span>Best Selling Products</span>{"(10)"}</p>
              <p><span>Flowers</span>{" (7)"}</p>
              <p><span>Plants</span>{" (46)"}</p>
              <p><span>Subscription</span>{" (10)"}</p>
          </div>

          <div className="plant-item">
            <div className="item">
              <img src='https://floant.com/wp-content/uploads/2022/11/p7-300x300.webp' alt="" />
              <p>Peace Lily Plant</p>
              <h5><span>&#8377;399.00</span>&#8377;299.00</h5>
            </div>
            <div className="item">
              <img src='https://floant.com/wp-content/uploads/2022/11/p2-300x300.webp' alt="" />
              <p>Mini Judge Plant</p>
              <h5><span>&#8377;299.00</span>&#8377;199.00</h5>
            </div>
            <div className="item">
              <img src='https://floant.com/wp-content/uploads/2023/01/61WU9HaGEoL._SL1100_-300x300.jpg' alt="" />
              <p>Fresh White Chamanthi/Chrysanthemums Flowers 100g</p>
              <h5><span>&#8377;2100.00</span>&#8377;1800.00</h5>
            </div>
          </div>

        </div>

        <div className="right">

          <div className="head">
              <p>Home/Flowers</p>
              <h2>Flowers</h2>
          </div>

          <div className="filter">
            <p>Showing 1–9 of 17 results</p>
            <select name="Order" id="order">
              <option value="Default sorting">Default sorting</option>
              <option value="Sort by popularity">Sort by popularity</option>
              <option value="Sort by avarage rating">Sort by avarage rating</option>
              <option value="Sort by leatest">Sort by leatest</option>
              <option value="Sort by price: low to high">Sort by price: low to high</option>
              <option value="Sort by price: high to low">Sort by price: high to low</option>
            </select>
          </div>

          <div className="body">

              {
                newData.map((ele, ind) =>{
                  return(
                    <div className="flow-item" key={ind}>
                      <img src={ele.img} alt="flow-img" />
                      <p>{ele.tag}</p>
                      <h6>{ele.name}</h6>
                      <p><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p>
                      
                      <h5><span>&#8377;{ele.extra_price}.00</span>&#8377;{ele.price}.00</h5>
                      <button onClick={(e) =>{handleSubmit(e, ind, ele.name, ele.price, ele.img)}}> ADD </button>
                    </div>
                  )
                })
              }

          </div>

        </div>

      </section>

    </>
  )
}

export default Plant


