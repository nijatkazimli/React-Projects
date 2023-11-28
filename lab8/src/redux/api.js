import {loadLikedProducts, toggleLiked} from "./actions";

const BASE_URL = 'http://localhost:3001';

export const fetchLikedProducts = () => {
    return (dispatch) => {
        fetch(`${BASE_URL}/liked`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const likedProductIds = data.map(x => x.id);
                dispatch(loadLikedProducts(likedProductIds));
            })
            .catch(error => {
                console.error("Error fetching liked products:", error);
            });
    };
};

export const saveLikedProduct = (productId) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/liked`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: productId }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                dispatch(toggleLiked(productId));
            })
            .catch((error) => {
                console.error("Error saving liked product:", error);
            });
    };
};

export const removeLikedProduct = (productId) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/liked/${productId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                dispatch(toggleLiked(productId));
            })
            .catch((error) => {
                console.error("Error removing liked product:", error);
            });
    };
};