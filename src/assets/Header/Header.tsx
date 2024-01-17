function Header({ toggleDarkMode }) {
  return (
    <div className="container text-center">
      <div className="col">
        <button className="btn btn-primary mt-5" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
        <div className="col mb-5">
          <img src="https://picsum.photos/200/300" />
        </div>
      </div>
    </div>
  );
}

export default Header;
