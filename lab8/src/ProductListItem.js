import { useSelector, useDispatch } from "react-redux";
import { saveLikedProduct, removeLikedProduct, incrementProductInBasket } from "./logic/api";

const ProductListItem = ({ product }) => {
	const likedProducts = useSelector((state) => state.likedProducts);
	const addedProducts = useSelector((state) => state.productsInBasket);
	const dispatch = useDispatch();
	const isLiked = likedProducts.includes(product.id);
	const quantityInBasket = addedProducts[product.id] || 0;	

	const handleAddToBasket = (productId) => {
		dispatch(incrementProductInBasket(productId));
	};

	const handleToggleLiked = (productId) => {
		if (isLiked) {
			dispatch(removeLikedProduct(productId));
		} else {
			dispatch(saveLikedProduct(productId));
		}
	};

	return (
		<li>
			<span style={{ marginRight: 5 }}>{product.title}</span>
			<span
				onClick={() => handleToggleLiked(product.id)}
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
