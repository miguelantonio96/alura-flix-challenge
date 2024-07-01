import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import { Logo } from "../Logo/Logo";
import "./Header.css";
import { InputSearch } from "../Inputs/InputSearch/InputSearch";

export default function Header({ props }) {
  const { searchValue, setSearchValue } = props;

  const navigate = useNavigate();
  const location = useLocation();
 

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    navigate(`/search`);
  };

  return (
    <header className="header">
      <div className="logo-and-search">
        <Logo />

        {location.pathname !== "/favorites" &&
          location.pathname !== "/new_video" && (
            <div className="search-container">
              <InputSearch
                type="search"
                name="search"
                placeholder="Search a movie..."
                value={searchValue}
                handleSearch={handleSearch}
                onChange={(e) => handleSearch(e)}
              />
            </div>
          )}
      </div>

      <nav className="nav-bar-container">
        <Button
          text="Home"
          type="button"
          className="header-home-button btn-header"
          onClick={() => navigate("/")}
        />

        <Link to="/favorites">
          <h1 className="favorite-header">Favorites</h1>
        </Link>
      </nav>
    </header>
  );
}
