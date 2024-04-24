import { useLocation, useNavigate } from "react-router-dom";

// Компонент для отображения страницы NotFound
function NotFoundPage() {
  // Получаем функцию навигации из хука useNavigate
  const navigate = useNavigate();
  // Получаем объект location из хука useLocation
  const location = useLocation();
  // Выводим объект location в консоль для отладки
  console.log(location);

  // Возвращаем JSX для отображения страницы NotFound
  return (
    <div className="not-found-page">
      <img
        src="https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg"
        alt="error"
      />
      {/* Кнопка "Назад" с использованием функции navigate для перехода на страницу /products */}
      <button className="back-button" onClick={() => navigate("/products")}>
        Go Back to Products
      </button>
    </div>
  );
}

export default NotFoundPage;