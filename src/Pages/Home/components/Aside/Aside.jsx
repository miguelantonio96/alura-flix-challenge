import "./Aside.css";
import { NavLink } from "react-router-dom";

export const Aside = (props) => {
  const { options } = props;
console.log({options})
  return (
    <aside className="aside-container">
      <ul>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <NavLink
                to={`/${option.id}`}
                key={index}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {option.category}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
