import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

// Функция компонента App, отвечающая за маршрутизацию в приложении
function App() {
  return (
    // Обертка Router с указанием базового пути
    <Router basename="/RECTLESS-CP-4">
      {/* Определение маршрутов */}
      <Routes>
        {/* Маршрут для отображения списка всех товаров */}
        <Route path="/products" element={<ProductList />} />
        {/* Маршрут для отображения подробной информации о товаре с динамическим параметром productId */}
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* Маршрут для отображения страницы NotFound в случае неизвестного маршрута */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
