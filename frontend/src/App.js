import React from 'react';
import Footer from './components/Footer';
import SideNav from './components/SideNav'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <> 
   
     <main> 
      <h1 className='toplogo' >ANDYBELL</h1>
      <h1 className='bottomlogo'>IMAGES</h1>
      
     <HomeScreen/>
      </main>
      <SideNav />
      <Footer/>
      </>
  )
}

export default App;
