
import CreationItem from "./CreationItem";

import "../styles/creation.scss";

const Creation = () => {

    const creationItemProps = [
        {
            image: '/images/gallery/fon.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse',
        },
        {
            image: '/images/gallery/fon.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        },
        {
            image: '/images/gallery/fon.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        },
        {
            image: '/images/gallery/fon.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        },
        {
            image: '/images/gallery/fon.png',
            progect: 'Dressx.',
            discr: 'Rethinking UI for Digital Metaverse'
        }
    ]
    return (
        <div className="section-creation">
            <div className="container">
                <div className="section-creation__block">
                    <h2 className="section-creation__title-black">From Concept to Creation:<br></br><span className="section-creation__title-grey">
                        full-Spectrum Creativity in One Place.</span>
                    </h2>
                    <div className="section-creation__gallery">
                        <CreationItem items={creationItemProps} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Creation