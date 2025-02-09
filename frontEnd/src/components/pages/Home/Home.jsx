import React from "react";
import Hero from "./hero/Hero";
import Services from "./hero/services/Services";
import TopSearch from "./hero/services/topsearch/TopSearch";
const Home = () => {
  return (
    // <div className="h-screen w-full flex items-center justify-center flex-col">
    //   <div className="w-full h-screen flex items-center justify-center">
    //     <h1 className="text-5xl text-neutral-950 font-bold">
    //       this is the hero section
    //     </h1>
    //   </div>
      
    // </div>



    <div className="space-y-16 w-full nin-h-screen pb-16">
      {/* hero section */}
      <Hero/>
      {/* services */}
      <Services />
      {/* top search */}
      <TopSearch />
    </div>

  );
};

export default Home;
