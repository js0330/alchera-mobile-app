import { NavLink } from 'react-router-dom'
import { Home, Bell, Building2, MessageSquareText } from 'lucide-react'
import { notices } from '../../data/notices'

const unreadCount = notices.filter((notice) => !notice.read).length

const TABS = [
  { to: '/', label: '홈', icon: Home },
  { to: '/facilities', label: '공용공간', icon: Building2 },
  { to: '/alerts', label: '알림', icon: Bell, badge: unreadCount },
  { to: '/complaints', label: '민원·신고', icon: MessageSquareText },
]

export default function BottomNav() {
  return (
    <nav className="flex flex-shrink-0 items-stretch border-t border-border-gray bg-bg-white shadow-nav">
      {TABS.map(({ to, label, icon: Icon, badge }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `relative flex flex-1 flex-col items-center gap-1 py-2.5 text-caption font-semibold ${
              isActive ? 'text-primary-blue' : 'text-text-light'
            }`
          }
        >
          <span className="relative">
            <Icon size={24} />
            {!!badge && (
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-status-danger text-[10px] font-bold text-white">
                {badge}
              </span>
            )}
          </span>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
