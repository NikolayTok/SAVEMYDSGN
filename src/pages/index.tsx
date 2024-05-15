import React from "react";
import Design from "@/components/Design";
import Gallery from '@/components/Gallery';
import Stages from '@/components/Stages';
import Creation from "@/components/Creation";
import BookDemo from "@/components/BookDemo";
import Faqs from "@/components/Faqs";

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
      <Stages />
      <Creation/>
      <Design />
      <BookDemo />
      <Faqs />
    </section>
  );
};

export default Home;
