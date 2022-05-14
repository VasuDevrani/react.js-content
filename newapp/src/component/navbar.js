import react from "react";
import propTypes from "prop-types";

function Navbar(props) {
  function shoot() {
    alert("the button was clicked and react event was fired");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              defaultChecked
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label text-light"
              htmlFor="flexSwitchCheckChecked"
            >
              {props.pageMode}
            </label>
          </div>
        </div>
      </nav>
      <div>
        <button className="bg-dark text-light " onClick={shoot}>
          React-event
        </button>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  search: propTypes.string,
};
//   propTypes.string.isRequired ensures the input of some sata as prop

export default Navbar;
