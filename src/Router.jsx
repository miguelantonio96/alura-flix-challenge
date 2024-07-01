import { Route, Routes } from "react-router-dom";
import { Error404 } from "./Pages/Error404/Error404";
import { FavoritePage } from "./Pages/FavoritePage/FavoritePage";
import Home from "./Pages/Home/Home";
import NewVideoPage from "./Pages/Video/NewVideoPage/NewVideoPage";
import { Video } from "./Pages/Video/Video";
import FavoritesProvider from "./context/FavoriteContext";
import SearchPage from "./Pages/SearchPage/SearchPage";

export default function Router(props) {
  return (
    <FavoritesProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              parentData={props.data}
              isLoading={props.isLoading}
              handleVideo={props.handleVideo}
              deleteVideoCard={props.deleteVideoCard}
              {...props}
            />
          }
        />
        <Route
          path="/:categoryId"
          element={
            <Home
              parentData={props.data}
              isLoading={props.isLoading}
              handleVideo={props.handleVideo}
              deleteVideoCard={props.deleteVideoCard}
              {...props}
            />
          }
        />

        <Route path="/search" element={<SearchPage {...props} />} />

        <Route
          path="/new_video"
          element={
            <NewVideoPage
            {...props}
            />
          }
        />
        <Route
          path="/watch_video/:categoryId/:movieId"
          element={<Video videoPlay={props.videoPlay} />}
        />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </FavoritesProvider>
  );
}
