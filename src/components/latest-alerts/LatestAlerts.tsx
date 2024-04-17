const LatestAlerts = () => {
  return (
    <div className="latest-alerts" id="latest-alerts">
      <h2>LATEST ALERTS</h2>
      <div className="flex-alerts">
        <div className="alert">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-anchor-placement="center-bottom"
            className="animation">
            <button>Alert #1</button>
            <img
              src="https://framerusercontent.com/images/mS9DksWDy9YuklPNcsRsLtpKns.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="alert">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-delay="550"
            data-aos-duration="700"
            data-aos-anchor-placement="center-bottom"
            className="animation">
            <button>Alert #2</button>
            <img
              src="https://framerusercontent.com/images/khXhKItVjGVtVFkxa2K15ffwkoo.jpg?scale-down-to=1024"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex-alerts">
        <div className="alert">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-anchor-placement="center-bottom"
            className="animation">
            <button>Alert #3</button>
            <img
              src="https://framerusercontent.com/images/DzlQGkX9UZekoG3Rdup2lNOOgI.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="alert">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-delay="550"
            data-aos-duration="700"
            data-aos-anchor-placement="center-bottom"
            className="animation">
            <button>Alert #4</button>
            <img
              src="https://framerusercontent.com/images/j0VYBhrMmKgFP3aBeOU49TEDbo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestAlerts;
