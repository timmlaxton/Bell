import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';

import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CarouselScreen from './screens/CarouselScreen';
import ContactScreen from './screens/ContactScreen';
import ImageScreen from './screens/ImageScreen';
import ImageEditScreen from './screens/ImageEditScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
	return (
		<div>
			<Router>
				<Route path="/" component={LandingScreen} exact />
				<Route path="/photographs" component={CarouselScreen} />
				<Route path="/product/:id" component={ProductScreen} />
				<Route path="/productlist" component={ImageScreen} />
				<Route path="/product/:id/edit" component={ImageEditScreen} />
				<Route path="/product/create" component={ImageEditScreen} />
				<Route path="/login" component={LoginScreen} />
				{/* <Route path='/home' component={HomeScreen} exact  /> */}
				<Route path="/contact" component={ContactScreen} exact />

				{/* <Footer/> */}
			</Router>
		</div>
	);
};

export default App;
