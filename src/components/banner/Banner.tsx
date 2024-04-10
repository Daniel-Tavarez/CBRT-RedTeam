const Banner = () => {
  return (
    <div className="banner">
      <div className="text-overlay">
        <h2>SECURE TODAY,</h2>
        <h2>PREVENT AND</h2>
        <h2>DEFEND</h2>
        <h1>EVERYDAY</h1>
        <div className="styled-lined-buttons">
          <div className="logo-text">
            <img src="/src/assets/img/user.svg" alt="" />
            <p>User protection</p>
          </div>
          <div className="logo-text">
            <img src="/src/assets/img/wifi.svg" alt="" />
            <p>Scenic Views</p>
          </div>
          <div className="logo-text">
            <img src="/src/assets/img/wrench.svg" alt="" />
            <p>Good Customization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
