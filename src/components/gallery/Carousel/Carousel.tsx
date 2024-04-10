import { FC } from "react";
import Flickity from "react-flickity-component";

const flickityOptions = {
  groupCells: 3,
  contain: true,
  pageDots: false,
  prevNextButtons: true,
  freeScroll: false,
};

interface Props {
  images: string[];
}

const Carousel: FC<Props> = ({ images }) => {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {images.map((image) => (
        <img key={image} src={image} alt="" />
      ))}
    </Flickity>
  );
};

export default Carousel;
