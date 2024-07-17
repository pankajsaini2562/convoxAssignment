import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { CgTemplate } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { BiConversation } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div
      className="bg-[#ffffff] flex w-48
    h-screen frontend "
    >
      <div className="flex justify-evenly gap-3 px-7  w-45  py-4">
        <div className="flex flex-col gap-7 rounded-lg ">
          <div
            className="flex  
           hover:cursor-pointer hover:bg-[#9b7aca] rounded-full 
         
          items-center  gap-5"
          >
            <div className="text-[rgb(113,111,111)]">
              <BiSolidDashboard />
            </div>
            <h1 className="text-[#716f6f]">Dashboard</h1>
          </div>
          <div
            className="flex 
          hover:cursor-pointer hover:bg-[#9b7aca] rounded-full 
          items-center  gap-5"
          >
            <div className="text-[#716f6f]">
              <BiConversation />
            </div>
            <h1 className="text-[#716f6f]">Conversation</h1>
          </div>
          <div
            className="flex  
          hover:cursor-pointer hover:bg-[#9b7aca] rounded-full 
          items-center  gap-5"
          >
            <div className="text-[#716f6f]">
              {" "}
              <BiSolidDashboard />
            </div>
            <h1 className="text-[#716f6f]">broadcasting</h1>
          </div>
          <div
            className="flex  
          hover:cursor-pointer hover:bg-[#9b7aca] rounded-full 
          items-center  gap-5"
          >
            <div className="text-[#716f6f]">
              <CgTemplate />
            </div>
            <h1 className="text-[#716f6f]">Template</h1>
          </div>
          <div
            className="flex  
          hover:cursor-pointer hover:bg-[#9b7aca] rounded-full 
          
          items-center  gap-5"
          >
            <div className="text-[#716f6f]">
              {" "}
              <IoMdContact />{" "}
            </div>
            <h1 className="text-[#716f6f]">Contacts</h1>
          </div>
          <div
            className="flex  
          hover:cursor-pointer hover:bg-[#9b7aca] rounded-full 
          
          
          items-center gap-5 "
          >
            <div className="text-[#716f6f]">
              {" "}
              <MdOutlineSettings />
            </div>
            <h1 className="text-[#716f6f]">Settings</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
