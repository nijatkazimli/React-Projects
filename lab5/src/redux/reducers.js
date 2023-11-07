import { TOGGLE_LIKED, ADD_TO_BASKET } from "./actions";
import productsData from "../data";

const initialState = {
	products: productsData,
	likedProducts: [],
	productsInBasket: [],
  };

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LIKED:
			const productId = action.payload;
			const isLiked = state.likedProducts.includes(productId);
			const likedProducts = isLiked
				? state.likedProducts.filter((id) => id !== productId) // remember - filter creates a new array
				: [...state.likedProducts, productId];
			return {
				...state,
				likedProducts,
			};
		case ADD_TO_BASKET:
			const productIdToAdd = action.payload;
			const isAdded = state.productsInBasket.includes(productIdToAdd);
			const productsInBasket = isAdded
				? state.productsInBasket.filter((id) => id !== productId)
				: [...state.productsInBasket, productIdToAdd];
			return {
				...state,
				productsInBasket,
			};
		default:
			return state;
	}
};

export default rootReducer;
