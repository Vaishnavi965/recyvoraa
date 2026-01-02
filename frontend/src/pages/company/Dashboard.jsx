export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Recycling Company Dashboard
      </h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Stat title="Available Materials (tons)" value="4,850" />
        <Stat title="Pending Pickups" value="32" />
        <Stat title="Processing Efficiency" value="78%" />
        <Stat title="Active Zones" value="12" />
      </div>

      {/* AVAILABLE MATERIALS TABLE */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="font-semibold mb-4">
          Available Recyclable Materials
        </h2>

        <table className="w-full text-sm">
          <thead className="text-left border-b">
            <tr>
              <th className="py-2">Zone</th>
              <th>Waste Type</th>
              <th>Quantity (tons)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((m) => (
              <tr key={m.zone} className="border-b">
                <td className="py-2">{m.zone}</td>
                <td>{m.type}</td>
                <td>{m.qty}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      m.status === "High"
                        ? "bg-red-100 text-red-600"
                        : m.status === "Medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {m.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* WORKFLOW EFFICIENCY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">
            Workflow Efficiency
          </h2>

          <Progress label="Collection Completion" value={82} />
          <Progress label="Sorting Accuracy" value={76} />
          <Progress label="Fleet Utilization" value={69} />
        </div>

        {/* OPTIMIZATION INSIGHTS */}
        <div className="bg-emerald-600 text-white rounded-xl p-6">
          <h2 className="font-semibold mb-3">
            Optimization Insights
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Prioritize plastic collection in Zone A3</li>
            <li>Increase pickups for organic waste this week</li>
            <li>Optimize routes to reduce fuel usage</li>
          </ul>

          <button className="bg-white text-emerald-700 px-4 py-2 rounded-lg mt-4 font-semibold">
            Optimize Routes →
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-emerald-600 h-3 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* ---------- DUMMY DATA ---------- */

const materials = [
  { zone: "Zone A1", type: "Plastic", qty: 1250, status: "High" },
  { zone: "Zone B2", type: "Organic", qty: 980, status: "Medium" },
  { zone: "Zone C3", type: "Metal", qty: 760, status: "Low" },
  { zone: "Zone D4", type: "Paper", qty: 1120, status: "Medium" },
  { zone: "Zone E5", type: "Glass", qty: 740, status: "Low" },
];
