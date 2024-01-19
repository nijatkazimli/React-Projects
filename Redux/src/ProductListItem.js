import { useSelector, useDispatch } from "react-redux";
import { toggleLiked, addToBasket } from "./redux/actions";

const ProductListItem = ({ product }) => {
	const likedProducts = useSelector((state) => state.likedProducts);
	const addedProducts = useSelector((state) => state.productsInBasket);
	const dispatch = useDispatch();
	const isLiked = likedProducts.includes(product.id);
	const quantityInBasket = addedProducts[product.id] || 0;	

	const handleAddToBasket = (productId) => {
		dispatch(addToBasket(productId));
	};

	return (
		<li>
			<span style={{ marginRight: 5 }}>{product.title}</span>
			<span
				onClick={() => dispatch(toggleLiked(product.id))}
				style={{ cursor: "pointer", marginRight: 5 }}
			>
				<i
					className={`fa-heart ${isLiked ? "fas" : "far"}`}
					style={{ color: isLiked ? "green" : "grey" }}
				></i>
			</span>

			<span
				style={{ color: "blue", cursor: "pointer" }}
				onClick={() => handleAddToBasket(product.id)}
			>
				<i className={`fas fa-cart-plus`} style={{ color: "blue" }}></i>
				{quantityInBasket > 0 && <span>({quantityInBasket})</span>}
			</span>
		</li>
	);
};

export default ProductListItem;
