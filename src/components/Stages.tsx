import React from "react";
import StagesItem from "./StagesItem";

import "../styles/stages.scss";

const Stages = () => {
  return (
    <section className="stages">
        <div className="stages__wrapper">
          <div className="stages__title-box">
            <h2 className="stages__title  title">
              You ideas<span className="stages__title__span-idea">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_1_265)">
                    <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.1" />
                    <circle cx="32" cy="32" r="31.5" stroke="white" strokeOpacity="0.12" />
                  </g>
                  <g clipPath="url(#clip0_1_265)">
                    <path d="M34.5 44H28.5C27.948 44 27.5 43.552 27.5 43C27.5 42.448 27.948 42 28.5 42H34.5C35.052 42 35.5 42.448 35.5 43C35.5 43.552 35.052 44 34.5 44Z" fill="white" />
                    <path d="M31.5 20.6093C30.948 20.6093 30.5 20.1613 30.5 19.6093V17C30.5 16.448 30.948 16 31.5 16C32.052 16 32.5 16.448 32.5 17V19.6093C32.5 20.1613 32.052 20.6093 31.5 20.6093Z" fill="white" />
                    <path d="M40.2613 24.2387C40.0053 24.2387 39.7493 24.1413 39.5547 23.9453C39.164 23.5547 39.164 22.9213 39.5547 22.5307L41.4 20.6853C41.7907 20.2947 42.424 20.2947 42.8147 20.6853C43.2053 21.076 43.2053 21.7093 42.8147 22.1L40.9693 23.9453C40.7733 24.14 40.5173 24.2387 40.2613 24.2387Z" fill="white" />
                    <path d="M46.5 33H43.8907C43.3387 33 42.8907 32.552 42.8907 32C42.8907 31.448 43.3387 31 43.8907 31H46.5C47.052 31 47.5 31.448 47.5 32C47.5 32.552 47.052 33 46.5 33Z" fill="white" />
                    <path d="M42.1067 43.6066C41.8507 43.6066 41.5947 43.5093 41.4 43.3133L39.5547 41.4679C39.164 41.0773 39.164 40.4439 39.5547 40.0533C39.9453 39.6626 40.5787 39.6626 40.9693 40.0533L42.8147 41.8986C43.2053 42.2893 43.2053 42.9226 42.8147 43.3133C42.6187 43.5093 42.3627 43.6066 42.1067 43.6066Z" fill="white" />
                    <path d="M20.8933 43.6066C20.6373 43.6066 20.3813 43.5093 20.1867 43.3133C19.796 42.9226 19.796 42.2893 20.1867 41.8986L22.032 40.0533C22.4227 39.6626 23.056 39.6626 23.4467 40.0533C23.8373 40.4439 23.8373 41.0773 23.4467 41.4679L21.6013 43.3133C21.4053 43.5093 21.1493 43.6066 20.8933 43.6066Z" fill="white" />
                    <path d="M19.1093 33H16.5C15.948 33 15.5 32.552 15.5 32C15.5 31.448 15.948 31 16.5 31H19.1093C19.6613 31 20.1093 31.448 20.1093 32C20.1093 32.552 19.6613 33 19.1093 33Z" fill="white" />
                    <path d="M22.7387 24.2387C22.4827 24.2387 22.2267 24.1413 22.032 23.9453L20.1867 22.1C19.796 21.7093 19.796 21.076 20.1867 20.6853C20.5773 20.2947 21.2107 20.2947 21.6013 20.6853L23.4467 22.5307C23.8373 22.9213 23.8373 23.5547 23.4467 23.9453C23.2493 24.14 22.9947 24.2387 22.7387 24.2387Z" fill="white" />
                    <path d="M36.5007 32.6667C35.9487 32.6667 35.5007 32.2187 35.5007 31.6667C35.5007 29.644 33.8567 28 31.834 28C31.282 28 30.834 27.552 30.834 27C30.834 26.448 31.282 26 31.834 26C34.958 26 37.5007 28.5427 37.5007 31.6667C37.5007 32.2187 37.0527 32.6667 36.5007 32.6667Z" fill="white" />
                    <path d="M33.1671 48H29.8337C28.7097 48 27.5004 47.1466 27.5004 45.2746V42.9226C27.5004 41.508 26.8977 40.2093 25.8884 39.4493C22.9751 37.256 21.6271 33.648 22.3697 30.0333C23.0964 26.492 25.9617 23.616 29.4991 22.876C32.3111 22.2853 35.1897 22.9693 37.3844 24.7533C39.5764 26.5346 40.8337 29.176 40.8337 32C40.8337 34.8773 39.5337 37.548 37.2671 39.3306C36.1444 40.2133 35.5004 41.4426 35.5004 42.7026V45.6666C35.5004 46.9533 34.4537 48 33.1671 48ZM31.4817 24.6693C30.9591 24.6693 30.4324 24.724 29.9057 24.8333C27.1377 25.412 24.8964 27.6626 24.3271 30.4346C23.7417 33.284 24.8004 36.1266 27.0897 37.8506C28.5977 38.9866 29.4991 40.8826 29.4991 42.9226V45.2746C29.4991 45.396 29.5151 46 29.8324 46H33.1657C33.3497 46 33.4991 45.8506 33.4991 45.6666V42.7026C33.4991 40.824 34.4217 39.0226 36.0297 37.7573C37.8124 36.3573 38.8337 34.2586 38.8337 32C38.8337 29.7813 37.8444 27.7053 36.1217 26.3053C34.8044 25.236 33.1711 24.6693 31.4817 24.6693Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_b_1_265" x="-60" y="-60" width="184" height="184" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="30" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_265" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_265" result="shape" />
                    </filter>
                    <clipPath id="clip0_1_265">
                      <rect width="32" height="32" fill="white" transform="translate(15.5 16)" />
                    </clipPath>
                  </defs>
                </svg>
              </span> our designs<span className="stages__title__span-design">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.1" />
                  <circle cx="32" cy="32" r="31.5" stroke="white" strokeOpacity="0.12" />
                  <path d="M24.0513 22.5483C24.4413 22.1026 25.0047 21.8469 25.597 21.8469H37.212C37.8042 21.8469 38.3677 22.1026 38.7577 22.5483L43.6611 28.1522C44.3552 28.9455 44.3363 30.1356 43.6168 30.9062L31.4045 43.9908L19.1921 30.9062C18.4728 30.1356 18.4537 28.9455 19.1479 28.1522L24.0513 22.5483Z" stroke="white" strokeWidth="1.54045" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M37.1813 29.5492L31.4046 43.9908L25.6278 29.5492L31.4046 21.8469L37.1813 29.5492Z" stroke="white" strokeWidth="1.54045" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.0809 29.3567H43.7283" stroke="white" strokeWidth="1.54045" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </h2>
          </div>
          <p className="stages__sub-title subtitle">
            Navigating the creative stages
          </p>
          <div className="stages__list">
            <StagesItem
              image="/images/stages/design-magic.jpg"
              icon="/images/icons/icon-step1.svg"
              title="Let design magic flow"
              text="Join by subscribing to a plan and unleash unlimited design magic specifically tailored just for you"
            />
            <StagesItem
              image="/images/stages/fast-designs.jpg"
              icon="/images/icons/icon-step2.svg"
              title="Fast designs, mon->Fri"
              text="Expect your masterpiece in a few  business days, Mon-Fri – as quick as a creative breeze."
            />
            <StagesItem
              image="/images/stages/high-quality.jpg"
              icon="/images/icons/icon-step3.svg"
              title="Expect high quality output"
              text="Let's collaborate to refine your designs until they mirror your unique vision, allbacked by our guarantee."
            />
          </div>
        </div>
    </section>
  );
};

export default Stages;
