import React, { Component } from 'react';

class Lyrics extends Component {

  render() {

    if(this.props.data){
      console.log("printing");
      console.log(this.props.data);
      // var skillmessage = this.props.data.skillmessage;
      // var education = this.props.data.education.map(function(education){
      //   return <div key={education.school}><h3>{education.school}</h3>
      //   <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      //   <p>{education.description}</p></div>
      // })

      var lyrics = this.props.data.map(function(obj, index){
        return <option value={index}>{obj.title}</option>
        // return <div key={video.title} style={{marginBottom: '15px'}}>
        //     <YouTube videoId={video.id} opts={opts} onReady={(event) => {event.target.pauseVideo();}} />
        // </div>
      });

    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Lyrics</span></h1>
         </div>

         <div className="nine columns main-col">
           <select name="song" id="songs">
             <option value="1">Through Sunglasses</option>
             <option value="2">Count The Sheep</option>
             <option value="3">Unstable</option>
             <option value="4">Apathetic</option>
             <option value="5">Apathetic</option>
             <option value="6">Apathetic</option>
             <option value="7">Apathetic</option>
             <option value="8">Apathetic</option>
             <option value="9">Apathetic</option>
             <option value="10">Apathetic</option>
             <option value="11">Apathetic</option>
             <option value="12">Apathetic</option>
           </select>
        </div>
      </div>
   </section>
    );
  }

}

export default Lyrics;
