import React, { useState } from "react";
import './login.css'
import { PiToggleRight } from "react-icons/pi";

import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";


function Login() {

    const [user, setUser] = useState(null);
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            window.location.assign("/");
            console.log("result",result);
            
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };

  return (
    <>
        <body className='login-body'>

            <section className='login-section'>

                <div className='login-main-div1'>
                    <div className='login-inside-div1'>
                        <a href='#'>
                            <img src='./images/login-image.png' alt='cash-hand'></img>
                        </a>
                    </div>
                    <div className='login-inside-div2'>
                        <h2>Sign in or create your account</h2>
                    </div>
                    <div className='login-inside-div3'>
                        <p>Not sure if you have an account?</p>
                    </div>
                    <div className='login-inside-div4'>
                        <p>Enter your email and we'll check for you.</p>
                    </div>
                </div>

                <div className='login-main-div2'>
                    <div className='login-inside-div11'>
                        <p>Email Address</p>
                    </div>
                    <div className='login-inside-div22'>
                        <input type="email" placeholder=''></input>
                    </div>
                    <div className='login-inside-div33'>
                        <button onClick={signInWithGoogle}>Continue</button>
                    </div>
                    <div className='login-inside-div44'>
                        <p>Securing your personal information is our priority.</p>
                        <p className='login-inside-div44-inside'>See our privacy measures.</p>
                    </div>
                </div>

            </section>
        </body>


        <div className='login-line'>
            <hr/>
        </div>


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

export default Login
