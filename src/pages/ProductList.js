import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

// Компонент для отображения списка товаров
function ProductList() {
  // Используем хук useState для хранения состояния списка товаров
  const [products, setProducts] = useState([]);

  // Используем хук useEffect для выполнения API-запроса при загрузке компонента
  useEffect(() => {
    // Определяем асинхронную функцию fetchShop для выполнения API-запроса
    const fetchShop = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const data = await response.json();
      setProducts(data);
    };
    fetchShop();
  }, []);

  // Возвращаем JSX для отображения списка товаров
  return (
    <div className="product-list-container">
      <ul className="product-list">
        {/* Маппим каждый товар на элемент списка с ссылкой на страницу товара и рейтингом */}
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/products/${product.id}`} className="product-link">
              <div className="product-info">
                <div className="product-title">{product.title}</div>
                <StarRating rating={Math.round(product.rating)} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;