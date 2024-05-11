import React from "react";
import ProcessItem from "./processItem";

import "../styles/process.scss";

const Process = () => {
    return (
        <div className="stages">
            <div className="stages__block">
                <div className="stages__title-box">
                    <h2 className="stages__title">
                        You ideas</h2>
                    <img
                        src="/images/gallery/icons/icon-light.svg"
                        alt="icon"
                    />
                    <h2 className="stages__title">
                        our designs</h2>
                        <img
                            src="/images/gallery/icons/icon-diamond.svg"
                            alt="icon"
                        />
                    
                </div>
                <h3 className="stages__sub-title">
                    Navigating the creative stages
                </h3>
                <div className="stages__list">
                    <ProcessItem
                        image="/images/gallery/stages/img2.jpg"
                        icon="/images/gallery/icons/icon-step1.svg"
                        title="Let design magic flow"
                        text="Join by subscribing to a plan and unleash unlimited design magic specifically tailored just for you"
                    />
                    <ProcessItem
                        image="/images/gallery/stages/img1.jpg"
                        icon="/images/gallery/icons/icon-step2.svg"
                        title="Fast designs, mon->Fri"
                        text="Expect your masterpiece in a few 
                        business days, Mon-Fri – as quick 
                        as a creative breeze."
                    />
                    <ProcessItem
                        image="/images/gallery/stages/img3.jpg"
                        icon="/images/gallery/icons/icon-step3.svg"
                        title="Expect high quality output"
                        text="Let's collaborate to refine your designs 
                        until they mirror your unique vision, all 
                        backed by our guarantee."
                    />
                </div>
            </div>
        </div>
    );
};

export default Process;
