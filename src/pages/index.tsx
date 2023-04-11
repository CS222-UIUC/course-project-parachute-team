import { type NextPage } from "next";
import Navbar from "../components/Navbar";
import React from "react";
import { useElementMouseRelativeAngle } from "../utils/hooks";
import { signIn} from "next-auth/react";
// import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { angle, ref } = useElementMouseRelativeAngle();
  // const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center w-screen h-screen p-12 gap-16">
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[400px] gap-4">
          <div className="text-5xl font-bold">
            🪂
          </div>
          <div className="text-5xl font-bold">
            when2meet
          </div>
          <div className="text-6xl font-bold text-orange-elevated mt-[-4px]">
            Elevated
          </div>
          <div className="text-gray-500 mt-2">
            Open-source, easy-to-use, free forever
          </div>
        </div>
        <div
          ref={ref}
          className="w-full sm:max-w-[350px] h-[250px] bg-colorful rounded-[8px] p-[2px] drop-shadow-pink"
          style={{
            "--colorful-bg-degree": `${angle - 90}deg`,
          } as React.CSSProperties}
        >
          <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-[6px] p-8 gap-4">
            <div className="text-sm text-gray-500 mb-2">
              Try Parachute right now
            </div>            
            <button onClick={() => void signIn("google", { 
                          callbackUrl: `${window.location.origin}/dashboard`,
                  })} className="bg-black text-white text-center font-semibold rounded-lg w-full p-3">
              Sign in with Google
            </button>
            <button onClick={() => void signIn("auth0", { 
                          callbackUrl: `${window.location.origin}/dashboard`,
                  })} className="border text-center font-semibold rounded-lg w-full p-3">
              Sign in with Auth0
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;