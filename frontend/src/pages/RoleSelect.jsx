import { useNavigate } from "react-router-dom";

const roles = [
  {
    key: "citizen",
    title: "Citizen",
    desc: "Classify waste, earn eco-points, track impact",
    color: "bg-emerald-600",
  },
  {
    key: "authority",
    title: "Authority",
    desc: "Analyze city waste trends & efficiency",
    color: "bg-amber-500",
  },
  {
    key: "company",
    title: "Recycling Company",
    desc: "Optimize collection & processing workflows",
    color: "bg-lime-600",
  },
];

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6">
        <h1 className="text-4xl font-bold text-center mb-2">Recyvora</h1>
        <p className="text-center text-gray-600 mb-10">
          AI-Driven Waste Segregation & Recycling Optimization
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div
              key={r.key}
              onClick={() => navigate(`/login/${r.key}`)}
              className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer p-6"
            >
              <div className={`w-12 h-12 rounded-lg ${r.color}`} />
              <h2 className="text-xl font-semibold mt-4">{r.title}</h2>
              <p className="text-sm text-gray-500 mt-2">{r.desc}</p>
              <p className="mt-4 text-emerald-700 font-semibold">
                Continue →
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
