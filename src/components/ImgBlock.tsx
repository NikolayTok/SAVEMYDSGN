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
                        style={{ width: index % 2 === 0 ? "290px" : "420px" }}
                        width={420}
                        height={300}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImgBlock;
