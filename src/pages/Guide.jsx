
import { Link } from 'react-router-dom'

function Guide() {
  const instructions = [
    {
      title: '1. Create a task group',
      description:
        'Open Task Groups from the navigation menu. Enter a category name and click Add Group.',
    },
    {
      title: '2. Add a task',
      description:
        'Open a group, type your task in the input field, and click Add Task. The task will belong to that group.',
    },
    {
      title: '3. Mark a task as Done',
      description:
        'Click Mark Done beside a task when you finish it. Its status will change to Done.',
    },
    {
      title: '4. Change a task back to Not Done',
      description:
        'Click Mark Not Done beside a completed task to return it to the pending list.',
    },
    {
      title: '5. Delete a task',
      description:
        'Click Delete beside the task you want to remove. Deleted tasks will no longer appear in the list.',
    },
    {
      title: '6. Navigate between pages',
      description:
        'Use the navigation menu to visit the Dashboard, Task Groups, User Guide, and Developers pages. Open a group to view its tasks and use Back to Task Groups to return.',
    },
  ]

  return (
    <section>
      <h1 className="text-3xl font-bold text-[#334B60]">User Guide</h1>
      <p className="mt-2 text-[#526B80]">
        Guidelines to use TaskBloom.
      </p>

      <div className="mt-6 space-y-4">
        {instructions.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] p-5"
          >
            <h2 className="font-bold text-[#426F98]">{item.title}</h2>
            <p className="mt-2 leading-7 text-[#526B80]">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <Link
        to="/groups"
        className="mt-6 inline-block rounded-xl bg-[#426F98] px-5 py-3 font-semibold text-white hover:bg-[#345B7D]"
      >
        Manage Task
      </Link>
    </section>
  )
}

export default Guide
