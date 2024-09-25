import React, { useState } from "react";
import './Cart.css'
import data from '../Data/data';
import { PiToggleRight } from "react-icons/pi";


function Cart() {
    
  return (
    <>
      
        <main className="cart-main">
            <section className="cart-wrapper">

                <div className="cart-main-div">

                    <div className="cart-inside-div-A">
                        <div className="cart-inside-div-A-a">
                            <div className="cart-inside-div-A-a1">
                                <h2>Cart (? items)</h2>
                            </div>
                            <div className="cart-inside-div-A-a2">
                                <img src="./images/cartp1.svg"></img>
                                <h2>Pick up and delivery options</h2>
                            </div>
                        </div>

                        <div className="cart-inside-div-A-b">
                            <div className="cart-inside-div-A-b1">
                                <img src="./images/cartp2.svg"></img>
                                <h2>Shipping, arrives by Tue, Oct 1</h2>
                            </div>
                            <div className="cart-inside-div-A-b2">
                                <h1>Content Here!</h1>
                            </div>
                        </div>
                    </div>

                    <div className="cart-inside-div-B">
                        <div className="cart-inside-div-B-a">
                            <div className="cart-inside-div-B-a1">
                                <button>Continue to checkout</button>
                            </div>
                            <div className="cart-inside-div-B-a2">
                                <p>For the best shopping experience, sign in</p>
                            </div>
                            <div className="cart-inside-div-B-a3">
                                <h2>Subtotal Here!</h2>
                            </div>
                        </div>
                        <div className="cart-inside-div-B-b">
                            <div className="cart-inside-div-B-b1">
                                <div><img src="./images/singleproduct1.svg"></img></div>
                                <div><p>Get free shipping & skip the $6.99 shipping!</p></div>
                            </div>
                            <div className="cart-inside-div-B-b2">
                                <div><input type="checkbox"></input></div>
                                <div><p>Try Walmart+ free for 30 days</p></div>
                            </div>
                        </div>
                        <div className="cart-inside-div-B-c">
                            <div><input type="checkbox"></input></div>
                            <div><p>This order is a gift.</p></div>
                            <div><img src="./images/gifat.svg"></img></div>
                        </div>
                    </div>

                </div>

            </section>
        </main>

        <footer className='login-footer'>
            <div className='login-footer1'>
                <ul>
                    <li><a href='#'>Give feedback</a></li>
                    <li><a href='#'>CA Privacy Rights</a></li>
                    <li><a href='#'><PiToggleRight color='blue'/> Your Privacy Choices</a></li>
                    <li><a href='#'>Notice at Collection</a></li>
                    <li><a href='#'>Request My Personal Information</a></li>
                    <li><a href='#'>Delete Account</a></li>
                    <li><a href='#'>California Supply Chains Act</a></li>
                </ul>
            </div>

            <div className='login-footer2'>
                <p>© 2024 Walmart. All Rights Reserved.</p>
            </div>
        </footer>

    </>
  )
}

export default Cart
