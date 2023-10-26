import { NavLink } from "react-router-dom";

export function LinkButton({ linkTo, text }) {
  return (
    <NavLink className="link-button" to={linkTo}>
      <div>{text} &rarr; </div>
    </NavLink>
  );
}
