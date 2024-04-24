import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "./StarRating";

// Компонент для отображения подробной информации о товаре
function ProductDetail() {
  // Используем хук useState для хранения состояния товара
  const [product, setProduct] = useState(null);
  // Используем хук useParams для получения параметра productId из URL
  const { productId } = useParams();

  // Используем хук useEffect для выполнения API-запроса при загрузке компонента или изменении параметра productId
  useEffect(() => {
    // Определяем асинхронную функцию fetchShop для выполнения API-запроса
    const fetchShop = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchShop();
  }, [productId]);

  // Если товар не загружен, отображаем сообщение о загрузке
  if (!product) {
    return <p>Loading...</p>;
  }

  // Возвращаем JSX для отображения подробной информации о товаре
  return (
    <div className="product-container">
      <div className="product-details">
        <h1>{product.title}</h1>
      </div>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>Description: {product.description}</p>
      <p className="product-price">Price: {product.price}</p>
      <StarRating rating={Math.round(product.rating)} />
      <Link to="/products" className="back-button">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetail;