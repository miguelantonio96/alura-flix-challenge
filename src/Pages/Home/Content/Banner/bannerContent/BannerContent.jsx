import Title from "../../../../../components/Title/Title";
import "./BannerContent.css";
export default function BannerContent() {
  return (
    <div className="banner-content">
      <div className="banner-body">
        <Title className="banner-title" text="Front end" />
        <p>Challenge React</p>

        <p>
          This challenge is a form of learning. It is a mechanism where you can
          commit yourself to solving a problem to be able to apply all the
          knowledge acquired in React training.
        </p>
      </div>
      
    </div>
  );
}
