import FooterAdmin from "@/Components/Footers/FooterAdmin";
import HeaderStats from "@/Components/Headers/HeaderStats";
import AdminNavbar from "@/Components/Navbars/AdminNavbar";
import Sidebar from "@/Components/Sidebar/Sidebar";
import React from "react";

const LogedLayouts = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default LogedLayouts;
