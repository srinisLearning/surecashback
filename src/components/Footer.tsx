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
      <div className="flex min-h-16 p-6 bg-green-aaa text-white justify-around items-center gap-4 rounded-t-3xl m-2">
        <div className="flex">
          <div className="flex gap-6 justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Good Lifes"
              width={100}
              height={75}
            />

            <Image
              src="/images/ubp_logo.png"
              alt="Good Lifes"
              width={100}
              height={75}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faFacebookF} size="xl" />
          <FontAwesomeIcon icon={faYoutube} size="xl" />
          <FontAwesomeIcon icon={faTwitter} size="xl" />
          <FontAwesomeIcon icon={faGooglePay} size="xl" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </div>
        <div className="flex">
          <Image
            src="/images/comodo_secure.png"
            alt="Good Lifes"
            width={125}
            height={75}
          />
        </div>
        <div className="flex">
          <ul className="flex flex-col gap-1">
            <li className="text-md uppercase">About Us</li>
            <li className="text-md uppercase">Help & Support</li>
            <li className="text-md uppercase">Terms & Conditions</li>
            <li className="text-md uppercase">FAQ</li>
            <li className="text-md uppercase">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
