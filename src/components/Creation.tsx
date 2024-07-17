import CreationItems from "./CreationItems";
import { projects } from "../data/projects";

import "../styles/creation.scss";

const Creation = () => {
	const creationItems = projects.map((project) => ({
		image: project.images[5],
		name: project.name,
		details: project.details,
		projectId: project.id,
	}));

	return (
		<section className='creation'>
			<div className='container'>
				<div className='creation__block'>
					<h2 className='creation__title'>
						From Concept to Creation:
						<br />
						<span className='creation__title-grey'>
							full-Spectrum Creativity in One Place.
						</span>
					</h2>
					<CreationItems items={creationItems} />
				</div>
			</div>
		</section>
	);
};

export default Creation;
