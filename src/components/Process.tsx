import React from "react";
import "../styles/process.scss";
import ProcessItem from "./processItem";

const Process = () => {
    return (
        <div className="process">
            <div className="process__block">
                <div className="process__title-box">
                    <h2 className="process__title">
                        You ideas</h2>
                    <img
                        src="/images/gallery/icons/icon4.svg"
                        alt="icon"
                    />
                    <h2 className="process__title">
                        our designs</h2>
                        <img
                            src="/images/gallery/icons/icon4.svg"
                            alt="icon"
                        />
                    
                </div>
                <h3 className="process__sub-title">
                    Navigating the creative process
                </h3>
                <div className="process__list">
                    <ProcessItem
                        image="/images/gallery/process/img2.jpg"
                        icon="/images/gallery/icons/icon1.svg"
                        title="Let design magic flow"
                        text="Join by subscribing to a plan and unleash unlimited design magic specifically tailored just for you"
                    />
                    <ProcessItem
                        image="/images/gallery/process/img1.jpg"
                        icon="/images/gallery/icons/icon2.svg"
                        title="Fast designs, mon->Fri"
                        text="Expect your masterpiece in a few 
                        business days, Mon-Fri – as quick 
                        as a creative breeze."
                    />
                    <ProcessItem
                        image="/images/gallery/process/img3.jpg"
                        icon="/images/gallery/icons/icon3.svg"
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
