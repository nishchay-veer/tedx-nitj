import React from 'react'
import "./Conferences.scss"
import img1 from "../assets/img/person.jpg"
import { useRef } from 'react'
import  Flippy, {FrontSide,BackSide} from 'react-flippy'
import bg from "../assets/img/bg.png"

import {
     FaFacebook,
     FaInstagram,
     FaLinkedinIn } 
    from 'react-icons/fa'


function Conference() {
    const ref = useRef();
  return (
    <>
    <div className="title">Speakers</div>
    <div className="speaker-container">
        <div className="speakers">
            <div className="speaker">
        <Flippy 
                flipOnHover={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>

                </FrontSide>
                <BackSide>
                    <div className="back-container">
                        <div className="back-content">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </BackSide>
            </Flippy>
                        <div className="desc">
                            <div className="name">Steve jobs</div>
                            <div className="social-icons">
                                <span><FaFacebook/></span>
                                <span><FaInstagram/></span>
                                <span><FaLinkedinIn/></span>
                                
                            </div>
                        </div>
                    </div>
            <div className="speaker">
        <Flippy 
                flipOnHover={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>

                </FrontSide>
                <BackSide>
                    <div className="back-container">
                        <div className="back-content">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </BackSide>
            </Flippy>
                        <div className="desc">
                            <div className="name">Steve jobs</div>
                            <div className="social-icons">
                                <span><FaFacebook/></span>
                                <span><FaInstagram/></span>
                                <span><FaLinkedinIn/></span>
                                
                            </div>
                        </div>
                    </div>
            <div className="speaker">
        <Flippy 
                flipOnHover={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>

                </FrontSide>
                <BackSide>
                    <div className="back-container">
                        <div className="back-content">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </BackSide>
            </Flippy>
                        <div className="desc">
                            <div className="name">Steve jobs</div>
                            <div className="social-icons">
                                <span><FaFacebook/></span>
                                <span><FaInstagram/></span>
                                <span><FaLinkedinIn/></span>
                                
                            </div>
                        </div>
                    </div>
            <div className="speaker">
        <Flippy 
                flipOnHover={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>

                </FrontSide>
                <BackSide>
                    <div className="back-container">
                        <div className="back-content">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </BackSide>
            </Flippy>
                        <div className="desc">
                            <div className="name">Steve jobs</div>
                            <div className="social-icons">
                                <span><FaFacebook/></span>
                                <span><FaInstagram/></span>
                                <span><FaLinkedinIn/></span>
                                
                            </div>
                        </div>
                    </div>
            <div className="speaker">
        <Flippy 
                flipOnHover={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>

                </FrontSide>
                <BackSide>
                    <div className="back-container">
                        <div className="back-content">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </BackSide>
            </Flippy>
                        <div className="desc">
                            <div className="name">Steve jobs</div>
                            <div className="social-icons">
                                <span><FaFacebook/></span>
                                <span><FaInstagram/></span>
                                <span><FaLinkedinIn/></span>
                                
                            </div>
                        </div>
                    </div>
            <div className="speaker">
        <Flippy 
                flipOnHover={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>

                </FrontSide>
                <BackSide>
                    <div className="back-container">
                        <div className="back-content">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </BackSide>
            </Flippy>
                        <div className="desc">
                            <div className="name">Steve jobs</div>
                            <div className="social-icons">
                                <span><FaFacebook/></span>
                                <span><FaInstagram/></span>
                                <span><FaLinkedinIn/></span>
                                
                            </div>
                        </div>
                    </div>
            
            
        </div>
    </div>    
    </>
  )
}

export default Conference