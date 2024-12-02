import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons/faGooglePay";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex min-h-16 p-6 bg-gradient-to-b from-red-500 to-orange-500 text-white justify-around items-center gap-4 rounded-t-3xl m-2">
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
        <div className="flex gap-9 text-zinc-600">
          <div className="flex justify-center ">
            <ul className="flex flex-col gap-2">
              <Link href="/about">
                <li className="text-sm uppercase text-white">About Us</li>
              </Link>
              <Link href="/paybill">
                <li className="text-sm uppercase text-white">Pay Bill</li>
              </Link>
              <Link href="/contact">
                <li className="text-sm uppercase text-white">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-col gap-2">
              <Link href="/terms">
                <li className="text-sm uppercase text-white">
                  Terms & Conditions
                </li>
              </Link>
              <Link href="/refunds">
              <li className="text-sm uppercase text-white">
                 Refunds
              </li>
              </Link>
              <Link href="/privacy-policy">
                <li className="text-sm uppercase text-white">Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle gap-6 text-white">
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
