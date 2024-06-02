import CreationItem from "./CreationItem";

import "../styles/creation-items.scss";

interface CreationItemProps {
	image: string;
	project: string;
	description: string;
}

const CreationItems: React.FC<{ items: CreationItemProps[] }> = ({ items }) => {
	return (
		<div className='creation-items'>
			{items.map((item, index) => (
				<CreationItem
					key={index}
					image={item.image}
					project={item.project}
					description={item.description}
				/>
			))}
		</div>
	);
};

export default CreationItems;
