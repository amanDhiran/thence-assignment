import React from "react";
import logo from "/logo.svg";
import Wrapper from "./Wrapper";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate()

    const handleGetProjects = () => {
        navigate("/register")
    }
  return (
    <Wrapper>
      <div className="flex items-center justify-between py-4 pl-12 pr-5 border border-[#EAEAEA] rounded-full mt-5">
        <div className="w-28 h-12 flex items-center">
          <img src={logo} className="object-contain" alt="" />
        </div>
        <div className="flex gap-4">
          <button onClick={handleGetProjects} className="px-10 border-[1.31px] py-[16px] hover:bg-[#F1F1F1] border-[#EAEAEA] rounded-full">
            Get Projects
          </button>
          <button className="px-10 py-7 border bg-[#1C1C1C] hover:bg-[#4E4E4E] rounded-full text-white">
            Onboard Talent
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
