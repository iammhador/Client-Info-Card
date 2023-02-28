import React, { useEffect } from "react";
import Aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      data-aos="fade-down-right"
      className="bg-black px-8 md:px-12 lg:px-20 py-10 md:14 lg:py-20"
    >
      <h2 className="text-white text-xl md:text-2xl lg:text-5xl font-bold text-center uppercase mb-7">
        About us
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-gray-300 font-normal text-justify">
        Welcome to our custom NFC card design page! We are dedicated to
        providing our customers with the highest quality NFC cards and services.
        Our team of experts has experience in the industry, and we are dedicated
        to creating custom solutions that meet the unique needs of each of our
        clients. We understand the importance of security and efficiency in
        today's business world, and our NFC cards and systems are designed to
        improve both for your business. We offer a wide range of services
        including custom card designs, encoding and programming, and even card
        printing. Our state-of-the-art equipment allows us to create highly
        detailed and unique designs for our clients, making sure their cards
        stand out from the rest. Our commitment to customer service is second to
        none. We work closely with our clients to understand their specific
        requirements and ensure their satisfaction with the final product. We
        strive to build long-lasting relationships with our clients, and we are
        always available to answer any questions or concerns they may have.
        Thank you for considering our business. We look forward to the
        opportunity to work with you and help your business succeed with the
        power of NFC technology.
      </p>
    </div>
  );
};

export default AboutUs;
