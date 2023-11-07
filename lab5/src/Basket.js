import { useContext } from "react";
import { useSelector } from "react-redux";
import LanguageContext from "./LanguageContext";

const Basket = (props) => {
  const basketProducts = useSelector((state) => state.productsInBasket);
  const { language } = useContext(LanguageContext);
  const productsData = useSelector((state) => state.products[language]);

  const basketText = {
    "en-US": "Your basket is empty.",
    "de-DE": "Ihr Warenkorb ist leer.",
    "pl-PL": "Twój koszyk jest pusty.",
  };

  const hasItemsInBasket = Object.keys(basketProducts).length > 0;

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
