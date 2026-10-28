
function StatCard({ title, count, color }) {
  return (
    <div className={`rounded-2xl border p-5 ${color}`}>
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-2 text-3xl font-bold">{count}</p>
    </div>
  )
}

export default StatCard
