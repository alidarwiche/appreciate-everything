import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Videos extends Component {

  render() {

    if(this.props.data){
      // var skillmessage = this.props.data.skillmessage;
      // var education = this.props.data.education.map(function(education){
      //   return <div key={education.school}><h3>{education.school}</h3>
      //   <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      //   <p>{education.description}</p></div>
      // })
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      var videos = this.props.data.videos.map(function(video){
        return <div key={video.title}>
            <YouTube videoId={video.id} opts={opts} onReady={(event) => {event.target.pauseVideo();}} />
        </div>
      });

    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Videos</span></h1>
         </div>

         <div className="nine columns main-col">
          {videos}
        </div>
      </div>
   </section>
    );
  }

}

export default Videos;
