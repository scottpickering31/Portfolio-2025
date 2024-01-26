// LottieDisplay.jsx
import Lottie from "react-lottie";
import "./AboutMe.scss";

function LottieDisplay({ animationOptions, animationState, logoObject }) {
  return (
    <div className="container">
      <div className="row mx-auto d-flex justify-content-center align-items-center">
        {Object.keys(logoObject).map((logoKey) => (
          <div key={logoKey} className="col-3">
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
