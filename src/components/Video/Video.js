import React, { useState } from 'react';
import './video.css';
import videolink from '../../assets/images/DMG_video.mp4';
import videoimage from '../../assets/images/video_image.png';
import dmgvideoicon from '../../assets/images/dmg_triangle_video_icon.png';
class Video extends React.Component {

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
     

    <section className="dmg_video mb-0 mb-lg-5">
        <div className="container-fluid px-0">
            <div className="ratio ratio-21x9">
                  <div id="video_container">

                  <video ref="vidRef" controls={this.state.controls} src={videolink} type="video/mp4"  poster={videoimage}/>
                    
                    <button type="button" id="play_button" className="video-play-button" style={{opacity: this.state.opacity}} onClick={this.playPause}>
                        <span><img alt="DMG video play icon" src={dmgvideoicon}/></span>
                   
                    </button>

                    <div className='watch-video' style={{opacity: this.state.opacity}}>Watch Video</div>
                   
                    
                 </div>
              </div>
        </div>
        
    </section>

    )
    }
}

export default Video;


