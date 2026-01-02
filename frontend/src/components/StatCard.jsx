export default function StatCard({ title, value }) {
  return (
    <div className="card" style={{ width: "220px" }}>
      <h4>{title}</h4>
      <h2 className="green">{value}</h2>
    </div>
  );
}
