import React from "react";
import AboutUs from "../Components/AboutComponenet/AboutUs";
import OurMembers from "../Components/AboutComponenet/OurMemebers";
import WhyUs from "../Components/SearchPageComponents/WhyUs";
import ContactForm from "../Components/AboutComponenet/ContactForm";
import Performence from "../Components/AboutComponenet/Performence";
import Footer from '../Components/Footer';

const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <OurMembers />
      <div className="mt-4">
        <WhyUs />
      </div>
      <div className="mt-4">
      <Performence />
      </div>
      <div className="flex justify-center align-center">
        <span class="text-4xl font-bold text-center text-blue-800 mb-4">Want To Connect </span>{" "}
        <span class="text-4xl font-bold text-center text-gray-800 mb-4"> Fill In This</span>
      </div>
      <div className="flex items-center justify-center">
        <ContactForm />
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
