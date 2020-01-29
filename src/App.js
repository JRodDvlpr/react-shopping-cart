import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context 
import {ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {

	// keeps track of all avail products
	const [products] = useState(data);

	// keep track of all items in cart
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart

		//step 1
		// setCart as my state
		setCart([...cart, item]);
	};

	//remove item function 
	const removeItem = itemId => {
		setCart(cart.filter(cartItem => cartItem.id !== itemId));
	}

	// clear cart of items 

	const [clear] = useState([]);

	const clearCart = () => {
		setCart(clear);
	}

	return (
		<div className="App">

			{/* product context wraps all my child components inside and passes a prop value*/}
			<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, removeItem, setCart}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Products} />
			<Route path="/cart" component={ShoppingCart}/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
