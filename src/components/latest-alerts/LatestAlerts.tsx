const LatestAlerts = () => {
  return (
    <div className="latest-alerts" id="latest-alerts">
      <h2>LATEST ALERTS</h2>
      <div className="flex-alerts">
        <div className="alert">
          <button>Alert #1</button>
          <img
            src="https://framerusercontent.com/images/mS9DksWDy9YuklPNcsRsLtpKns.jpg"
            alt=""
          />
        </div>
        <div className="alert">
          <button>Alert #2</button>
          <img
            src="https://framerusercontent.com/images/khXhKItVjGVtVFkxa2K15ffwkoo.jpg?scale-down-to=1024"
            alt=""
          />
        </div>
      </div>
      <div className="flex-alerts">
        <div className="alert">
          <button>Alert #3</button>
          <img
            src="https://framerusercontent.com/images/DzlQGkX9UZekoG3Rdup2lNOOgI.jpg"
            alt=""
          />
        </div>
        <div className="alert">
          <button>Alert #4</button>
          <img
            src="https://framerusercontent.com/images/j0VYBhrMmKgFP3aBeOU49TEDbo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LatestAlerts;
