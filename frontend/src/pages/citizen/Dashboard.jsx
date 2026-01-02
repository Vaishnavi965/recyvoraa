export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Welcome back 👋
      </h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Stat title="Eco Points" value="2450" />
        <Stat title="Items Recycled" value="156" />
        <Stat title="Current Streak" value="12 days" />
        <Stat title="Leaderboard Rank" value="#4" />
      </div>

      {/* CTA BANNER */}
      <div className="bg-emerald-600 text-white rounded-xl p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Ready to classify your waste?
          </h2>
          <p className="text-sm opacity-90">
            Upload an image and earn eco-points
          </p>
        </div>
        <a
          href="/citizen/upload"
          className="bg-white text-emerald-700 px-5 py-2 rounded-lg font-semibold"
        >
          Upload Now →
        </a>
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
