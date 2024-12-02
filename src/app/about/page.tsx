import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-row  justify-center items-center my-3">
        <div>
          <Image
            src="/images/about.jpg"
            alt="Sure Cash Back"
            width={300}
            height={150}
          />



        </div>

        <div>
          <p className="font-bold text-3xl flex justify-center align-middle text-green-600 p-3 pb-0">
            About Us
          </p>
          <div className="max-w-4xl flex flex-col justify-center mx-auto p-6">
            To make it easier and more convenient for customers, we offer a
            hassle-free way to pay utility bills right from the comfort of their
            own homes. . This solution is designed to simplify the process and
            save time, allowing users to manage essential bills for services
            like electricity, water, gas, and internet without any added stress.
            Our platform is user-friendly and prioritizes security, ensuring
            that every transaction is protected and reliable. Additionally, it
            supports multiple payment methods, allowing customers to choose what
            suits them best. It’s bill payment, simplified and streamlined.
            <p className="font-bold">
              Our USP is cashback for every transaction
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
