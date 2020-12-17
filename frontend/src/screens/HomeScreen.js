import React from 'react'
import {Image} from 'react-bootstrap'
import SideNav from '../components/SideNav'



const HomeScreen = () => {

   return (
    <>
    <SideNav />
      <div className="homeimage">
        <Image src='../images/w67.jpg'/>
      </div>
    </>
  )
}


export default HomeScreen
