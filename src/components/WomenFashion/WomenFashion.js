import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './womenfashion.css';
import headbandimg from '../../assets/images/headband.png';
import dressimg from '../../assets/images/dress.png';
import sandalimg from '../../assets/images/sandal.png';
import shoeimg from '../../assets/images/shoe.png';

class WomenFashion extends React.Component {
    render()
    {
    
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
              partialVisibilityGutter: 30,
              slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 60,
              slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 140,
              slidesToSlide: 1 // optional, default to 1.
            }
          };

    return(


        
        <section className="women-fashion py-5">
        <div className="bg-light-blue"></div>
        <div className="container-fluid">
            <div className="row">
                <h5>Women</h5>
                <div className="row" id="carousel-slide">
                <Carousel partialVisible={true} interval={3000} arrows={false} responsive={responsive} renderButtonGroupOutside={true}  swipeable={true} draggable={false} autoPlay={true}
  autoPlaySpeed={2000}>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={dressimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                     </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={headbandimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={sandalimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={dressimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                     </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={headbandimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={sandalimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={dressimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                     </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={headbandimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={sandalimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={dressimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                     </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={headbandimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={sandalimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Attico</p>
                            <p>Wrap around dress</p>
                            <p>100 €</p>
                        </div>
                    </div>
                   
                    </Carousel>

                </div>

            </div>
        </div><br/>
    </section>





    
    )
    }
}

export default WomenFashion;