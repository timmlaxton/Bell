import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/SideNav'
import LandingScreen from './screens/LandingScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
   
      <Router>
     
      <Footer/>
      <Header/>
      <Route path='/homescreen' component={HomeScreen} exact />
      <SideNav />
      <Route path='/' component={LandingScreen} exact />
      </Router>
  )
}

export default App;
