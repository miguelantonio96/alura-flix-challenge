import "./modalEditCard.css";
import { Input } from "../../../../components/Inputs/Input/Input";
import { InputSelect } from "../../../../components/Inputs/InputSelect/InputSelect";
import { InputTextArea } from "../../../../components/Inputs/InputTextArea/InputTextArea";
import { options } from "../../../../components/Data/options";
import Title from "../../../../components/Title/Title";
import Button from "../../../../components/Button";

export const ModalEditCard = ({
  currentCategory,
  category,
  modalData,
  movieId,
  handleModal,
  handleEditVideo,
  handleInputChange,
}) => {
  return (
    <>
      <dialog className="modal-edit-card-container">
        {/* <div className="modal-opacity"></div> */}

        <Title className="modal-title" text="Edit card" color="#007bff" />
        <form>
          <Input
            className="input-modal"
            name="title"
            label="Title:"
            type="text"
            placeholder="Enter movie title..."
            value={modalData?.title}
            onChange={handleInputChange}
          />
          <div className="select-color-container">
            <InputSelect
              required
              className="input-modal"
              name="category"
              label="Category:"
              options={options}
              value={modalData?.category}
              onChange={handleInputChange}
            />

            <Input
              className="input-color"
              name="color"
              label="Color:"
              type="color"
              placeholder="Enter movie title..."
              value={modalData?.color}
              onChange={handleInputChange}
            />
          </div>
          <Input
            className="input-modal"
            name="img"
            label="Image URL:"
            type="text"
            placeholder="Enter ..."
            value={modalData?.img}
            onChange={handleInputChange}
          />
          <Input
            className="input-modal"
            name="video"
            label="Video URL:"
            type="text"
            placeholder="Enter ..."
            value={modalData?.video}
            onChange={handleInputChange}
          />
          <InputTextArea
            className="modal-TextArea"
            name="description"
            label="Description:"
            placeholder="Enter a description..."
            value={modalData?.description}
            onChange={handleInputChange}
          />

          <div className="edit-button-container">
            <Button
              className="button-save"
              type="button"
              text="Save"
              onClick={() =>
                handleEditVideo(currentCategory, category, movieId, modalData)
              }
            ></Button>
            <Button
              className="button-cancel"
              type="button"
              text="Cancel"
              onClick={handleModal}
            ></Button>
          </div>
        </form>
      </dialog>
    </>
  );
};
