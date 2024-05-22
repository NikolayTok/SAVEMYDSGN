import ImgBlock from "./ImgBlock";
import "../styles/gallery.scss";

const Gallery = () => {
  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
  ];

  return (
    <div className="gallery">
      <div className="gallery__content">
        <ImgBlock images={images} />
        <ImgBlock reverse images={images} />
      </div>
    </div>
  );
};

export default Gallery;
