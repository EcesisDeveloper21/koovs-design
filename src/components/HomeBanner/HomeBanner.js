import React from "react";
import { Carousel } from 'react-bootstrap';
import './homebanner.css';
import bannerimg from '../../assets/images/koovs_homebanner.png';
import storiesimg from '../../assets/images/Screenshot.png';


class HomeBanner extends React.Component {
    render()
    {
    return(

        <section className="home_banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <Carousel controls={false} fade>
                        <Carousel.Item>
              
                        <div className="banner-Image"><img src={bannerimg} className="w-100 img-fluid" alt="DMG banner Image"/></div>
                      
                       
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="banner-Image"><img src={storiesimg} alt="DMG banner Image" className="w-100 img-fluid"/></div>
                        
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="banner-Image"><img src={bannerimg} alt="DMG banner Image" className="w-100 img-fluid"/></div>
                       
                        </Carousel.Item>
                        </Carousel>
                        
                    </div>
                    <div className="col-12 col-lg-6 align-self-center">
                        <div className="category-carousel">
                            <div className="row g-3 text-center p-5">
                                <h5>Where do you want to start?</h5>
                                <div className="col-6">
                                    <div className="bg-white p-2 border border-dark">Men</div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-white p-2 border border-dark">Women</div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-white p-2 border border-dark">Pre loved</div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-white p-2 border border-dark">Collaborations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    )
    }
}

export default HomeBanner;


