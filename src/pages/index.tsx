import { type NextPage } from "next";
import Navbar from "../components/section/Navbar";
import React from "react";
import { useElementMouseRelativeAngle } from "../utils/hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  Auth0LoginButton,
  GoogleLoginButton,
} from "../components/ui/LoginButton";
import Footer from "../components/section/Footer";

const Home: NextPage = () => {
  const { angle, ref } = useElementMouseRelativeAngle();
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    void router.replace("/dashboard");
    return <div>Redirecting...</div>;
  }

  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="flex w-screen grow flex-col items-center justify-center gap-16 p-12 md:flex-row xl:gap-32">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[300px] md:items-start">
          <div className="text-5xl font-bold">🪂</div>
          <div className="text-5xl font-bold">when2meet</div>
          <div className="text-orange-elevated mt-[-4px] text-6xl font-bold">
            Elevated
          </div>
          <div className="mt-2 text-gray-500">
            Open-source, easy-to-use, free forever
          </div>
        </div>
        <div
          ref={ref}
          className="bg-colorful drop-shadow-pink h-[250px] w-full rounded-[8px] p-[2px] sm:max-w-[350px]"
          style={
            {
              "--colorful-bg-degree": `${angle - 90}deg`,
            } as React.CSSProperties
          }
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[6px] bg-white p-8">
            <div className="mb-2 text-sm text-gray-500">
              Try Parachute right now
            </div>
            <GoogleLoginButton />
            <Auth0LoginButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
