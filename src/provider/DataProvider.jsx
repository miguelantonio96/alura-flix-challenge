import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    color: "",
    id: "",
    title: "",
    img: "",
    video: "",
    description: "",
  });
  const [modalDisplay, setModalDisplay] = useState({
    id: null,
    showModal: false,
    category: null,
  });

  const [searchValue, setSearchValue] = useState();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoPlay, setVideoPlay] = useState(null);
  const [VideoAddedSuccessfully, SetVideoAddedSuccessfully] = useState(false);

  console.log({error})
  // Method to fetch data from server

  async function getData() {
    const Url = "https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data";
    const response = await fetch(Url);
    const data = await response.json();
    setData(data);
  }

  // Method to handle form input changes
  const handleInputChange = (e) => {
  
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Method to handle form submission
  const handleFormData = async (e) => {
    e?.preventDefault();
    setLoading(true);
   
console.log('function called')

  
    try {
      const response = await fetch("https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const movies = await response.json();

      const categoryExist = movies.find(
        (movie) => movie.category === formData.category
      );

      // Update existing category
      if (categoryExist) {
        const currentMovies = categoryExist.movies;
        currentMovies.push({
          id: uuidv4(),
          title: formData.title,
          img: formData.img,
          video: formData.video,
          description: formData.description,
        });

        await fetch(`https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data/${categoryExist.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movies: currentMovies }),
        });
      } else {
        // Create new category

        const newMovies = {
          category: formData.category,
          color: formData.color,
          id: uuidv4(),
          movies: [
            {
              id: uuidv4(),
              title: formData.title,
              img: formData.img,
              video: formData.video,
              description: formData.description,
            },
          ],
        };

        const response = await fetch("https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMovies),
        });

        if (!response.ok) {
          throw new Error("Failed to create new category");
        }
      }

      // Update data after form submission
      getData();
      SetVideoAddedSuccessfully(true);
      setTimeout(() => {
        SetVideoAddedSuccessfully(false);
      }, 4000);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Method to delete a video card

  const deleteVideoCard = async (categoryId, movieId) => {
    // get movies from category

    try {
      const response = await fetch(`https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data/${categoryId}`);

      const category = await response.json();

      const movies = await category.movies;

      const updatedMovies = await movies.filter(
        (movie) => movie.id !== movieId
      );

      // Delete category if there are no more movies in it
      if (updatedMovies.length === 0) {
        await fetch(`https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data/${categoryId}`, {
          method: "DELETE",
        }).then(() => {
          getData();
        });
      } else {
        await fetch(`https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data/${categoryId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movies: updatedMovies }),
        }).then(() => {
          getData();
        });
      }

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Method to edit color

  const handleEditCategoryColor = async (categoryId, color) => {
    try {
      await fetch(`https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data/${categoryId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ color }),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Method to handle form edit
  const handleEditVideo = async (
    currentCategory,
    category,
    movieId,
    formEdited
  ) => {
    const categoryFiltered = data.filter((c) => c.category === currentCategory);

    try {
      const response = await fetch("https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const movies = await response.json();

      const categoryExist = movies.find((movie) => movie.category === category);

      // Update existing category
      if (categoryExist) {
        let currentMovies = categoryExist.movies;
        let movieExist = currentMovies.find((movie) => movie.id === movieId);

        if (movieExist) {
          currentMovies = categoryExist.movies.map((movie) => {
            if (movie.id === movieId) {
              return {
                ...movie,
                ...formEdited,
              };
            } else {
              return movie;
            }
          });
        } else {
          currentMovies.push({
            id: formEdited.id,
            title: formEdited.title,
            img: formEdited.img,
            video: formEdited.video,
            description: formEdited.description,
          });
        }

        await fetch(`https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data/${categoryExist.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movies: currentMovies }),
        });

        if (categoryExist.category !== currentCategory) {
          await deleteVideoCard(categoryFiltered?.[0]?.id, movieId);
        }
      } else {
        // Create new category
        const newMovies = {
          category: formEdited.category,
          color: formEdited.color,
          id: uuidv4(),
          movies: [
            {
              id: formEdited.id,
              title: formEdited.title,
              img: formEdited.img,
              video: formEdited.video,
              description: formEdited.description,
            },
          ],
        };
        await fetch("https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMovies),
        });

        await deleteVideoCard(categoryFiltered?.[0]?.id, movieId);
      }

      formEdited.color &&
        handleEditCategoryColor(categoryFiltered?.[0]?.id, formEdited.color);
    } catch (error) {
      console.log(error.message);
    } finally {
      // update data after saving
      getData();
    }

    setModalDisplay(() => {
      return {
        id: null,
        category: null,
        showModal: false,
      };
    });
  };

  // Method to handle cancelling form inputs
  const handleCancel = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: "",
      color: "",
      title: "",
      img: "",
      video: "",
      id: "",
      description: "",
    }));
  };

  // Method to handle video play
  const handleVideo = (id) => {
    setVideoPlay({
      id: id,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const optionData = data?.map((option) => {
    if (option.movies.length <= 0) {
      fetch(`https://my-json-server.typicode.com/miguelantonio96/alura-flix-challenge/data/${option.category}`, {
        method: "DELETE",
      }).then(() => {
        getData();
      });

      return {
        category: null,
        color: null,
        id: null,
      };
    }

    return {
      category: option.category,
      color: option.color,
      id: option.id,
    };
  });

  const currentMovieTitle = data.filter((movie) => {
    return searchValue === movie.movies;
  });
  console.log({ currentMovieTitle });

  //----------------------------------------------------------------
  // Modal display \\
  //----------------------------------------------------------------

  const handleModal = (id, category) => {
    setModalDisplay((prev) => {
      return {
        showModal: !prev.showModal,
        id: id,
        category: category,
      };
    });
  };

  return typeof children === "function"
    ? children({
        data,
        error,
        formData,
        videoPlay,
        isLoading,
        optionData,
        VideoAddedSuccessfully,
        modalDisplay,
        searchValue,
        setSearchValue,
        handleInputChange,
        setModalDisplay,
        handleEditVideo,
        deleteVideoCard,
        handleFormData,
        handleCancel,
        setVideoPlay,
        setFormData,
        handleModal,
        handleVideo,
        setLoading,
        setError,
        setData,
        getData,
      })
    : children;
};
