import React from 'react'
import { useLocation } from 'react-router-dom';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";

import './SingleProduct.css'


function SingleProduct() {

    const {state}=useLocation();
    
  return (
    <>
      <main className='product-container'>
        
        <section className='product-wrapper'>

          <div className='product-image'>
            <div className='product-image-div'>
              <img src={state?.bigimage}/>
            </div>
          </div>

          <div className='product-rate'>

            <div>
              <div>
                <div>In 50+ people's carts</div>
              </div>

              <div>
                <span>Popular pick</span>
                <span>for this set</span>
              </div>

              <div>
                <p>{state?.category}</p>
              </div>

              <div>
                <h1>{state?.description1}</h1>
                <h1>{state?.description2}</h1>
              </div>

              <div>
                <MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/>
                <p>{state?.rating}</p>
              </div>

              <div>
                <p><GiReturnArrow/> Free 90-day returns</p>
              </div>

              <div>
                <h1>${state?.price}</h1>
              </div>

              <div>
                <p>Price when purchased online <FaInfoCircle/></p>
              </div>

              <div>
                <h4>Add to cart</h4>
              </div>

            </div>


            <div>
              <div>
                <p>How do you want your item?</p>
              </div>

              <div>
                <input type="checkbox"></input>
                <p> I want shipping & delivery savings with <img src="./images/singleproduct1.svg"></img></p>
                <p>You get 30 days free! Choose a plan at checkout.</p>
              </div>

              <div>
                <div>
                  <img src="./images/singleproduct2.png"></img>
                  <p>shipping</p>
                  <p>Arrives sep 22</p>
                  <p>Order within 9 hr 20 min</p>
                </div>

                <div>
                  <img src="./images/singleproduct3.png"></img>
                  <p>Pickup</p>
                  <p>Check nearby</p>
                </div>

                <div>
                  <img src="./images/singleproduct4.png"></img>
                  <p>Delivery</p>
                  <p>Not available</p>
                </div>
              </div>

              <div>
                <p>Delivert to Sacramento, 95829</p>
              </div>

              <div>
                <p><GiReturnArrow/>Free 90-day returns</p>
                <p>Details</p>
                <p>Sold and shipped by Walmart.com</p>
              </div>

            </div>


          </div>

        </section>
      </main>
    </>
  )
}

export default SingleProduct
