import React from 'react'
import "./Theme.scss"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"

function Theme() {
  return (
    <div className="container">
        <div className="left">
            <div className="theme">Theme: Reverbera<span>TED</span></div>
            <div className="text">Lorem, ipsum dolor.</div>
            <div className="date">Date: 15 April 2023</div>
        </div>
        <div className="right">
            <Carousel className='carousel' autoPlay={true} infiniteLoop={true} stopOnHover={true} showThumbs={false} centerMode={true} showIndicators={false} transitionTime={1000}>
                <div className='carousel-content'>
                    <img src={img1} alt=''/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt=''/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt=''/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            
            
        </div>
    </div>
  )
}

export default Theme