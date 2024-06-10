import Github from "../../../public/Images/Logos/Github.png";
import LinkedIn from "../../../public/Images/Logos/LinkedIn.png";
import Twitter from "../../../public/Images/Logos/Twitter.png";
import "../Components/Buttons/AboutMeButtons.scss";

function Footer() {
  return (
    <div className="container-fluid text-white">
      <div className="row text-center d-flex justify-content-center align-items-center bg-black p-3">
        <div className="col-lg-4 col-12">
          <div className="col-12 justify-content-center align-items-center mb-3">
            <h1 className="mb-3">Contact Me</h1>
            <a href="https://github.com/scottpickering31" target="_blank">
              <img
                src={Github}
                alt="Github Logo"
                className="m-2 contactImg"
                style={{
                  width: "80px",
                  backgroundColor: "white",
                  borderRadius: "70%",
                }}
              />
            </a>
            <a href="https://twitter.com/scottypickering" target="_blank">
              <img
                src={Twitter}
                alt="Twitter Logo"
                style={{ width: "80px" }}
                className="m-2 contactImg"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/scott-pickering-b6b05287/"
              target="_blank"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn Logo"
                style={{ width: "80px" }}
                className="m-2 contactImg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
