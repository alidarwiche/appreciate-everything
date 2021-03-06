import React, { Component } from 'react';
// import AlbumArt from 'images/header-tree.png';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	       <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#donations">CDs</a></li>
            <li><a className="smoothscroll" href="#lyrics">Lyrics</a></li>
            <li><a className="smoothscroll" href="#portfolio">Videos</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
      <img src={"images/header-tree.png"} alt='album art' style={{marginTop: '7.5rem'}} />
      <h2 className="responsive-headline" style={{margin: '0 0 0'}}>August 25, 2021</h2>
      <div className="banner" style={{padding: '0 0 0'}}>
        <div className="banner-text">
            {/* <h3 className="outline-text" style={{color: '#fff', backgroundColor: 'rgb(218, 222, 229, 0.1)', borderRadius: '6px'}}>I'm an <span style={{color:'#ffe200'}}>Austin, TX</span> based <span style={{color:'#ffe200'}}>Full Stack Software Engineer</span> who's passionate about building Web and Mobile applications that improve my user's life.</h3> */}
            {/* <hr /> */}
            <ul className="social social-media" style={{margin: '12px 0'}}>
               {networks}
            </ul>
         </div>
      </div>

      {/* <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p> */}

   </header>
    );
  }
}

export default Header;
