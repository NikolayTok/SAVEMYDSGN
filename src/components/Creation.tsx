import CreationItem from "./CreationItem";
import "../styles/creation.scss";

const Creation = () => {

    const creationItems = [
        {
            image: '/images/gallery/background-graphic.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse',
        },
        {
            image: '/images/gallery/background-graphic.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        },
        {
            image: '/images/gallery/background-graphic.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        },
        {
            image: '/images/gallery/background-graphic.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        },
        {
            image: '/images/gallery/background-graphic.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        }
    ]

    return (
        <section className="creation">
            <div className="container">
                <div className="creation__block">
                    <h2 className="creation__title-black">From Concept to Creation:<br></br><span className="creation__title-grey">
                        full-Spectrum Creativity in One Place.</span>
                    </h2>
                    <CreationItem items={creationItems} />
                </div>
            </div>
        </section>
    )
}

export default Creation