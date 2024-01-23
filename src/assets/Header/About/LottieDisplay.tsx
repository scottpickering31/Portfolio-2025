// LottieDisplay.jsx
import Lottie from "react-lottie";
import "./AboutMe.css";

function LottieDisplay({ animationOptions, animationState, logoObject }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row AboutMeButtons">
        {Object.keys(logoObject).map((logoKey) => (
          <div key={logoKey} className="col-4 ">
            <Lottie
              options={{
                ...animationOptions,
                animationData: logoObject[logoKey],
              }}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LottieDisplay;
