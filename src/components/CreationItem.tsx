import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
import AppButton from "./AppButton";

import "../styles/creation-item.scss";

interface CreationItemProps {
	image: string;
	name: string;
	details: string;
	projectId: string;
}

const CreationItem = ({
	image,
	name,
	details,
	projectId,
}: CreationItemProps) => {
	return (
		<div className='creation-item'>
			<div className='creation-item__btn-box'>
				<AppButton>web3.0</AppButton>
				<AppButton>mobil app</AppButton>
				<AppButton>ux</AppButton>
			</div>
			<Link href={`/projects/${projectId}`}>
				<p className='creation-item__description'>
					{name}
					<span>{details}</span>
				</p>
				<div className='creation-item__img-box'>
					<Image
						width={628}
						height={540}
						src={image}
						alt={name}
					/>
				</div>
			</Link>
		</div>
	);
};

export default CreationItem;
