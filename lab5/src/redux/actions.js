export const TOGGLE_LIKED = "TOGGLE_LIKED";
export const ADD_TO_BASKET = "ADD_TO_BASKET";

export const toggleLiked = (productId) => ({
	type: TOGGLE_LIKED,
	payload: productId,
});

export const addToBasket = (productId) => ({
	type: ADD_TO_BASKET,
	payload: productId,
});