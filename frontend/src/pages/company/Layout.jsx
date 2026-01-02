import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Dashboard from "./Dashboard";

export default function CompanyLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
