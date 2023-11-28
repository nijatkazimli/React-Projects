import {loadLikedProducts} from "./actions";

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
                console.log(data);
                dispatch(loadLikedProducts(likedProductIds));
            })
            .catch(error => {
                console.error("Error fetching liked products:", error);
            });
    };
};
