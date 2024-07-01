import React from "react";
import "./SearchPage.css";

import { Card } from "../Home/Content/Category/Card/Card";
import Title from "../../components/Title/Title";

const SearchPage = ({ props }) => {
  const {
    searchValue,
    data,
    handleModal,
    deleteVideoCard,
    handleDeleteVideo,
    handlePlayVideo,
  } = props;

  if (!searchValue)
    return <Title text="No Result" className="no-result-title" />;

  const allMovies = data.reduce((accumulator, category) => {
    return accumulator.concat(category.movies);
  }, []);

  return (
    <section className="section-search-container">
      <Title
        className="search-title"
        text={`Search results for "${searchValue}"`}
      />
      <section className="section-item-container">
        {allMovies &&
          allMovies
            ?.filter((dataSearch) => {
              return dataSearch.title
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            ?.map((data, index) => {
              return (
                <div className="category-container" key={index}>
                  {/* <Title
                className="category-title"
                text={data?.category}
                color={data.color}
                /> */}

                  <div className="cards-container" key={index}>
                    <Card
                      canEdit={true}
                      color={data.color}
                      key={data.id}
                      data={{ ...data }}
                      id={data.id}
                      category={data.category}
                      categoryId={data.id}
                      handleDeleteVideo={handleDeleteVideo}
                      handleModal={handleModal}
                      handlePlayVideo={handlePlayVideo}
                      deleteVideoCard={deleteVideoCard}
                    />
                  </div>
                </div>
              );
            })}
      </section>
    </section>
  );
};

export default SearchPage;
