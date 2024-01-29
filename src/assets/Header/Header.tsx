import AboutMe from "../../assets/Header/About/AboutMe";
import NavigationMenu from "../Header/Navigation/NavigationMenu";

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

function Header({ toggleDarkMode, darkMode }: HeaderProps) {
  return (
    <div className="headerborder">
      <div>
        <NavigationMenu toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <div className="text-center">
        <div className="col mb-5">
          <AboutMe darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default Header;
