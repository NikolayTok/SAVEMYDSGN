import Image from "next/image";


interface ImgBlockProps {
    images: string[];
}

const ImgBlock = ({images}: ImgBlockProps) => {
    return (
        <div className="wrapper">
            {images.map((imageUrl, index) => (
                <div
                    key={index}
                    className="item"  
                >
                    <Image
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        width={380}
                        height={250}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImgBlock;
