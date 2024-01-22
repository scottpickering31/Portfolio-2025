import AboutMe from "../../assets/Header/About/AboutMe";
import NavigationMenu from "../Header/Navigation/NavigationMenu";

function Header({ toggleDarkMode, darkMode }) {
  return (
    <div className="container text-center">
      <div>
        <NavigationMenu toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <div
        className="col mb-5 mt-5"
        style={{ color: darkMode ? "white" : "black" }}
      >
        <AboutMe />
      </div>
    </div>
  );
}

export default Header;
