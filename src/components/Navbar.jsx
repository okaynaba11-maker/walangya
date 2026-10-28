
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Dashboard', path: '/' },
  { name: 'Task Groups', path: '/groups' },
  { name: 'User Guide', path: '/guide' },
  { name: 'Developers', path: '/developers' },
]

function Navbar() {
  return (
    <header className="border-b border-[#C8E8E2] bg-[#F8F7F2]">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink
          to="/"
          className="text-xl font-bold text-[#426F98]"
        >
          TaskBloom
        </NavLink>

        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#F8E8B5] text-[#795D30]'
                    : 'text-[#526B80] hover:bg-[#DDEDF9]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
