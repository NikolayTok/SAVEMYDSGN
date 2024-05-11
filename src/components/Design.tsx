
import DesignItem from "./DesignItem";

import "../styles/design.scss";

const Design = () => {

    const designItemsProps = [
        {
            image: '/images/gallery/fon.jpg',
            icon: '/images/gallery/vector.svg',
            caption: 'Landing page'
        },
        {
            image: '/images/gallery/fon.jpg',
            icon: '/images/gallery/bell.svg',
            caption: 'Multipages'
        },
        {
            image: '/images/gallery/fon.jpg',
            icon: '/images/gallery/bomb.svg',
            caption: 'Mobile App'
        },
        {
            image: '/images/gallery/fon.jpg',
            icon: '/images/gallery/shopping.svg',
            caption: 'Pitch Deck'
        },
        {
            image: '/images/gallery/fon.jpg',
            icon: '/images/gallery/account.svg',
            caption: 'Online Stores'
        },
        {
            image: '/images/gallery/fon.jpg',
            icon: '/images/gallery/camera-enhance.svg',
            caption: 'Web3 / Crypto'
        },
    ]
    return (
        <div className="section-design">
            <div className="container">
                <div className="section-design__box">
                    <div className="section-design__info">
                        <h2 className="section-design__title">
                            We do everything on web & mobile design
                        </h2>
                        <p className="section-design__text">
                            From wireframes to final designs, we craft web and
                            mobile experiences that captivate and convert. Your
                            vision, amplified by our expertise, ready to make a
                            lasting impact.
                        </p>
                        <button>
                            Discuss the project
                            <img src="../images/gallery/arrow-right-circle.svg" alt="" />
                        </button>

                    </div>
                    <DesignItem items={designItemsProps} />
                </div>
            </div>
        </div>
    );
};

export default Design;
