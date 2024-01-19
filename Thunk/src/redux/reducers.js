import {TOGGLE_LIKED, ADD_TO_BASKET, REMOVE_FROM_BASKET, LOAD_LIKED_PRODUCTS, LOAD_BASKET} from "./actions";
import productsData from "../data";

const initialState = {
	products: productsData,
	likedProducts: [],
	productsInBasket: {},
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
			const updatedBasket = { ...state.productsInBasket };
			if (updatedBasket[productIdToAdd]) {
				updatedBasket[productIdToAdd] += 1;
			} else {
				updatedBasket[productIdToAdd] = 1;
			}
			return {
				...state,
				productsInBasket: updatedBasket,
			};
		case REMOVE_FROM_BASKET:
			const productIdToRemove = action.payload;
			const updatedBasketAfterRemove = { ...state.productsInBasket };
			if (updatedBasketAfterRemove[productIdToRemove] > 0) {
				updatedBasketAfterRemove[productIdToRemove] -= 1;
				if (updatedBasketAfterRemove[productIdToRemove] === 0) {
					delete updatedBasketAfterRemove[productIdToRemove];
				}
			}
			return {
				...state,
				productsInBasket: updatedBasketAfterRemove,
			};
		case LOAD_LIKED_PRODUCTS:
			return {
				...state,
				likedProducts: action.payload,
			};
		case LOAD_BASKET:
			return {
				...state,
				productsInBasket: {
					...state.productsInBasket,
					...action.payload,
				},
			};
		default:
			return state;
	}
};

export default rootReducer;
