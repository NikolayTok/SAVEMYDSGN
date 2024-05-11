
import CustomButton from "./CustomButton"

import "../styles/creationItem.scss";

interface CreationItemprops {
    image: string;
    progect: string;
    discr: string;
}

const CreationItem: React.FC<{ items: CreationItemprops[] }> = ({ items }) => {
    return (
        <div className="gallery-items">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="gallery-item">
                    <div className="gallery-item__btn-box">
                        <CustomButton
                            className="btn"
                            width="77px"
                            height="40px"
                            buttonText="Web3.0"
                            color="#0E0F10"
                            onClick={() => console.log("Button clicked")}
                        />
                        <CustomButton
                            width="105px"
                            height="40px"
                            color="#0E0F10"
                            buttonText="mobile app"
                            onClick={() => console.log("Button clicked")}
                        />
                        <CustomButton
                            width="42px"
                            height="40px"
                            color="#0E0F10"
                            buttonText="ux"
                            onClick={() => console.log("Button clicked")}
                        />
                    </div>
                    <p className="gallery-item__descr">
                        {item.progect}<span>{item.discr}
                        </span>
                    </p>
                    <div className="gallery-item__img-box">
                        <img src={item.image} alt={item.progect} />
                    </div>
                </div>
            ))}

        </div>
    )
}
export default CreationItem