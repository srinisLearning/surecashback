import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons/faGooglePay";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Footer = () => {
  return (
    <>
      <div className="flex min-h-16 p-6 bg-gradient-to-t from-amber-200 from-50% to-amber-800 text-white justify-around items-center gap-4 rounded-t-3xl m-2">
        <div className="flex">
          <div className="flex gap-6 justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Sure Cash Back"
              width={100}
              height={75}
            />

            <Image
              src="/images/ut_bi_pay.png"
              alt="Sure Cash Back"
              width={250}
              height={100}
            />
          </div>
        </div>
        <div className="flex gap-9">
           
            <div className='flex justify-center'>
            <ul className="flex flex-col gap-1">
            <li className="text-md uppercase">About Us</li>
            <li className="text-md uppercase">Help & Support</li>
            <li className="text-md uppercase">Terms & Conditions</li>
            </ul>
              </div>
              <div className='flex justify-center'>
              <ul className="flex flex-col gap-1"> 
            <li className="text-md uppercase">FAQ</li>
            <li className="text-md uppercase">Returns & Refunds</li>
            <li className="text-md uppercase">Privacy Policy</li>
          </ul>
              </div>
           
        </div>
        <div className="flex flex-col justify-center align-middle gap-6">
          <div className="flex gap-6">
          <FontAwesomeIcon icon={faFacebookF} size="xl" />
          <FontAwesomeIcon icon={faYoutube} size="xl" />
          <FontAwesomeIcon icon={faTwitter} size="xl" />          
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
           
          </div>
          <div className="flex justify-center">
          <Image
            src="/images/comodo_secure.png"
            alt="Sure Cash Back"
            width={125}
            height={75}
          />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Footer;
