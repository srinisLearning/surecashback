import { UserProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
 

const Profile = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;
  const userData = await currentUser();
   

  const email = userData?.emailAddresses[0]?.emailAddress;
 

  if (!isAuth) {
    redirect("/sign-in");
  }

  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col">
        <h3 className='flex justify-center text-green-600 text-2xl font-bold my-2 uppercase '>Profile Page</h3>
         
          <div className="flex justify-center flex-col gap-2 mx-auto   pb-36">
          
          <h1 className="text-xs">User Name : <span className="uppercase"> {userData?.firstName}</span> <span className="uppercase"> {userData?.lastName}</span></h1>
          <h1 className="text-xs">Email : {email}</h1>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Profile;
