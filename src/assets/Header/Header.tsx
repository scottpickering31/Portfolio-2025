import AboutMe from "../../assets/Header/About/AboutMe";
import NavigationMenu from "../Header/Navigation/NavigationMenu";

function Header({
  toggleDarkMode,
  darkMode,
  setViewableArea,
  viewableArea,
}: HeaderProps) {
  const borderColor = darkMode ? "border-white" : "border-black";

  return (
    <>
      <div>
        <NavigationMenu toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <div className="container text-center">
        <div className="col mb-5">
          <AboutMe
            setViewableArea={setViewableArea}
            viewableArea={viewableArea}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
