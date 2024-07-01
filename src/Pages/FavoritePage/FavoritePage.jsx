import { useFavoritesContext } from "../../context/FavoriteContext";
import { Card } from "../Home/Content/Category/Card/Card";
import Title from "../../components/Title/Title";
import "./FavoritePage.css";

export const FavoritePage = () => {
  const { favorite } = useFavoritesContext();

  if (favorite.length <= 0)
    return (
      <section className="favorite-container">
        <Title className="favorite-title" text="Favorites" />
        <div className="favorite-content">
          <h1>No Favorites found</h1>
        </div>
      </section>
    );

  return (
    <section className="favorite-container">
      <Title className="favorite-title" text="Favorites" />
      <div className="favorite-content">
        {favorite.map((fav) => {
          return (
            <Card
              img={fav.img}
              key={fav.id}
              id={fav.movieId}
              color={fav.color}
              {...fav}
              category={fav.category}
              categoryId={fav.categoryId}
            />
          );
        })}
      </div>
    </section>
  );
};
