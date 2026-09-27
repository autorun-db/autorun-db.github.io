import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  let navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="logo-icon">
            <img src="img/logo-bg.svg"></img>
          </div>
        </a>

        <button
          className="btn"
          onClick={() => {
            navigate("/form");
          }}
        >
          Form
        </button>
      </div>
    </nav>
  );
}
