// Компонент для отображения рейтинга в виде звезд
const StarRating = ({ rating }) => {
  // Создаем массив звезд с использованием рейтинга
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? "star-filled" : "star-empty"}
    >
      &#9733;
    </span>
  ));

  // Возвращаем JSX для отображения звездного рейтинга
  return <div>{stars}</div>;
};

export default StarRating;