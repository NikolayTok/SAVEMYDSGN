import React from "react";
import StagesItem from "./StagesItem";

import "../styles/stages.scss";


const Stages = () => {
    return (
        <section className="stages">
            <div className="stages__block">
                <div className="stages__title-box">
                    <h2 className="stages__title">
                        You ideas<span><img
                            src="/images/gallery/icons/icon-light.svg"
                            alt="icon"
                        /></span>our designs<span><img
                            src="/images/gallery/icons/icon-diamond.svg"
                            alt="icon"
                        /></span></h2>
                </div>
                <h3 className="stages__sub-title">
                    Navigating the creative stages
                </h3>
                <div className="stages__list">
                    <StagesItem
                        image="/images/gallery/stages/design-magic.jpg"
                        icon="/images/gallery/icons/icon-step1.svg"
                        title="Let design magic flow"
                        text="Join by subscribing to a plan and unleash unlimited design magic specifically tailored just for you"
                    />
                    <StagesItem
                        image="/images/gallery/stages/fast-designs.jpg"
                        icon="/images/gallery/icons/icon-step2.svg"
                        title="Fast designs, mon->Fri"
                        text="Expect your masterpiece in a few 
                        business days, Mon-Fri – as quick 
                        as a creative breeze."
                    />
                    <StagesItem
                        image="/images/gallery/stages/high-quality.jpg"
                        icon="/images/gallery/icons/icon-step3.svg"
                        title="Expect high quality output"
                        text="Let's collaborate to refine your designs 
                        until they mirror your unique vision, all 
                        backed by our guarantee."
                    />

                </div>
            </div>
        </section>
    );
};

export default Stages;
