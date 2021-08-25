import React, { Component } from 'react';
import YouTube from 'react-youtube';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Donations extends Component {
  state = {
    value: 'whenknightssang@gmail.com',
    copied: false,
  };

  render() {
    const opts = {
      height: '390',
      width: '90%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <section id="donations">

      <div className="row">
        <div className="one columns collapsed"></div>
        <div className="ten columns collapsed" style={{textAlign: 'center'}}>
            <h1 style={{marginBottom: '15px'}}>Buy a CD and help someone in need!</h1>
            <YouTube videoId={'Xma3sf9TkRQ'} opts={opts} onReady={(event) => {event.target.pauseVideo();}} />
              <div><a target="_blank" href='https://www.safeaustin.org/appreciateeverything/'><button>Link To Donate</button></a></div>
              <CopyToClipboard text={this.state.value}
                onCopy={() => this.setState({copied: true})}>
                <button>Copy My Email Address</button>
              </CopyToClipboard>
          </div>
        <div className="one columns collapsed"></div>
      </div>
   </section>
    );
  }
}

export default Donations;
