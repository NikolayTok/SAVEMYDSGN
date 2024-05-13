import AppButton from "./AppButton";

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
                        <AppButton>web3.0</AppButton>
                        <AppButton>mobil app</AppButton>
                        <AppButton>ux</AppButton>
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