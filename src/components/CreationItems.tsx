import CreationItem from "./CreationItem";

import "../styles/creationItems.scss";

interface CreationItemProps {
  image: string;
  progect: string;
  discr: string;
}

const CreationItems: React.FC<{ items: CreationItemProps[] }> = ({ items }) => {
  return (
    <div className="creation-items">
      {items.map((item, index) => (
        <CreationItem
          key={index}
          image={item.image}
          progect={item.progect}
          discr={item.discr}
        />
      ))}
    </div>
  )
}

export default CreationItems