import { useSelector, useDispatch } from "react-redux";
import ProductListItem from "./ProductListItem";
import { useContext, useEffect } from "react";
import LanguageContext from "./LanguageContext";
import {fetchLikedProducts} from "./redux/api";

const ProductsList = (props) => {
	const dispatch = useDispatch();

	const { language } = useContext(LanguageContext);
	const products = useSelector((state) => state.products[language]);

	useEffect(() => {
		dispatch(fetchLikedProducts());
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
