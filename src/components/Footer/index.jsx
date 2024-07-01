import { Logo } from "../Logo/Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo/>
      <div className="footer-text">
        Desenvolvido por  <a href="https://github.com/miguelantonio96" target="_blank" rel="noreferrer">Miguel</a>
      </div>
    </footer>
  );
}
