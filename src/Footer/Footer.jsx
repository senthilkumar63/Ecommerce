import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-section-padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h4>Shop By</h4>
                        <a href="/men">
                            <p>Men</p>
                        </a>
                        <a href="/women">
                            <p>Women</p>
                        </a>
                        <a href="/kids">
                            <p>Kids</p>
                        </a>
                        <a href="new arrivals">
                            <p>New Arrivals</p>
                        </a>
                        <a href="home">
                            <p>Home</p>
                        </a>
                        <a href="collections">
                            <p>Collections</p>
                        </a>
                    </div>
                    <div className="footer-links-div">
                    <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonals</p>
                        </a>
                        <a href="/resource">
                            <p>Blog</p>
                        </a>
                        <a href="resource">
                            <p>Docs</p>
                        </a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Help</h4>
                        <a href="payment">
                            <p>Payment</p>
                        </a>
                        <a href="shipping">
                            <p>Shipping</p>
                        </a>
                        <a href="cancellation & return">
                            <p>Cancellation & Return</p>
                        </a>
                        <a href="faq">
                            <p>FAQ</p>
                        </a>
                        <a href="Customer care">
                            <p>Customer Care</p>
                        </a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>    
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact Us</p>
                        </a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Reach out to us</h4>
                        <div className="social-media">
                            <p>
                            <a href="https://in.linkedin.com/" className="img">
                                <FontAwesomeIcon icon={faLinkedin} size="2x"  />&nbsp; &nbsp;
                            </a>
                            <a href="https://www.facebook.com/" className="img">  
                                <FontAwesomeIcon icon={faFacebook} size="2x" />&nbsp; &nbsp; 
                            </a>
                            <a href="https://twitter.com/" className="img">  
                                <FontAwesomeIcon icon={faTwitter} size="2x" />&nbsp; &nbsp;
                            </a>
                            <a href="https://www.instagram.com/" className="img">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            </p>
                            
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="footer-below">
                    <div className="footer-copyrights">
                        <p>
                            @{new Date().getFullYear()} Ecommerce. All right reserved.
                        </p>
                    </div>
                    <div className="footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;