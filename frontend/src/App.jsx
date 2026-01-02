import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";

import CitizenLayout from "./pages/citizen/Layout";
import AuthorityLayout from "./pages/authority/Layout";
import CompanyLayout from "./pages/company/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entry */}
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/:role" element={<Login />} />

        {/* Citizen */}
        <Route path="/citizen/*" element={<CitizenLayout />} />

        {/* Authority */}
        <Route path="/authority/*" element={<AuthorityLayout />} />

        {/* Recycling Company */}
        <Route path="/company/*" element={<CompanyLayout />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
