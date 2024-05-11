import React from "react";

import Gallery from "@/components/Gallery";
import CustomButton from "@/components/CustomButton";
import Creation from "@/components/Creation";

import "../styles/home.scss";

const Home = () => {
    return (
        <section className="hero">
            <h1 className="hero__title">
                Subscribing to your creative journey
            </h1>
            <span className="hero__sub-title">
                Your monthly pass to design joy
            </span>
            <Gallery />
            <div className="hero__button">
                <CustomButton
                    width="244px"
                    height="60px"
                    color="#0E0F10"
                    buttonText="Book a FREE strategy call"
                    onClick={() => console.log("Button clicked")}
                />
            </div>
            <Creation/>
        </section>
    );
};

export default Home;
