import React from "react";
import OurStory from "../assets/story.png";
import OurMission from "../assets/mission.png";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about our story, our values, and our commitment <br /> to
          bringing you the best shopping experience.
        </p>
      </div>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
              src={OurMission}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to deliver quality products to your doorstep with a
              seamless and enjoyable shopping experience. We believe in creating
              value through innovation, transparency, and customer satisfaction.
              We aim to make online shopping easier, faster, and more
              personalized for our users.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
              src={OurStory}
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600">
              We started with a vision to revolutionize the way people shop
              online. From a small business, we have grown into a platform
              offering a vast range of products, all carefully curated to meet
              the needs of our customers. Over the years, we have stayed true to
              our core values of integrity, quality, and service.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We strive to provide the best experience for our customers. Here’s why
          shopping with Us is different:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Wide Selection of Products
            </h3>
            <p className="text-gray-600">
              From fashion to electronics, we offer a wide range of products to
              suit your every need.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Our competitive pricing ensures you get the best deals without
              compromising on quality.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast and Reliable Shipping
            </h3>
            <p className="text-gray-600">
              We ensure quick and reliable shipping so that your orders reach
              you in time.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Core Values
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At the heart of everything we do, our core values define us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Focus
            </h3>
            <p className="text-gray-600">
              We prioritize our customers' needs and work tirelessly to ensure
              their satisfaction.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Integrity
            </h3>
            <p className="text-gray-600">
              Honesty and transparency guide us in every interaction with our
              customers.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We are constantly evolving to stay ahead of trends and deliver the
              best shopping experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
