import React from "react";
import './footer.css';

class Footer extends React.Component {
    render()
    {
    return(

        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="row py-lg-5 py-4">
                        <div className="col-xl-3 col-lg-4 col-4">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>Account</p>  
                                </div>
                                <ul>
                                    <li><a href="#">Orders and Returns</a></li>
                                    <li><a href="#">My Information </a></li>
                                    <li><a href="#">Wishlist </a></li>
                                    <li><a href="#">Sign In</a></li>
                                    <li><a href="#">Register</a></li>                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-4">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>Online support</p>  
                                </div>
                                <ul>
                                    <li><a href="#">Contact </a></li>
                                    <li><a href="#">Size Guide </a></li>
                                    <li><a href="#">FAQs </a></li>
                                    <li><a href="#">Shipping and Return </a></li>
                                    <li><a href="#">Gift Card </a></li>     
                                    <li><a href="#">Privacy Policy  </a></li>
                                    <li><a href="#">Terms and Conditions </a></li>
                                    <li><a href="#">Cookie Settings </a></li>                                 
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-4">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>KOOVS</p>  
                                </div>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers </a></li>
                                    <li><a href="#">Sustainability </a></li>                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-4">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>Sign up for email updates and promotions</p>  
                                </div>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        
                    </div>
                    <hr className="mt-0"/>
                    <div className="row pb-4 pt-2">
                        <div className="col-xl-6 col-lg-6 col-md-12 order-lg-0">
                            <p className="mb-0">© Koovs.com 2022. All rights reserved.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </footer>
      
    )
    }
}

export default Footer;

