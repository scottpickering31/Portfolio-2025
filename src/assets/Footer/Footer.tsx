import Github from "../../../public/Images/Logos/Github.png";
import LinkedIn from "../../../public/Images/Logos/LinkedIn.png";
import Twitter from "../../../public/Images/Logos/Twitter.png";
import "../Components/Buttons/AboutMeButtons.scss";

function Footer() {
  return (
    <div className="container-fluid text-white">
      <div className="row text-center d-flex justify-content-center align-items-center bg-black p-3">
        <div className="col-md-8 col-12 mb-4">
          <form
            action="mailto:scottpickering31@gmail.com"
            target="_blank"
            method="post"
            encType="text/plain"
            style={{ width: "100%", margin: "0 auto" }}
          >
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message Content
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                name="body"
              ></textarea>
            </div>
            <button type="submit" className="aboutMeBtn">
              Send Email
            </button>
          </form>
        </div>
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
