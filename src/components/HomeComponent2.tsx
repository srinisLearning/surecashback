import React from 'react'
import Image from 'next/image'

const HomeComponent2 = () => {
  return (
    <div className="flex flex-row  justify-center items-center my-3 max-w-6xl mx-auto">
       

        <div>
           
          <div className="max-w-4xl flex flex-col justify-center mx-auto p-6 text-xl text-justify">
            To make it easier and more convenient for customers, we offer a
            hassle-free way to pay utility bills right from the comfort of their
            own homes. . This solution is designed to simplify the process and
            save time, allowing users to manage essential bills for services
            like electricity, water, gas, and internet without any added stress.
            Our platform is user-friendly and prioritizes security, ensuring
            that every transaction is protected and reliable. Additionally, it
            supports multiple payment methods, allowing customers to choose what
            suits them best. It’s bill payment, simplified and streamlined.
            <p className="font-bold text-green-600 italic">
              Our USP is cashback for every transaction
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/home_about.png"
            alt="Sure Cash Back"
            width={600}
            height={300}
          />



        </div>
      </div>
  )
}

export default HomeComponent2