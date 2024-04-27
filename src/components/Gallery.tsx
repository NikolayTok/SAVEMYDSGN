import ImgBlock from "./ImgBlock";
import "../styles/gallery.scss";

const Gallery = () => {
    const imagesTop = [
        "/images/imgBlock/image4.jpg",
        "/images/imgBlock/image2.jpg",
        "/images/imgBlock/image3.jpg",
    ];
    const imagesBottom = [
        "/images/imgBlock/image2.jpg",
        "/images/imgBlock/image1.jpg",
        "/images/imgBlock/image3.jpg",
        "/images/imgBlock/image4.jpg",
        
    ];

    return (
        <div className="gallery">
            <ImgBlock images={imagesTop} />
            <ImgBlock images={imagesBottom} />
        </div>
    );
};

export default Gallery;
