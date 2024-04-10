import Carousel from "./Carousel/Carousel";

const Gallery = () => {
  const images = [
    "https://framerusercontent.com/images/XkqnZwXZw3FJDxomPvVwntreQ.jpg",
    "https://framerusercontent.com/images/W8I2eXFLbN89UHu8HgagYB5118.jpg",
    "https://framerusercontent.com/images/cubbNAZgnvRpH0XqdBSnDyauTw.jpg",
    "https://framerusercontent.com/images/cuaPtHmnxLJJIdA0Mp52WKW3pA8.jpg",
  ];
  
  return (
    <div className="gallery" id="gallery">
      <div className="top-content">
        <div className="text">
          <h2>GALLERY</h2>
        </div>
        <div className="banner-text">
          <p>
            In this section, we can see images related to <br />
            cybersecurity.
          </p>
        </div>
      </div>
      <Carousel images={images}></Carousel>
    </div>
  );
};

export default Gallery;
