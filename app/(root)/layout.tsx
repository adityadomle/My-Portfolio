import React from "react";
import { Navbar } from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar /> {/* no need for developerInitial */}
      <main className="min-h-screen w-full max-w-[700px] mx-auto px-5">
        {children}
      </main>
    </>
  );
};

export default RootLayout;
