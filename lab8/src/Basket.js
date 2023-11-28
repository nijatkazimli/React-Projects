import { useSelector, useDispatch } from "react-redux";
import languageStore from "./zustand/languageStore";
import { removeFromBasket, addToBasket } from "./redux/actions";

const Basket = (props) => {
  const basketProducts = useSelector((state) => state.productsInBasket);
  const language = languageStore((state) => state.language);
  const productsData = useSelector((state) => state.products[language]);

  const basketText = {
    "en-US": "Your basket is empty.",
    "de-DE": "Ihr Warenkorb ist leer.",
    "pl-PL": "Twój koszyk jest pusty.",
  };

  const hasItemsInBasket = Object.keys(basketProducts).length > 0;

  const dispatch = useDispatch();

  const handleRemoveFromBasket = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  const handleAddToBasket = (productId) => {
    dispatch(addToBasket(productId));
  };

  return (
    <div className="box mr-5 ml-5">
      <h2 className="title">Basket</h2>
      {hasItemsInBasket ? (
        <ul>
          {Object.keys(basketProducts).map((productId) => {
			      const product = productsData.find((p) => p.id === Number(productId));
            const quantityInBasket = basketProducts[productId];
            return (
              <li key={productId}>
                {product.title} ({quantityInBasket})
                <span
                  className="icon has-text-success is-clickable"
                  onClick={() => handleAddToBasket(productId)}
                >
                  <i className="fas fa-plus-circle"></i>
                </span>
                <span
                  className="icon has-text-danger is-clickable"
                  onClick={() => handleRemoveFromBasket(productId)}
                >
                  <i className="fas fa-minus-circle"></i>
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>{basketText[language]}</p>
      )}
    </div>
  );
};

export default Basket;
