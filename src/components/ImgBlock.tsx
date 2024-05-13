import Image from "next/image";
import "../styles/image-list.scss";

interface ImgBlockProps {
  images: string[];
  reverse?: boolean;
}

const ImgBlock = ({ images, reverse }: ImgBlockProps) => {

  const computedWidth = (index: number) => {
    return index % 2 === 0 ? 290 : 420
  }
  
  return (
    <div className={reverse ? 'image-list-reverse' : 'image-list'}>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-list__item"

        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={computedWidth(index)}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default ImgBlock;
