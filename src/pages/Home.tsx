import React from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import HeroImageComponent from "../components/HeroImageComponent";
function Home() {

  return (
    <>
      <Navbar />
      {/* hero */}
      <div className='relative before:absolute before:right-0 before:bottom-60 before:content-[url("/hero-background.svg")]  min-h-screen max-w-screen mt-20 overflow-hidden pb-44'>
        <Wrapper>
          <div className="flex items-center m-auto w-[600px] gap-3 flex-col">
            <p className="text-[#2DA950] text-center font-coveredByYourGrace text-4xl">
              Success stories
            </p>
            <h2 className="text-[56px] text-[#1C1C1C] leading-tight text-center font-semibold">
              Every success journey we've encountered.
            </h2>
          </div>
          <div className="mt-28 flex justify-between px-20 text-3xl gap-52 relative z-10 w-full">
            <HeroImageComponent/>
            <div className="flex flex-col justify-center gap-10">
              <p className="text-[40px] font-semibold leading-[1.2]">
                Enhance fortune 50 company's insights teams research capabilites
              </p>
              <div className="flex gap-3">
                <div className="h-3 w-3 rounded-full bg-[#2DA950]"></div>
                <div className="h-3 w-3 rounded-full hover:bg-[#CAD0CB] bg-[#E4E3E3]"></div>
                <div className="h-3 w-3 rounded-full hover:bg-[#CAD0CB] bg-[#E4E3E3]"></div>
              </div>
              <button className="text-xl transition-colors ease-in-out duration-300 mt-28 flex items-center gap-4 font-semibold px-10 py-8 hover:bg-[#4E4E4E] bg-black text-white rounded-full self-start">
                Explore More{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* FAQs */}
      <Wrapper>
        <div className="flex w-full relative bg-[#E8EEE7] rounded-[40px] py-20 pl-24 pr-12 before:content-[url('/Union.svg')] before:absolute before:bottom-0 before:left-2">
          <div className="w-1/2">
            <div>
              <p className="font-coveredByYourGrace text-3xl text-[#9E9D9D]">
                What's on your mind
              </p>
              <p className="text-6xl font-semibold">Ask Questions</p>
            </div>
          </div>
          <div className="pt-14 flex w-1/2 flex-col gap-9">
            <p className="font-semibold text-xl pb-6 border-b border-[#D7D7D7] flex justify-between items-center w-full">
              Do you offer freelancers? <span>+</span>
            </p>
            <p className="font-semibold text-xl pb-6 border-b border-[#D7D7D7] flex justify-between items-center w-full">
              What's the guarantee that I will be satisfied with the hired
              talent? <span>+</span>
            </p>
            <div className="pb-6 border-b border-[#D7D7D7] flex flex-col gap-6 w-full">
              <p className="flex justify-between items-center font-semibold text-xl ">Can I hire multiple talents at once? <span>-</span></p>
              <p className="text-base text-[#617275]">If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
            </div>
            <p className="font-semibold text-xl pb-6 border-b border-[#D7D7D7] flex justify-between items-center w-full">
              Why should I not go to an agency directly? <span>+</span>
            </p>
            <p className="font-semibold text-xl pb-6 border-b border-[#D7D7D7] flex justify-between items-center w-full">
              Who can help me pick a right skillset and duration for me?
              <span>+</span>
            </p>
          </div>
        </div>
      </Wrapper>

      {/* footer */}
      <Wrapper>
        <div className="px-14 py-14 bg-[#F5F5F5] rounded-[40px] mt-14 w-full flex justify-between mb-10 text-lg font-[#1C1C1C]">
            <div>
            © Talup 2023. All rights reserved
            </div>
            <div className="flex gap-12">
                <a className="underline" href="" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                <a className="underline" href="" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
