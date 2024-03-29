import { useSelector, useDispatch } from "react-redux";
import ProductListItem from "./ProductListItem";
import { useEffect } from "react";
import { fetchLikedProducts, fetchBasket } from "./logic/api";
import languageStore from "./zustand/languageStore";
const ProductsList = (props) => {
	const dispatch = useDispatch();

	const language = languageStore((state) => state.language);
	const products = useSelector((state) => state.products[language]);

	useEffect(() => {
		dispatch(fetchLikedProducts());
		dispatch(fetchBasket());
	}, [dispatch]);

	return (
		<div className="box mr-5 ml-5">
			<h2 className="title">Products</h2>
			<ul>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default ProductsList;
