import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css';
import  {Carousel}  from './Components/Carousel';
import  {Speakers}  from './Components/Speakers';
import Theme from './Components/Theme';
import Conference from './Components/Conference';

import 
'bootstrap/dist/css/bootstrap.min.css'


import "swiper/swiper.min.css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import "swiper/css/navigation"
import "./styles.css"

import SwiperCore,{EffectCoverflow,Pagination,Navigation} from "swiper"

import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"
import img5 from "./img/img5.jpg"
import img6 from "./img/img6.jpg"
import img7 from "./img/img7.jpg"
import img8 from "./img/img8.jpg"
import img9 from "./img/img9.jpg"
import img10 from "./img/img10.jpg"

SwiperCore.use([EffectCoverflow,Pagination,Navigation])

function App() {
  return (
    <BrowserRouter>        
            
                <Routes>
                    <Route path="/gallery" element={<><Carousel /><Speakers /></>} />
                    {/* <Route path="/" element={addyourhomepage} /> */}
                    <Route path="/conferences" element={<><Theme/><Conference/></>} />
                </Routes>
        </BrowserRouter>    
    )
}

export default App;
