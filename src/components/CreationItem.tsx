import Image from "../../node_modules/next/image";
import AppButton from "./AppButton";

import "../styles/creationItem.scss";

interface CreationItemProps {
  image: string;
  progect: string;
  discr: string;
}

const CreationItem = ({ image, progect, discr }: CreationItemProps) => {
  return (
    <div className="creation-item">    
        <div className="creation-item__btn-box">
          <AppButton>web3.0</AppButton>
          <AppButton>mobil app</AppButton>
          <AppButton>ux</AppButton>
        </div>
        <p className="creation-item__descr">
          {progect}<span>{discr}
          </span>
        </p>
        <div className="creation-item__img-box">
          <Image
            width={628}
            height={540}
            src={image}
            alt={progect}
          />
        </div>
    </div>
  )
}
export default CreationItem