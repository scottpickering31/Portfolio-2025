import AboutMe from "../../assets/Header/About/AboutMe";
import NavigationMenu from "../Header/Navigation/NavigationMenu";
import "./Header.css";

function Header({
  toggleDarkMode,
  darkMode,
  setViewableArea,
  viewableArea,
}: HeaderProps) {
  return (
    <div className="headerborder">
      <div>
        <NavigationMenu toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <div className="text-center">
        <div className="col mb-5">
          <AboutMe
            setViewableArea={setViewableArea}
            viewableArea={viewableArea}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
