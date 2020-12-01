import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/SideNav'
import LandingScreen from './screens/LandingScreen'
import HomeScreen from './screens/HomeScreen'
import PrintScreen from './screens/PrintScreen'
import ProductScreen from './screens/ProductScreen'
import CarouselScreen from './screens/CarouselScreen'
import ContactScreen from './screens/ContactScreen'

const App = () => {
  return (
   
      <Router>
     
      {/* <Footer/> */}
      <Header/>
      <Route path='/' component={LandingScreen} exact  />
      <Route path='/prints' component={PrintScreen}  />
      <Route path='/photographs' component={CarouselScreen}  />
      <Route path='/product/:id' component={ProductScreen}  />
      <SideNav />
      
      <Route path='/home' component={HomeScreen} exact  />
      <Route path='/contact' component={ContactScreen} exact  />
      </Router>
  )
}

export default App;
