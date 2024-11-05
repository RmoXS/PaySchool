/* eslint-disable react/prop-types */
import { useState } from "react";

const TabBar = ({ setActiveTab }) => {
  const [activeTab, setActiveTabState] = useState("billingReport");

  const handleTabChange = (tab) => {
    setActiveTabState(tab);
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center bg-secondary">
      <div className="space-x-56 pt-2">
        <button
          className={`font-bold px-4 py-2 rounded-t-lg ${
            activeTab === "billingReport"
              ? "bg-white text-black"
              : "bg-secondary text-white"
          } `}
          onClick={() => handleTabChange("billingReport")}
        >
          Catatan Tagihan
        </button>
        <button
          className={`font-bold px-4 py-2 rounded-t-lg ${
            activeTab === "addBilling"
              ? "bg-white text-black"
              : "bg-secondary text-primary"
          }`}
          onClick={() => handleTabChange("addBilling")}
        >
          Tambah Tagihan
        </button>
        <button
          className={`font-bold px-4 py-2 rounded-t-lg ${
            activeTab === "listSiswa"
              ? "bg-white text-black"
              : "bg-secondary text-white"
          }`}
          onClick={() => handleTabChange("listSiswa")}
        >
          Siswa
        </button>
      </div>
    </div>
  );
};

export default TabBar;
