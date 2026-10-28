
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p
          className={`break-words font-medium ${
            task.done ? 'text-[#9AA6AE] line-through' : 'text-[#334B60]'
          }`}
        >
          {task.title}
        </p>

        <span
          className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
            task.done
              ? 'bg-[#F8E8B5] text-[#795D30]'
              : 'bg-[#DDEDF9] text-[#345B7D]'
          }`}
        >
          {task.done ? 'Done' : 'Not Done'}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className="rounded-xl bg-[#C8E8E2] px-3 py-2 text-sm font-semibold text-[#32675F] hover:bg-[#B3DDD4]"
        >
          {task.done ? 'Mark Not Done' : 'Mark Done'}
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-xl bg-[#F8E8B5] px-3 py-2 text-sm font-semibold text-[#795D30] hover:bg-[#F6D98A]"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
