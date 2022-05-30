import React from "react";
import './socialmedia.css';
import videolink from '../../assets/images/DMG_video.mp4';
import videoimage from '../../assets/images/thumbnail.png';
import dmgvideoicon from '../../assets/images/playbutton.png';
import insta1 from '../../assets/images/insta1.png';
import insta2 from '../../assets/images/insta2.png';
import insta3 from '../../assets/images/insta3.png';
import insta4 from '../../assets/images/insta4.png';
import insta5 from '../../assets/images/insta5.png';
import insta6 from '../../assets/images/insta6.png';
import insta7 from '../../assets/images/insta7.png';
import insta8 from '../../assets/images/insta8.png';
class SocialMedia extends React.Component {

        // Create state
        state = {
          isPlaying: false,
          opacity: 1,
          controls:'',
        };
  
        playPause = () => {
  
            let isPlaying = this.state.isPlaying;
            let opacity = this.state.opacity;
            let controls = this.state.controls;
  
            if (isPlaying) {
              this.refs.vidRef.pause();
            } else {
              this.refs.vidRef.play();
            }
            
            // Change the state of the video
            this.setState({ 
            isPlaying: !isPlaying,
            opacity: !!this.state.opacity? 0 : 1,
            controls: !!this.state.controls? '' : 'controls'
           });
        };
  
        
  
  
      render()
      {
  
  
      return(

        <section className="SocialMedia py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div>
                            <div><b>Future </b><i>collaborations</i></div><br/>
                            <div className="d-flex gap-4 align-items-center">
                                <h5>28/04</h5>   
                                <h5>Ira Voo</h5> 
                                <span className="flex-grow-1 border-bottom"></span>
                                <p><u>sign up</u></p>
                            </div>
                            <div className="d-flex gap-4 align-items-center">
                                <h5>03/05</h5>   
                                <h5>MBW x KOOVS </h5> 
                                <span className="flex-grow-1 border-bottom"></span>
                                <p><u>sign up</u></p>
                            </div>
                            <div className="d-flex gap-4 align-items-center">
                                <h5>09/05</h5>   
                                <h5>Caro Reinholdt </h5> 
                                <span className="flex-grow-1 border-bottom"></span>
                                <p><u>sign up</u></p>
                            </div>
                            <div className="d-flex gap-4 align-items-center">
                                <h5>22/05</h5>   
                                <h5>Christopher </h5> 
                                <span className="flex-grow-1 border-bottom"></span>
                                <p><u>sign up</u></p>
                            </div>
                        </div>
                        <div>Live Shopping</div><br/>
                        <div className="row">
                            <div className="col-12 col-lg-6 position-relative">
                                <video ref="vidRef" controls={this.state.controls} type="video/mp4"  poster={videoimage}/>
                                <button type="button" id="play_button" className="video-play-button" style={{opacity: this.state.opacity}} onClick={this.playPause}>
                                    <span><img alt="video play icon" src={dmgvideoicon}/></span>
                                </button>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h5>Live with Hannie</h5>   
                                <p>
                                Spend the afternoon with photographer, Hannie as he lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>  
                                <button className="btn btn-light btn-outline-dark px-5">WATCH AND SHOP</button>    
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h5>KOOVS on Instagram </h5> <br/>
                        <div className="row g-2">
                            <div className="col-12 col-lg-4">
                                <img src={insta1} className="img-fluid" alt="instagram photo"/>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src={insta2} className="img-fluid" alt="instagram photo"/>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src={insta3} className="img-fluid" alt="instagram photo"/>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src={insta4} className="img-fluid" alt="instagram photo"/>
                            </div>
                            <div className="col-12 col-lg-4 d-flex align-items-center">
                                <p className="p-3 fs-30">Tag @Koovs + #KOOVS on IG for a chance to be featured.

                                </p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src={insta5} className="img-fluid" alt="instagram photo"/>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src={insta6} className="img-fluid" alt="instagram photo"/>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src={insta7} className="img-fluid" alt="instagram photo"/>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src={insta8} className="img-fluid" alt="instagram photo"/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
      
    )
    }
}

export default SocialMedia;


