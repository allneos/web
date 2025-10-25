import { Link } from '@tanstack/react-router'
import {
  CrossIcon,
  HandsPrayingIcon as PrayIcon,
  MoonIcon,
  SunIcon,
} from '@phosphor-icons/react'

const iconSize = 21
const links = [
  { to: '/', label: 'Our Mission', icon: <CrossIcon size={iconSize} /> },
  { to: '/prayers', label: 'Prayer Board', icon: <PrayIcon size={iconSize} /> },
]

export default function Header() {
  return (
    <header className="gap-sm my-sm flex items-center">
      <nav className="px-lg py-sm gap-sm bg-base-content text-base-100 flex items-center rounded-sm">
        <Link to="/" className="px-lg py-sm font-brand hover:text-base-100">
          allneos.org
        </Link>
        <ul className="gap-sm flex">
          {links.map((link) => {
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="gap-sm px-lg py-sm hover:bg-base-100 hover:text-base-content flex items-center rounded-sm transition-colors"
                  activeProps={{
                    className: 'bg-base-100 text-base-content',
                  }}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <button className="gap-sm text-base-100 bg-base-content px-lg py-sm hover:bg-base-100 hover:text-base-content border-base-content flex h-full cursor-pointer items-center rounded-sm border transition-colors">
        <MoonIcon size={iconSize} />
        Dark Mode
      </button>
    </header>
  )
}
