import "./Category.css";
import Title from "../../../../components/Title/Title";
import { Card } from "./Card/Card";

export const Category = ({
  data,
  handleModal,
  handleDeleteVideo,
  handlePlayVideo,
  deleteVideoCard,
}) => {


  if (data?.movies.length <= 0) {
    return null;
  }
  return (
    <div className="category-container">
      <Title
        className="category-title"
        text={data?.category}
        color={data.color}
      />

      <div className="cards-container">
        {data.movies.map((item) => {
          return (
            <Card
              canEdit={true}
              color={data.color}
              key={item.id}
              data={{ ...item }}
              id={item.id}
              category={data.category}
              categoryId={data.id}
              
              handleDeleteVideo={handleDeleteVideo}
              handleModal={handleModal}
              handlePlayVideo={handlePlayVideo}
              
              deleteVideoCard={deleteVideoCard}
            />
          );
        })}
      </div>
    </div>
  );
};
