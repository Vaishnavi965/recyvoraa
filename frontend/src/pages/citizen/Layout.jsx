import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

import Dashboard from "./Dashboard";
import UploadWaste from "./UploadWaste";
import Tips from "./Tips";

export default function CitizenLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<UploadWaste />} />
          <Route path="tips" element={<Tips />} />
        </Routes>
      </main>
    </div>
  );
}
