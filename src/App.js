import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import TopPic from './Components/TopPic';
import Content1 from './Components/Content1';
import VDOContent from './Components/VDOContent';
import ServiceContent from './Components/Service/ServiceContent';
import ImageCarousel from './Components/ImageCarousal';
import Circle from './Components/Circle';
import FormContact from './Components/FormContact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <TopPic />
        <Content1 />
        <VDOContent />
        <ServiceContent />
        <ImageCarousel />
        <Circle />
        <FormContact />
        <Footer />
      </div>
    );
  }
}

export default App;
