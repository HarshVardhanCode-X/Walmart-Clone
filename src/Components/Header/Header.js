import React, { useState } from 'react'
import { TbBrandWalmart } from "react-icons/tb";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearchCircleSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";


import './Header.css'

function Header() {
  const [showcart,setshowcart]=useState(false);
  const [showitem,setshowitem]=useState(false);
  const [showaccount,setshowaccount]=useState(false);

  return (
    <React.Fragment>
        <header className='mainheader'>
          <nav className='top-header'>
            
            <TbBrandWalmart color='#ffc220' size={36}/>
      
              <div className='select-bar' onClick={()=>setshowcart(!showcart)}>
                <img src='./images/handcash.webp' alt='cash-hand'></img>
                <div>
                  <h5>How do you want your items?</h5>
                  <p>Sacramento, 95829</p>
                </div>
                <TiArrowSortedDown/>
              </div>

              <div className='search-bar'>
                <input type='search' name='search' placeholder='Search everything at Walmart online and in store'></input>
                <IoSearchCircleSharp size={40} color='#004F9A'/>
              </div>

              <div className='item-bar' onClick={()=>setshowitem(!showitem)}>
                <GoHeart color='white' size={17}/>
                <div>
                  <p>Reorder</p>
                  <h5>My Items</h5>
                </div>
              </div>

              <div className='sign-bar' onClick={()=>setshowaccount(!showaccount)}>
                <LuUser2 color='white' size={17}/>
                <div>
                  <p>Sign In</p>
                  <h5>Account</h5>
                </div>
              </div>

              <div className='cart-bar'>
                <BsCart color='white' size={20}/>
                <div>
                  <p>$0.00</p>
                </div>
              </div>

          </nav>

          <nav className='bottom-header'>
            <div className='first-name'>
              <div className='first1'>
              <RxDashboard/>
              <h5>Departments</h5>
              <BsChevronDown/>
              </div>

              <div className='first2'>
              <RxDashboard/>
              <h5>Services</h5>
              <BsChevronDown/>
              </div>
              <div>|</div>
            </div>

            <div className='second-name'>
              <ul>
                <li><a href='#'>Savings</a></li>
                <li><a href='#'>Grocery & Essentials</a></li>
                <li><a href='#'>New & Trending</a></li>
                <li><a href='#'>Halloween</a></li>
                <li><a href='#'>Beauty Glow Up</a></li>
                <li><a href='#'>Electronics</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Fashion</a></li>
                <li><a href='#'>Toy Shop</a></li>
                <li><a href='#'>Registry</a></li>
                <li><a href='#'>ONE Cash</a></li>
                <li><a href='#'>Walmart+</a></li>
              </ul>
            </div>
          </nav>
        </header>



        {showcart && <div className='address-cart'>
          <div className='about-shipping'>
            <div>
            <img src='./images/truck.png' alt='Truck'></img>
            <h5>Shipping</h5>
            </div>
            <div>
            <img src='./images/car.png' alt='Truck'></img>
            <h5>Pickup</h5>
            </div>
            <div>
            <img src='./images/bag.png' alt='Truck'></img>
            <h5>Delivery</h5>
            </div>
          </div>

          <div className='about-address'>
            <div className='vehicles'>
              <div><IoLocationOutline/></div>
              <div>
                <h5>Add an address for shipping and delivery</h5>
                <p>Sacramento, CA 95829</p>
              </div>
            </div>
            <div className='add-it'>Add address</div>
          </div>

          <div className='about-home'>
            <div><IoHomeOutline/></div>
            <div>
            <h5>Sacramento Supercenter</h5>
            <p>8915 GERBER ROAD, sacramento, CA 95829</p>
            </div>
            <div><MdArrowForwardIos/></div>
          </div>
        </div>}

        {showitem && <div className='address-item'>
          <h1>Hello item!</h1>
        </div>}

        {showaccount && <div className='address-account'>
          <h1>Hello account!</h1>
        </div>}

    </React.Fragment>
  )
}

export default Header
