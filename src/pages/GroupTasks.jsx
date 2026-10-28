
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskItem from '../components/TaskItem.jsx'

function GroupTasks({
  groups,
  tasks,
  addTask,
  toggleTask,
  deleteTask,
}) {
  const { groupId } = useParams()
  const [taskTitle, setTaskTitle] = useState('')
  const [message, setMessage] = useState('')

  const selectedGroup = groups.find((group) => group.id === groupId)

  // Display only tasks assigned to this group.
  const groupTasks = tasks.filter((task) => task.groupId === groupId)

  function handleSubmit(event) {
    event.preventDefault()

    const success = addTask(taskTitle, groupId)

    if (success) {
      setTaskTitle('')
      setMessage('')
    } else {
      setMessage('Please enter a task name.')
    }
  }

  if (!selectedGroup) {
    return (
      <section className="rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] p-6">
        <h1 className="text-2xl font-bold text-[#334B60]">Group Not Found</h1>
        <p className="mt-2 text-[#526B80]">
          This task group may have an invalid URL.
        </p>
        <Link
          to="/groups"
          className="mt-5 inline-block font-semibold text-[#426F98] hover:underline"
        >
          Back to Task Groups
        </Link>
      </section>
    )
  }

  return (
    <section>
      <Link
        to="/groups"
        className="text-sm font-semibold text-[#426F98] hover:underline"
      >
        Back to Task Groups
      </Link>

      <h1 className="mt-4 break-words text-3xl font-bold text-[#334B60]">
        {selectedGroup.name}
      </h1>

      <p className="mt-2 text-[#526B80]">
        {groupTasks.length} task(s) in this group.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] p-5 sm:flex-row"
      >
        <input
          type="text"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
          placeholder="What do you need to do?"
          aria-label="New task"
          maxLength={200}
          className="min-w-0 flex-1 rounded-xl border border-[#D5E3E8] bg-white px-4 py-3 text-[#334B60] outline-none focus:border-[#A9D5F5]"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#426F98] px-5 py-3 font-semibold text-white hover:bg-[#345B7D]"
        >
          Add Task
        </button>
      </form>

      {message && (
        <p role="status" className="mt-3 text-sm font-medium text-[#9B5B42]">
          {message}
        </p>
      )}

      <div className="mt-6 space-y-3">
        {groupTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>

      {groupTasks.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-[#A9D5F5] bg-[#EAF4FC] p-8 text-center">
          <h2 className="font-bold text-[#334B60]">No tasks yet</h2>
          <p className="mt-2 text-sm text-[#526B80]">
            Add your first task to continue
          </p>
        </div>
      )}
    </section>
  )
}

export default GroupTasks
