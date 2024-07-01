import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favorite";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const {favorite, setFavorite } = useContext(FavoritesContext);

  function AddFavorite(newFavorites) {
    const repeatFavorite = favorite.some((fav) => fav.id === newFavorites.id);
    let newFavoritesList = [...favorite];

    if (!repeatFavorite) {
      newFavoritesList.push(newFavorites);
      return setFavorite(newFavoritesList);
    }

    newFavoritesList = favorite.filter((fav) => {
      return fav.id !== newFavorites.id;
    });
    return setFavorite(newFavoritesList);
  }
  return { favorite, AddFavorite };
}
