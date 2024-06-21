import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { projects, Project } from "../data/projects";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";

import "../styles/project.scss";

interface ProjectPageProps {
	project: Project | null;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader style={{height: '100vh'}} />
	}

	if (!project) {
		return (
				<div>Project not found</div>
		);
	}

	return (
			<section className='project'>
				<div className='project__pictures-wrapper'>
					<BackButton />
					<div className='project__picture-box'>
						<Image
							src={project.images[0]}
							alt='project-img-1'
							width={1392}
							height={640}
						/>
					</div>
					<div className='project__content'>
						<div className='project__content-box'>
							<h2 className='project__content-title'>{project.title}</h2>
							<p className='project__content-subtitle'>{project.description}</p>
						</div>
					</div>
					<div className='project__picture-box'>
						<Image
							src={project.images[1]}
							alt='project-img-1'
							width={1392}
							height={255}
						/>
					</div>
					<div className='project__picture-box'>
						<Image
							src={project.images[2]}
							alt='project-img-1'
							width={1392}
							height={255}
						/>
					</div>
					<div className='project__picture-box'>
						<Image
							src={project.images[3]}
							alt='project-img-1'
							width={1392}
							height={255}
						/>
					</div>
					<div className='project__two-squares'>
						<div className='project__picture-box'>
							<Image
								src={project.images[4]}
								alt='project-img-1'
								width={1392}
								height={255}
							/>
						</div>
						<div className='project__picture-box'>
							<Image
								src={project.images[5]}
								alt='project-img-1'
								width={1392}
								height={255}
							/>
						</div>
					</div>
					<div className='project__picture-box'>
						<Image
							src={project.images[6]}
							alt='project-img-1'
							width={1392}
							height={255}
						/>
					</div>
				</div>
			</section>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = projects.map((project) => ({
		params: { projectId: project.id },
	}));

	return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
	params,
}) => {
	const projectId = params?.projectId as string;
	const project = projects.find((p) => p.id === projectId) || null;

	return {
		props: {
			project,
		},
	};
};

export default ProjectPage;
