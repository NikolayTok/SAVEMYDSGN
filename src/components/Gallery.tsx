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
            <div className="upper-box">
                <ImgBlock images={imagesTop} rowClass="upper-row" />
                <ImgBlock images={imagesTop} rowClass="upper-row" />
            </div>
            <div className="lower-box" >
                <ImgBlock images={imagesBottom} rowClass="lower-row" />
                <ImgBlock images={imagesBottom} rowClass="lower-row" />
            </div>
        </div>
    );
};

export default Gallery;
