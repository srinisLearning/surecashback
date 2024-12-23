"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
import emipng from "/public/images/png/emi.png";
import creditcardpng from "/public/images/png/creditcard.png";
 
import dthpng from "/public/images/png/dth.png";

 

const data = [
  {
    id: 1,
    href: "/ccpay",
    iconSrc: creditcardpng,
    iconAlt: "icon",
    text: "Credit Card",
  },
 
  {
    id: 2,
    href: "/emipay",
    iconSrc: emipng,
    iconAlt: "icon",
    text: "EMI",
  },
   
 
];

const LoanLinks = () => {
  const pathName = usePathname();

  return (
    <>
      
    <div className="flex gap-8 p-4">
      {data.map(({ id, href, iconSrc, iconAlt, text }) => (
     
          <span className="icon">
          
            <Image src={iconSrc} alt={iconAlt} width= {75}  height={75} className='text-green-bbb' />
            <span className="text-green-950 text-xs font-semibold uppercase flex justify-center gap-2">{text}</span>
          </span>
          
       
      ))}
    </div>
    </>
  );
};

export default LoanLinks;
