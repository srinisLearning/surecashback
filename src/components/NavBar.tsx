import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const NavBar = async () => {
  const { userId } = await auth();
  return (
    <div className="flex justify-center items-center w-full mb-1 mx-auto bg-gradient-to-b from-amber-300 from-50% to-amber-600">
      <div className="rounded-xl text-white my-1">
        <ul className="flex justify-between py-4 px-6 gap-28 ">
          <div className="flex flex-row gap-10">
            <div>
              <Link href="/">
                <li className="text-lg uppercase font-bold">Home</li>
              </Link>
            </div>

            <div>
              {" "}
              <Link href="/paybill">
                <li className="text-lg uppercase font-bold text-zinc-600">Bill Pay</li>
              </Link>
            </div>

            <div>
              <Link href="/">
                <li className="text-lg uppercase font-bold">Contact</li>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-4   justify-end">
              {!userId ? (
                <>
                  <Link href="/sign-in">
                    <li className="text-lg uppercase font-bold">Login</li>
                  </Link>
                  <Link href="/sign-up">
                    <li className="text-lg uppercase font-bold">Register</li>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/profile">
                    <li className="text-sm uppercase font-boldr">Profile</li>
                  </Link>
                  <li className="flex items-center text-slate-900">
                    <UserButton />
                  </li>
                </>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
