import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Municipality Dashboard
      </h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Stat title="Total Waste (tons)" value="12,450" />
        <Stat title="Recycling Efficiency" value="68%" />
        <Stat title="Registered Citizens" value="24,300" />
        <Stat title="Active Zones" value="18" />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">
            Monthly Waste Generation
          </h2>
          <Line data={lineData} />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">
            Waste Category Distribution
          </h2>
          <Bar data={barData} />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Recycling Efficiency Report
        </h2>

        <table className="w-full text-sm">
          <thead className="text-left border-b">
            <tr>
              <th className="py-2">Category</th>
              <th>Collected (tons)</th>
              <th>Processed (tons)</th>
              <th>Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.category} className="border-b">
                <td className="py-2">{row.category}</td>
                <td>{row.collected}</td>
                <td>{row.processed}</td>
                <td className="text-green-700 font-semibold">
                  {row.efficiency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn-primary mt-4">
          Download Full Report
        </button>
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

/* ---------- DUMMY BUT REALISTIC DATA ---------- */

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Waste Generated (tons)",
      data: [1800, 2000, 2300, 2100, 2500, 2700],
      borderColor: "#1f7a4f",
      backgroundColor: "rgba(31,122,79,0.2)",
    },
  ],
};

const barData = {
  labels: ["Plastic", "Organic", "Metal", "Paper", "Glass"],
  datasets: [
    {
      label: "Waste (tons)",
      data: [3200, 2800, 1900, 2200, 1350],
      backgroundColor: "#34d399",
    },
  ],
};

const tableData = [
  { category: "Plastic", collected: 3200, processed: 2100, efficiency: "65%" },
  { category: "Organic", collected: 2800, processed: 2400, efficiency: "86%" },
  { category: "Metal", collected: 1900, processed: 1500, efficiency: "79%" },
  { category: "Paper", collected: 2200, processed: 1800, efficiency: "82%" },
  { category: "Glass", collected: 1350, processed: 900, efficiency: "67%" },
];
