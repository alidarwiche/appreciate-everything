import React, { Component } from 'react';

class Lyrics extends Component {

  state = {
    lyrics: [
      "Right now I'm seeing grey.",
      "Things are white or they feed decay",
      "Pure hearts and perfect deeds",
      "Either that or misery.",
      "",
      "In this picture I lose myself.",
      "Shade in the colors I fail to meld",
      "Imagination takes a hold of me",
      "Empty pages are my disease",
      "Broken minds always see things wrong.",
      "They search for sight in the words of songs.",
      "So I ask 'Are your sunglasses on?'",
      "Are your sunglasses on?",
      "Are your sunglasses on?",
      "",
      "I miss my colored eyes",
      "My one stroke painted skies",
      "I miss my colored nights",
      "That red I use to fight.",
      "I miss my colored eyes!",
      "I miss my colored eyes!",
      "",
      "Panic attacks every night before I go to bed.",
      "Trying to sing out all the drama in head.",
      "Been an hour now when's it going to finally end",
      "Is that the dawn or my shades trying to raise my dread?",
      "",
      "Pens don't cut,",
      "but fill the seams",
      "That build my skin",
      "with evil's ink.",
      "",
      "But pens don't cut",
      "So they won't see",
      "That evil ink",
      "Inside of me"
    ]
  };

  handleChange = (event) => {
    this.setState({ lyrics: this.props.data[event.target.value].lyrics });
  };

  render() {
    if(this.props.data){
      var lyrics = this.props.data.map(function(obj, index){
        return <option value={index}>{obj.title}</option>
      });

    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Lyrics</span></h1>
         </div>

         <div className="nine columns main-col">
           <select name="song" id="songs" onChange={this.handleChange}>
            {lyrics}
           </select>
          <div>{this.state.lyrics.map(function(value, index){
              if ( value == "") {
                return <br />
              } else {
                return <p>{value}</p>;
              }
            })}
          </div>
        </div>
      </div>
   </section>
    );
  }

}

export default Lyrics;
