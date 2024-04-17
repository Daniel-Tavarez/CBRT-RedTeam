const Header = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-delay="50"
      data-aos-offset="0"
      data-aos-duration="300"
      data-aos-anchor-placement="bottom-top"
      className="header">
      <div className="logo">
        <img
          src="https://framerusercontent.com/images/Nm8YjXLOLSWw29kkfqwbqdVoE5Y.png"
          alt=""
        />
      </div>
      <div className="links">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#latest-alerts">Latest Alerts</a>
        <a href="#gallery">Gallery</a>
        <a href="#our-team">Our Team</a>
        <a href="#services">Services</a>
      </div>
    </div>
  );
};

export default Header;
