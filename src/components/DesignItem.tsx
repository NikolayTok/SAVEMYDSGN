import Image from "../../node_modules/next/image";
import "../styles/designItem.scss";

interface DesignItemProps {
  image: string;
  icon: string;
  caption: string;
}

const DesignItem = ({ image, icon, caption }: DesignItemProps) => {
  return (
    <div
      className="design-item"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="design-item__icon">
        <Image
          src={icon}
          alt={caption}
          width={18}
          height={18}
        />
      </span>
      <p className="design-item__name">{caption}</p>
    </div>
  );
};

export default DesignItem;
