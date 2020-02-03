import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel_Bootstrap from './components/Carousel_Bootstrap';
import Navbar_Bootstrap from './components/Navbar_Bootstrap';
import {Tab, Tabs, Carousel} from 'react-bootstrap';
import Portfolio from './components/Portfolio'
import Content from './components/Content';

class App extends React.Component {
  render() {
    return(
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <Navbar_Bootstrap/>
          <Header/>
          <Carousel_Bootstrap/>
          <Content/>
        </Tab>
        <Tab eventKey="profile" title="Portfolio">
          <Portfolio />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Carousel_Bootstrap/>
        </Tab>
      </Tabs>
    )
  }
}

export default App;
