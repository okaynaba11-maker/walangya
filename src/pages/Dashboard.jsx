
import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'

function Dashboard({ groups, tasks }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.done).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <section>
      <div className="rounded-3xl bg-gradient-to-r from-[#DDEDF9] via-[#F8F7F2] to-[#F8E8B5] p-6 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#426F98]">
  Task to do
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#334B60] sm:text-4xl">
          Welcome! May pending kapa oyy!
        </h1>

        <p className="mt-3 max-w-xl leading-7 text-[#526B80]">
   Prioritize your academic responsibilities and ensure that all your lessons and assignments are completed on time. It is important to manage your time effectively and remain committed to your studies.
        </p>

        <Link
          to="/groups"
          className="mt-6 inline-block rounded-xl bg-[#426F98] px-5 py-3 font-semibold text-white hover:bg-[#345B7D]"
        >
         Task To Do
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Task"
          count={totalTasks}
          color="border-[#A9D5F5] bg-[#EAF4FC] text-[#345B7D]"
        />

        <StatCard
          title="Completed Task"
          count={completedTasks}
          color="border-[#C8E8E2] bg-[#EAF6F2] text-[#32675F]"
        />

        <StatCard
          title="Pending Task"
          count={pendingTasks}
          color="border-[#F6C94D] bg-[#FFF8DF] text-[#795D30]"
        />
      </div>

      <section className="mt-8 rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] p-6">
        <h2 className="text-xl font-bold text-[#334B60]">
          Your Task Group
        </h2>

        <p className="mt-2 text-sm text-[#526B80]">
         You have {groups.length} task you need to do.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {groups.map((group) => (
            <Link
              key={group.id}
              to={`/groups/${group.id}`}
              className="rounded-xl border border-[#A9D5F5] bg-[#EAF4FC] px-4 py-3 text-sm font-semibold text-[#345B7D] hover:bg-[#DDEDF9]"
            >
              {group.name}
            </Link>
          ))}
        </div>

        <Link
          to="/guide"
          className="mt-6 inline-block text-sm font-semibold text-[#426F98] hover:underline"
        >
       Having a hard time? Click this
        </Link>
      </section>
    </section>
  )
}

export default Dashboard
