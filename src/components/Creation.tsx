import CreationItems from "./CreationItems";

import "../styles/creation.scss";

const Creation = () => {
	const creationItems = [
		{
			image: "/images/background-graphic.png",
			project: "Dressx.",
			description: "Rethinking UI for Digital Metaverse",
		},
		{
			image: "/images/background-graphic.png",
			project: "Dressx.",
			description: "Rethinking UI for Digital Metaverse",
		},
		{
			image: "/images/background-graphic.png",
			project: "Dressx.",
			description: "Rethinking UI for Digital Metaverse",
		},
		{
			image: "/images/background-graphic.png",
			project: "Dressx.",
			description: "Rethinking UI for Digital Metaverse",
		},
		{
			image: "/images/background-graphic.png",
			project: "Dressx.",
			description: "Rethinking UI for Digital Metaverse",
		},
	];

	return (
		<section className='creation'>
			<div className='container'>
				<div className='creation__block'>
					<h2 className='creation__title-black'>
						From Concept to Creation:<br></br>
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
