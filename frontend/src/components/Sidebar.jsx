import { NavLink } from "react-router-dom";

const links = [
  { to: "/citizen/dashboard", label: "Dashboard" },
  { to: "/citizen/upload", label: "Upload Waste" },
  { to: "/citizen/tips", label: "Tips & Awareness" },
];

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-emerald-700 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">♻ Recyvora</h2>

      <nav className="space-y-4">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-emerald-900"
                  : "hover:bg-emerald-800"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
