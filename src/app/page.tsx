import HomeComponent1 from "@/components/HomeComponent1";
import HomeComponent2 from "@/components/HomeComponent2";
import PayBillHome from "@/components/PayBillHome";
 
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="">
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-full min-h-screen mb-2"
      src="/images/home_1.png"
      alt="Good Lifes"      
      width={1280}
      height={610}
      priority
    />
  </div>
  <div className="mt-9">
    <HomeComponent1 />
  </div>
  <div className="border rounded-full shadow-2xl   m-6 mt-12 p-6 w-screen mx-auto bg-gradient-to-tr from-amber-200 to-yellow-400 max-w-6xl ">
    <h3 className="text-xl uppercase text-center font-semibold">Our Services</h3>
    
    <Link href='/paybill'>
    <PayBillHome />
    <button className="flex justify-center p-3 rounded-3xl mx-auto text-center bg-white text-green-600 uppercase">Pay Your Bills Now</button>
    </Link>
  </div>
  <div className="flex m-2 p-2">
 <HomeComponent2 />
  </div>
  <div className="flex m-2 p-2">
    <Image
      className=" w-screen"
      src="/images/home_4.png"
      alt="Good Lifes"      
      width={1200}
      height={400}
      priority
    />
  </div>
  

  
  
  
 

  </>
    
  );
}
