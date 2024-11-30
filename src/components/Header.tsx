import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faAt,
  faMobileScreenButton,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="flex flex-row  justify-around items-center my-3">
        <div>
          <Image
            src="/images/logo.png"
            alt="Sure Cash Back"
            width={125}
            height={60}
          />
        </div>
        <div className="m-0">
          <Image
            src="/images/ut_bi_pay.png"
            alt="Sure Cash Back"
            width={300}
            height={120}
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="m-0">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="text-green-aaa"
              size="xs"
            />{" "}
            &nbsp;
            <span className="text-green-600 font-extrabold text-green-900">91 98400 97531</span>
          </div>
          <div className="m-0">
            <FontAwesomeIcon icon={faAt} className="text-green-aaa font-bold" size="xs" />
            &nbsp;
            <span className="text-green-600 font-extrabold text-green-900">care@surecashback.com</span>
          </div>
          <div className="m-0">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-green-aaa"
              size="xs"
            />
            &nbsp;
            <span className="text-green-600 font-extrabold text-green-900">http://www.surecashback.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
