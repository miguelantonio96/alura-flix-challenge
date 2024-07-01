
import Title from "../../../../../components/Title/Title";
import "./BannerContent.css";
export default function BannerContent() {
  return (
    <div className="banner-content">
      <div className="banner-body">
      <Title className="banner-title" text="Front end" />
      <p>Challenge React</p>

      <p>
        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás
        comprometerte en la resolución de un problema para poder aplicar todos
        los conocimientos adquiridos en la formación React.
      </p>
      </div>
      <img
        src="./img/Cristian_imagen.jpeg"
        alt="banner_inside imagen"
        className="banner-image"
      />
    </div>
  );
}
