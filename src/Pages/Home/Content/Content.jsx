import "./Content.css";
import { Banner } from "./Banner/Banner";
import { Category } from "./Category/Category";
import { ModalEditCard } from "../components/ModalEditCard/ModalEditCard";
import { useEffect, useMemo, useState } from "react";
import { Loading } from "./IsLoading/IsLoading";
import { AddVideoButton } from "./NewVideoButton/AddVideoButton";

export const Content = (props) => {
  const {
    modalDisplay,
    data,
    IsLoading,
    handleEditVideo,
    deleteVideoCard,
    handleModal,
  } = props;
 

  // edit card \\
  const [formEdited, setFormEdited] = useState({});

  const category = useMemo(() => {
    return data.length > 0
      ? data?.filter((data) => data.category === modalDisplay.category)
      : [data];
  }, [data, modalDisplay.category]);

  const movieData = useMemo(() => {
    return (
      category?.[0]?.movies?.filter((data) => data.id === modalDisplay.id) || []
    );
  }, [category, modalDisplay.id]);

  useEffect(() => {
    setFormEdited({
      ...movieData[0],
      category: modalDisplay.category,
      color: category?.[0]?.color,
    });
  }, [movieData, modalDisplay, category]);

  function handleInputChange(e) {
    e.preventDefault();

    setFormEdited({
      ...formEdited,
      [e.target.name]: e.target.value,
    });
  }

  //----------------------------------------------------------------
  // return content
  //----------------------------------------------------------------

  // .filter(()=>{
  //   if (searchResult === '') {
  //     return true;
  //   }
  //   return false;
  // }
  
  // )


  return (
    <section className="content-container">
      <Banner />
      <article className="content">
        {IsLoading ? <Loading /> : <AddVideoButton />}

        {data &&
          data?.map((data, index) => {
            return (
              <Category
                data={data}
                key={index}
                handleModal={handleModal}
                deleteVideoCard={deleteVideoCard}
              />
            );
          })}

        {modalDisplay.showModal && (
          <ModalEditCard
            handleModal={handleModal}
            currentCategory={modalDisplay.category}
            movieId={formEdited.id}
            handleEditVideo={handleEditVideo}
            modalData={formEdited}
            category={formEdited.category}
            handleInputChange={handleInputChange}
          />
        )}
      </article>
    </section>
  );
};
