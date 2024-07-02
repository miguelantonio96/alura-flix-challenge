import { Link } from "react-router-dom";
import Button from "../../../../../components/Button";
import "./Card.css";
import playIcon from "./button-play_icon.png";
import { useState } from "react";
import { useFavoritesContext } from "../../../../../context/FavoriteContext";
import isFavoriteIcon from "./Icon/isFavorite.png";
import noFavoriteIcon from "./Icon/noFavorite.png";
import { RiCloseLargeLine } from "react-icons/ri";

export const Card = ({
  color,
  data,
  handleModal,
  id,
  category,
  categoryId,
  deleteVideoCard,
  canEdit,
}) => {
  //----------------------------------------------------------------
  // Show Play Video card
  //----------------------------------------------------------------

  const [showPlayVideo, setShowPlayVideo] = useState({
    showPlayVideo: false,
    id: null,
  });

  const handleShowButtonCard = (id) => {
    setShowPlayVideo({ showPlayVideo: true, id: id });
  };

  const handleHideButtonCard = () => {
    setShowPlayVideo({
      showPlayVideo: false,
      id: null,
    });
  };

  //----------------------------------------------------------------
  // Add to Favorite card
  //----------------------------------------------------------------

  const { favorite, AddFavorite } = useFavoritesContext();

  const isFavorite = favorite.some((fav) => fav.id === id);

  const favoritesIcon = isFavorite ? isFavoriteIcon : noFavoriteIcon;

  //----------------------------------------------------------------
  // Delete video card
  //----------------------------------------------------------------

  //----------------------------------------------------------------
  // Return
  //----------------------------------------------------------------
  return (
    <div
      className="card"
      onMouseOver={() => handleShowButtonCard(id)}
      onMouseLeave={handleHideButtonCard}
      key={id}
    >
      {showPlayVideo.showPlayVideo && showPlayVideo.id === id && (
        <>
          <Link
            to={`/watch_video/${categoryId}/${id}`}
            target="_blank"
            className="play-icon"
          >
            <img src={playIcon} alt="play icon" />
          </Link>

          {deleteVideoCard && (
            <div className="close-container">
              <RiCloseLargeLine
                onClick={() => deleteVideoCard(categoryId, id)}
              />
            </div>
          )}

          <h3 className="title-card">{data.title}</h3>
          <div className="cover-card"></div>
        </>
      )}

      <Link
        to="#"
        className="Favorite-icon"
        style={{ backgroundColor: color }}
        onClick={() =>
          AddFavorite({ movieId: id, category, data, color, categoryId, id })
        }
      >
        <img src={favoritesIcon} alt="Favorite icon" />
      </Link>

      <div className="card-body">
        <img className="card-img-top" src={data.img} alt="Card imagen" />
        <p className="card-text">{data.description}</p>
      </div>

      {canEdit && (
        <div className="card-button">
          <Button
            text="Edit"
            className="btn-card "
            type="button"
            onClick={() => handleModal(id, category)}
          />
        </div>
      )}
    </div>
  );
};
