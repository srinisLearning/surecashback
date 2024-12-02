import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <div>
      <h3 className='flex justify-center text-green-600 text-2xl font-bold my-2 uppercase '>Contact</h3>
      </div>
      <div className="flex flex-row max-w-3xl mx-auto gap-3">
        <div className="mx-auto">
          <Image
            src="/images/about.jpg"
            alt="Sure Cash Back"
            width={400}
            height={400}
          />
        </div>

        <div className="flex  flex-col">
          For your queries contact
          <ul className="flex flex-col">
            <li className="py-6">
              <strong>Guna Deivanayagam </strong> - Chief Executive Officer 
              <br /> 91 98400 97531 - dgchatu@gmail.com
            </li>
            <li className="my-auto">
              <strong>Srini Ramaswamy</strong> - Technology Head <br /> 91 93810
              03591 - srini01@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
