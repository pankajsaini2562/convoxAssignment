import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Table from "./components/Table";
export default function App() {
  return (
    <div className="bg-[#fafafa] h-screen w-screen overflow-hidden ">
      {/* <Header />
      <Sidebar /> */}
      <Table />
    </div>
  );
}
