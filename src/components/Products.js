import React, {useContext} from 'react';

// Components
import Product from './Product';

//context
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {

	// step 4 
	// consuming data with product context
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
