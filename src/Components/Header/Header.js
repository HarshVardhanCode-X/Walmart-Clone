import React, { useState } from 'react'
import { TbBrandWalmart } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { PiGiftLight } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { IoChevronUp } from "react-icons/io5";
import { Link } from "react-router-dom";
import './Header.css'
import { useAuth } from '../../AuthContext';
import { signOut } from 'firebase/auth';
import { auth, provider } from '../../firebaseConfig';

function Header() {
  const [showcart, setshowcart] = useState(false);
  const [showitem, setshowitem] = useState(false);
  const [showaccount, setshowaccount] = useState(false);

  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <React.Fragment>
      <header className='mainheader'>
        <nav className='top-header'>

          <TbBrandWalmart color='#ffc220' size={36} />

          <div className='select-bar' onClick={() => setshowcart(!showcart)}>
            <img src='./images/handcash.webp' alt='cash-hand'></img>
            <div>
              <h5>How do you want your items?</h5>
              <p>Sacramento, 95829 - Sacram..</p>
            </div>
            {showcart ? <IoChevronUp /> : <FaChevronDown />}
          </div>

          <div className='search-bar'>
            <input type='search' name='search' placeholder='Search everything at Walmart online and in store'></input>
            <IoSearchCircleSharp size={40} color='#004F9A' />
          </div>

          <div className='item-bar' onClick={() => setshowitem(!showitem)}>
            <GoHeart color='white' size={17} />
            <div>
              <p>Reorder</p>
              <h5>My Items</h5>
            </div>
          </div>

          {currentUser ?( <div className='sign-bar'>
            <img src={currentUser?.photoURL} lazy="loading"/>
            <div>
              <p>{currentUser?.displayName}</p>
              <h5 onClick={async()=>{
                await signOut(auth,provider);
                alert("Successfully logout");
              }}>Logout</h5>
            </div>
          </div>):(

          <div className='sign-bar' onClick={() => setshowaccount(!showaccount)}>
            <LuUser2 color='white' size={17} />
            <div>
              <p>Sign In</p>
              <h5>Account</h5>
            </div>
          </div>)}

          <Link to='/Cart'>
            <div className='cart-bar'>
              <BsCart color='white' size={20} />
              <div>
                <p>$0.00</p>
              </div>
            </div>
          </Link>

        </nav>

        <nav className='bottom-header'>
          <div className='first-name'>
            <div className='first1'>
              <RxDashboard />
              <h5>Departments</h5>
              <BsChevronDown />
            </div>

            <div className='first2'>
              <RxDashboard />
              <h5>Services</h5>
              <BsChevronDown />
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



      {showcart && <div className='outer-address' onClick={() => setshowcart(false)}>
        <div className='address-cart'>
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
              <div><IoLocationOutline /></div>
              <div>
                <h5>Add an address for shipping and delivery</h5>
                <p>Sacramento, CA 95829</p>
              </div>
            </div>
            <div className='add-it'>Add address</div>
          </div>

          <div className='about-home'>
            <div><IoHomeOutline /></div>
            <div>
              <h5>Sacramento Supercenter</h5>
              <p>8915 GERBER ROAD, sacramento, CA 95829</p>
            </div>
            <div><MdArrowForwardIos /></div>
          </div>
        </div>
      </div>}

      {showitem && <div className='out-item' onClick={() => setshowitem(false)}>
        <div className='address-item'>
          <div>
            <ul>
              <li><a href='#'><PiDownloadSimpleLight /> Reorder</a></li>
              <li><a href='#'><GoHeart /> Lists</a></li>
              <li><a href='#'><PiGiftLight /> Registries</a></li>
            </ul>
          </div>
        </div>
      </div>}

      {showaccount && <div className='oute-account' onClick={() => setshowaccount(false)}>
        <div className='address-account'>
          <div className='create-acc'><Link to='/Login'><h5>Sign in or create account</h5></Link></div>
          <hr />
          <div className='history'>
            <div><CgNotes /></div>
            <div>Purchase History</div>
          </div>
          <div className='site'>
            <div><TbBrandWalmart /></div>
            <div>Walmart+</div>
          </div>
        </div>
      </div>}



    </React.Fragment>
  )
}

export default Header
