
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Groups from './pages/Groups.jsx'
import GroupTasks from './pages/GroupTasks.jsx'
import Guide from './pages/Guide.jsx'
import Developers from './pages/Developers.jsx'

// These groups appear when the website is opened for the first time.
const startingGroups = [
  { id: 'school', name: 'School Activities' },
  { id: 'personal', name: 'Personal Tasks' },
  { id: 'projects', name: 'Projects' },
  { id: 'daily', name: 'Daily Tasks' },
]

function App() {
  // Load saved data, or use the starting groups if no data exists.
  const [groups, setGroups] = useState(() => {
    try {
      const saved = localStorage.getItem('todo-groups')
      return saved ? JSON.parse(saved) : startingGroups
    } catch {
      return startingGroups
    }
  })

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('todo-tasks')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Save groups whenever their state changes.
  useEffect(() => {
    localStorage.setItem('todo-groups', JSON.stringify(groups))
  }, [groups])

  // Save tasks whenever their state changes.
  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks))
  }, [tasks])

  // Create a new group.
  function addGroup(name) {
    const cleanName = name.trim()

    if (!cleanName) {
      return false
    }

    const alreadyExists = groups.some(
      (group) => group.name.toLowerCase() === cleanName.toLowerCase(),
    )

    if (alreadyExists) {
      return false
    }

    setGroups((currentGroups) => [
      ...currentGroups,
      {
        id: crypto.randomUUID(),
        name: cleanName,
      },
    ])

    return true
  }

  // Add a task to its selected group.
  function addTask(title, groupId) {
    const cleanTitle = title.trim()

    if (!cleanTitle || !groups.some((group) => group.id === groupId)) {
      return false
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title: cleanTitle,
        groupId,
        done: false,
      },
    ])

    return true
  }

  // Switch a task between Done and Not Done.
  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    )
  }

  // Delete a task using its unique ID.
  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#334B60]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Routes>
          <Route
            path="/"
            element={<Dashboard groups={groups} tasks={tasks} />}
          />

          <Route
            path="/groups"
            element={<Groups groups={groups} addGroup={addGroup} />}
          />

          <Route
            path="/groups/:groupId"
            element={
              <GroupTasks
                groups={groups}
                tasks={tasks}
                addTask={addTask}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            }
          />

          <Route path="/guide" element={<Guide />} />

          <Route path="/developers" element={<Developers />} />

          <Route
            path="*"
            element={
              <div className="rounded-2xl bg-[#FFFFFF] p-8 text-center">
                <h1 className="text-2xl font-bold">Page not found</h1>
                <p className="mt-2 text-[#718096]">
                  Please use the navigation menu to open a valid page.
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      <footer className="border-t border-[#C8E8E2] bg-[#F8F7F2] px-4 py-5 text-center text-sm text-[#718096]">
        TaskBloom Web Based Task Organizer
      </footer>
    </div>
  )
}

export default App
