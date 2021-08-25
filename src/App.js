import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Videos from './Components/Videos';
import Lyrics from './Components/Lyrics';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Donations from './Components/Donations';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      lyricData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  getLyricData(){
    $.ajax({
      url:'/lyricData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({lyricData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    this.getLyricData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Lyrics data={this.state.lyricData.album}/>
        <Videos data={this.state.resumeData.videos}/>
        {/* <Resume data={this.state.resumeData.resume}/> */}
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        <Donations/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
