const Banner = () => {
  return (
    <div className="banner">
      <div className="text-overlay">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-offset="0"
          className="text">
          <h2>SECURE TODAY,</h2>
          <h2>PREVENT AND</h2>
          <h2>DEFEND</h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="800"
          className="text">
          <h1>EVERYDAY</h1>
        </div>
        <div className="styled-lined-buttons">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
            data-aos-offset="0"
            data-aos-duration="800"
            className="animation">
            <div className="logo-text">
              <img src="/src/assets/img/user.svg" alt="" />
              <p>User protection</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="500"
            data-aos-offset="0"
            data-aos-duration="800"
            className="animation">
            <div className="logo-text">
              <img src="/src/assets/img/wifi.svg" alt="" />
              <p>Scenic Views</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
            data-aos-offset="0"
            data-aos-duration="800"
            className="animation">
            <div className="logo-text">
              <img src="/src/assets/img/wrench.svg" alt="" />
              <p>Good Customization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
