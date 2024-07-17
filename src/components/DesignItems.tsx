import DesignItem from "./DesignItem";

import "../styles/design-items.scss";

interface DesignItemsProps {
  image: string;
  icon: string;
  caption: string;
}

const DesignItems: React.FC<{ items: DesignItemsProps[] }> = ({ items }) => {
  return (
    <div className="design-items">
      {items.map((item, index) => (
        <DesignItem
          key={index}
          image={item.image}
          icon={item.icon}
          caption={item.caption}
        />
      ))}
    </div>
  );
};

export default DesignItems;
