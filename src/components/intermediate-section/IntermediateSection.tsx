import logoLeft from "../../assets/img/logo-left.png";

const IntermediateSection = () => {
  return (
    <div className="intermediate-section">
      <div className="top-content">
        <div className="left-side">
          <img src={logoLeft} alt="" />
        </div>
        <div className="right-side">
          <img
            src="https://framerusercontent.com/images/eyVbNkpxGSkkiiFF5um49IH00g.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="middle-content">
        <div className="squared-text">
          <p>
            Whether you're looking to enhance your defenses, respond to
            incidents swiftly, or stay ahead of emerging threats, our expert
            team is here to support you. With a focus on proactive strategies
            tailored to your business objectives, we're committed to
            safeguarding your digital assets and ensuring your peace of mind.
            Explore our services today and take the first step towards a more
            secure future.
          </p>
        </div>
      </div>

      <div className="bottom-content">
        <img
          src="https://framerusercontent.com/images/Sb4evMvJoM9VdhIwJzYeLK8IvI4.jpg"
          alt=""
        />
      </div>

      <div className="lower-text">
        <div className="text">
          <p>
            From comprehensive risk assessments to 24/7 monitoring and incident
            response, our team is equipped with the latest tools and expertise
            to protect your organization's critical assets. We understand that
            cybersecurity is not one-size-fits-all, which is why we offer
            customizable solutions to suit your unique needs. Partner with us to
            fortify your defenses and stay ahead of cyber threats in an
            ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntermediateSection;
