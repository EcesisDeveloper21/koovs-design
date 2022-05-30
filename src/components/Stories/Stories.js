import React from "react";
import './stories.css';
import storiesimg from '../../assets/images/Screenshot.png';

class Stories extends React.Component {
    render()
    {
    return(

        <section className="stories pb-5">
            <div className="container">
                <div className="row g-1">
                    <h5>Style stories</h5>
                    <p>Get inspired by our latest campaigns</p>
                    <div className="col-6 col-lg-4">
                        <div className="img-content">
                            <img src={storiesimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Back to the 00’s</p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4">
                        <div className="img-content">
                            <img src={storiesimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Back to the 00’s</p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4">
                        <div className="img-content">
                            <img src={storiesimg} className="img-fluid" alt="Koovs image"/>
                            <p className="fw-bold">Back to the 00’s</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    )
    }
}

export default Stories;


