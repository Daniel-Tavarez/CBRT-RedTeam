const Features = () => {
  return (
    <div className="features" id="features">
      <div className="content">
        <div className="left-side">
          <img
            src="https://framerusercontent.com/images/eb7QimLcokz0tRLpGuUM2bRG44.jpg"
            alt=""
          />
        </div>
        <div className="right-side">
          <div className="title-with-images">
            <h2>FEATURES</h2>
            <div className="images">
              <img
                src="https://framerusercontent.com/images/9u4YYqAvkdulZHlNrsvokwJAug.jpg"
                alt=""
              />
              <img
                src="https://framerusercontent.com/images/khP6S79HYmyWeDGmt9NN5CcXhs.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="text-wrapper">
          <div className="text-with-logo">
            <img src="/src/assets/img/check.svg" alt="" />
            <p>Collaborative Team</p>
          </div>
          <div className="text-with-logo">
            <img src="/src/assets/img/check.svg" alt="" />
            <p>24/7 Tracking</p>
          </div>
          <div className="text-with-logo">
            <img src="/src/assets/img/check.svg" alt="" />
            <p>Great Security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
