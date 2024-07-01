import Button from "../../../components/Button";
import { Input } from "../../../components/Inputs/Input/Input";
import { InputSelect } from "../../../components/Inputs/InputSelect/InputSelect";
import { InputTextArea } from "../../../components/Inputs/InputTextArea/InputTextArea";
import "./NewVideoPage.css";
import Title from "../../../components/Title/Title";
import { options } from "../../../components/Data/options";

export default function NewVideoPage(props) {
  const {
    handleInputChange,
    handleCancel,
    handleFormData,
    VideoAddedSuccessfully,
    error,
  } = props;
  console.log({error})
 
  return (
    <section className="main-new-video-container">
      <Title text="New Video" className="new-video-title" />
      <Title
        text="Complete the form to create a new video card"
        className="new-video-text"
      />

      <form className="new-video-form">
        <Input
          required={true}
          className="input-add-videos"
          name="title"
          label="Title:"
          type="text"
          placeholder="Enter movie title..."
          onChange={handleInputChange}
        />
        <div className="category-color-container">
          <InputSelect
            required={true}
            className="input-add-videos"
            name="category"
            label="Category:"
            selectOption="Select option"
            onChange={handleInputChange}
            options={options}
            selected
          />

          <Input
            required={true}
            className="input-add-videos input-color"
            name="color"
            label="Color:"
            type="color"
            onChange={handleInputChange}
          />
        </div>
        <Input
          className="input-add-videos"
          name="img"
          label="Image URL:"
          type="text"
          placeholder="Enter imagen link..."
          onChange={handleInputChange}
          required={true}
        />
        <Input
          className="input-add-videos"
          name="video"
          label="Video URL:"
          type="text"
          placeholder="ex: http://example.com"
          onChange={handleInputChange}
          required={true}
        />
        <InputTextArea
          className="input-text-area"
          name="description"
          label="Description:"
          placeholder="Enter description..."
          onChange={handleInputChange}
          required={true}
        />

        <div className="button-container">
          <Button
            className="button-save-form btn"
            type="button"
            text="Save"
            onClick={handleFormData}
          />
          <Button
            className="button-cancel-form btn"
            type="reset"
            text="Clear"
            onClick={handleCancel}
          />
        </div>
      </form>
      {error ? (
        <div>{error}</div>
      ) : (
        VideoAddedSuccessfully && (
          <div className="card-added-successfully">
            New video has been added successfully!
          </div>
        )
      )}
    </section>
  );
}
