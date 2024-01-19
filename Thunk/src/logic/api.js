import {addToBasket, loadBasket, loadLikedProducts, removeFromBasket, toggleLiked} from "../redux/actions";

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

export const fetchLanguage = async () => {
    try {
        const response = await fetch(`${BASE_URL}/language`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error(`Error fetching language: ${error.message}`);
        throw error;
    }
};

export const setLanguage = (newLanguage) => {
    return fetch(`${BASE_URL}/language`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: newLanguage }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(`Error saving language: ${error.message}`);
            throw error;
        });
};

export const fetchBasket = () => {
    return (dispatch) => {
        fetch(`${BASE_URL}/basket`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                dispatch(loadBasket(data));
            })
            .catch(error => {
                console.error("Error fetching basket:", error);
            });
    };
};

export const incrementProductInBasket = (productId) => {
    return(dispatch, getState) => {
        const currentState = getState();
        const currentCount = currentState.productsInBasket[productId] || 0;

        const updatedCount = currentCount + 1;
        const payload = {
                ...currentState.productsInBasket,
                [productId]: updatedCount,
        };

        fetch(`${BASE_URL}/basket`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                dispatch(addToBasket(productId));
            })
            .catch((error) => {
                console.error("Error saving product in the basket:", error);
            });
    }
};

export const decrementProductInBasket = (productId) => {
    return(dispatch, getState) => {
        const currentState = getState();
        const currentCount = currentState.productsInBasket[productId] || 0;

        const updatedCount = currentCount - 1;

        const payload = {
            ...currentState.productsInBasket,
            [productId]: updatedCount,
        };

        if (updatedCount === 0) {
            delete payload[productId];
        }

        fetch(`${BASE_URL}/basket`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                dispatch(removeFromBasket(productId));
            })
            .catch((error) => {
                console.error("Error saving product in the basket:", error);
            });
    };
};