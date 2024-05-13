import ImgBlock from "./ImgBlock";
import "../styles/gallery.scss";

const Gallery = () => {
  const imagesTop = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
  ];

  return (
    <div className="gallery">
      <div className="gallery-top">
        <ImgBlock images={imagesTop} />
        <ImgBlock reverse images={imagesTop} />
      </div>
    </div>
  );
};

export default Gallery;
