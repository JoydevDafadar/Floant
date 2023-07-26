import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const[number, setNumber] = useState(0);
    const[total, setTotal] = useState(0) 

    const getdata = useSelector((state) => state.addToCart.cart)


    useEffect(()=>{

        let total = 0;
        getdata.map((ele) => {
          total += ele.quantity;
        });
        setNumber(total);

        if(getdata.length != 0){
            let total = 0;
            getdata.forEach((element) => {
                total += (element.price * element.quantity)
            });
            setTotal(total);
        }
        else{setTotal(0)}
    
        
    
      },[getdata])

  return (
    <>
    <div className="nav p1">
        <div className="left">
            <img src="./main_logo.png" alt="main_logo" />
            <ul>
                <li>Everything</li>
                <li>Plants</li>
                <li>Flowers</li>
            </ul>
        </div>
        <div className="right">
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li> <Link to='/cart' >&#8377; {total}.00 <i class="fa-solid fa-bag-shopping"></i> <span>{number}</span></Link> </li>
                <li><i class="fa-solid fa-user"></i></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar