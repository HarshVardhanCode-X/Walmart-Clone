
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';

function App() {
    return(
        <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Header/><Home/></>} />
                <Route path='/contact-us' element={<><Header/><Contact/></>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
