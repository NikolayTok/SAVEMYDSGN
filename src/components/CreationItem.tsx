import Image from "../../node_modules/next/image";
import AppButton from "./AppButton";
import "../styles/creationItem.scss";

interface CreationItemProps {
  image: string;
  project: string;
  description: string;
}

const CreationItem = ({ image, project, description }: CreationItemProps) => {
  return (
    <div className='creation-item'>
      <div className='creation-item__btn-box'>
        <AppButton>web3.0</AppButton>
        <AppButton>mobil app</AppButton>
        <AppButton>ux</AppButton>
      </div>
      <p className='creation-item__description'>
        {project}
        <span>{description}</span>
      </p>
      <div className='creation-item__img-box'>
        <Image
          width={628}
          height={540}
          src={image}
          alt={project}
        />
      </div>
    </div>
  );
};

export default CreationItem;
