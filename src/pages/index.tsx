import React from "react";
import "../styles/home.scss";

import Gallery from "@/components/Gallery";
import CustomButton from "@/components/CustomButton";

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
            <div className="hero__button">
                <CustomButton
                    width="77px"
                    height="40px"
                    color="#660000"
                    buttonText="Web3.0"
                    onClick={() => console.log("Button clicked")}
                />
                <CustomButton
                    width="105px"
                    height="40px"
                    color="#003333"
                    buttonText="mobile app"
                    onClick={() => console.log("Button clicked")}
                />
                <CustomButton
                    width="42px"
                    height="40px"
                    color="#000066"
                    buttonText="ux"
                    onClick={() => console.log("Button clicked")}
                />
            </div>

        </section>
    );
};

export default Home;
