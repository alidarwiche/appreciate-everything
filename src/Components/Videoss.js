import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Videoss extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <section id="videos">
      <h2 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Music Videos</h2>
      <div className="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <YouTube videoId="SDyGAPnQgo4" opts={opts} onReady={this._onReady} />
      </div>
      </section>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Videoss;
