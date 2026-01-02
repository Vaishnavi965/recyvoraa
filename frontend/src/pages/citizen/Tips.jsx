export default function Tips() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Sustainability Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Tip
          title="Reduce Plastic Use"
          desc="Carry reusable bags and bottles."
        />
        <Tip
          title="Compost Organic Waste"
          desc="Turn food scraps into natural fertilizer."
        />
        <Tip
          title="Recycle Electronics"
          desc="Use certified e-waste collection centers."
        />
      </div>
    </div>
  );
}

function Tip({ title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
