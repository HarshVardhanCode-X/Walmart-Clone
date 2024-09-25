import React, { useState } from "react";
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Login from './Components/Login/Login'
import SingleProduct from './Components/Product/SingleProduct';

import { auth, provider } from "./firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";


// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

    const [user, setUser] = useState(null);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error signing out", error);
        }
    };


    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<><Header /><Home /></>} />
                    <Route path='/contact-us' element={<><Header /><Contact /></>} />
                    <Route path='/Login' element={<><Login /></>} />
                    <Route path='/product-details' element={<><Header /><SingleProduct /></>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
