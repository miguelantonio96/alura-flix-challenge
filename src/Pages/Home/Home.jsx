import { useParams } from "react-router-dom";
import { Content } from "./Content/Content";
import "./Home.css";

export default function Home({
  parentData,
  IsLoading,
  handleVideo,
  deleteVideoCard,
  props
}) {

  
  const { categoryId } = useParams();
  const updatedMovies = categoryId
  ? parentData.filter((category) => category.id === categoryId)
  : parentData;
  


  return (
    <section className="home-container">
      {parentData?.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <Content
        {...props}
       
          data={updatedMovies}
          IsLoading={IsLoading}
          handleVideo={handleVideo}
          deleteVideoCard={deleteVideoCard}
        />
      )}
    </section>
  );
}
