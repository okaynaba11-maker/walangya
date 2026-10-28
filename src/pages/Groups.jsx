
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Groups({ groups, addGroup }) {
  const [groupName, setGroupName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const success = addGroup(groupName)

    if (success) {
      setGroupName('')
      setMessage('Task group created successfully.')
    } else if (!groupName.trim()) {
      setMessage('Please enter a group name.')
    } else {
      setMessage('That group already exists.')
    }
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-[#334B60]">Task</h1>
      <p className="mt-2 text-[#526B80]">
  Create a group of task and do it organizely
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] p-5 sm:flex-row"
      >
        <input
          type="text"
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
          placeholder="Enter a new group name"
          aria-label="New group name"
          maxLength={60}
          className="min-w-0 flex-1 rounded-xl border border-[#D5E3E8] bg-white px-4 py-3 text-[#334B60] outline-none focus:border-[#A9D5F5]"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#426F98] px-5 py-3 font-semibold text-white hover:bg-[#345B7D]"
        >
      Add A Group
        </button>
      </form>

      {message && (
        <p role="status" className="mt-3 text-sm font-medium text-[#426F98]">
          {message}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.id}
            className="rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] p-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DDEDF9] font-bold text-[#345B7D]">
                {group.name.charAt(0).toUpperCase()}
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="break-words font-bold text-[#334B60]">
                  {group.name}
                </h2>
                <Link
                  to={`/groups/${group.id}`}
                  className="mt-3 inline-block text-sm font-semibold text-[#426F98] hover:underline"
                >
                 Open Group
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {groups.length === 0 && (
        <p className="mt-6 text-[#718096]">
       Create a Group
        </p>
      )}
    </section>
  )
}

export default Groups
