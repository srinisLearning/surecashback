import React from 'react'
import PayBillComponent from  '@/components/PayBill'
import Image from 'next/image'
 

const PayBillPage = () => {
  return (
     <>
     <h3 className='flex justify-center text-green-600 text-2xl font-black my-2 uppercase '>Bill Pay</h3>
   
      <PayBillComponent/>
      
      <div className="my-8 py-8">
  
   
  </div>
     </>
  )
}

export default PayBillPage