import { useParams } from "react-router-dom";
import "./Video.css";
import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { Loading } from "../Home/Content/IsLoading/IsLoading";

export const Video = () => {
  const { categoryId, movieId } = useParams();
  const [movie, setMovie] = useState(null);

  async function getMovie(movieId, categoryId) {
    const response = await fetch(
      `https://my-json-server.typicode.com/miguelantonio96/api/data/${categoryId}?movies_id=${movieId}`
    );
    const data = await response.json();
    const currentMovie = data.movies.find((m) => m.id === movieId);

    setMovie(currentMovie);
    return data;
  }

  useEffect(() => {
    getMovie(movieId, categoryId);
  }, [categoryId, movieId]);

  return !movie ? (
    <Loading />
  ) : (
    <div className="video-container">
      <iframe
        className="video-iframe"
        src={movie.video}
        title={movie.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
      {movie.description === "" ? (
        <Title text="No description found" className="video-title" />
      ) : (
        <Title className="video-title" text={movie.description} />
      )}
    </div>
  );
};
