import { useState } from "react";
import AddBillingForm from "./AddBillingForm";
import BillingReport from "./BillingReport";
import ListSiswa from "./ListSiswa";
import Navbar1 from "./Navbar1";
import TabBar from "./TabBar";

const DashboardAdmin = () => {
  const [activeTab, setActiveTab] = useState('billingReport');
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50 p-6 font-montserrat xl:min-w-[1728px]">
      <div className="container bg-white rounded-lg shadow-lg overflow-hidden">
        <Navbar1 />
        <TabBar setActiveTab={setActiveTab} />
        <section className="pt-6 mx-20 mt-10 mb-32">
          {activeTab === 'billingReport' && <BillingReport />}
          {activeTab === 'addBilling' && <AddBillingForm />}
          {activeTab === 'listSiswa' && <ListSiswa />}
        </section>
      </div>
    </div>
  );
};

export default DashboardAdmin;
