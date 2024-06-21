import CreationItem from "./CreationItem";

import "../styles/creation-items.scss";

interface CreationItemProps {
	image: string;
	name: string;
	details: string;
	projectId: string;
}

const CreationItems: React.FC<{ items: CreationItemProps[] }> = ({ items }) => {
	return (
		<div className='creation-items'>
			{items.map((item, index) => (
				<CreationItem
					key={index}
					image={item.image}
					name={item.name}
					details={item.details}
					projectId={item.projectId}
				/>
			))}
		</div>
	);
};

export default CreationItems;
