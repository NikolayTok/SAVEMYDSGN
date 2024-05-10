import "../styles/designItem.scss";

interface DesignItemProps {
    image: string;
    icon: string;
    caption: string;
}

const DesignItem: React.FC<{ items: DesignItemProps[] }> = ({ items }) => {
    return (
        <div className="design-items">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="design-items__item"
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <span className="design-item__icon">
                        <img
                            src={item.icon}
                            alt="icon"
                        />
                    </span>
                    <p className="design-item__name">{item.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default DesignItem;
