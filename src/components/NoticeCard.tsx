import { AlertTriangle, AlertCircle, Megaphone } from 'lucide-react'
import type { NoticeItem } from '../types'

interface NoticeCardProps {
  notice: NoticeItem
}

const LEVEL_CONFIG = {
  notice: { icon: Megaphone, color: 'text-primary-blue', bg: 'bg-primary-blue/10', label: '공지' },
  caution: { icon: AlertCircle, color: 'text-status-caution', bg: 'bg-status-caution/10', label: '주의' },
  danger: { icon: AlertTriangle, color: 'text-status-danger', bg: 'bg-status-danger/10', label: '위험' },
} as const

export default function NoticeCard({ notice }: NoticeCardProps) {
  const config = LEVEL_CONFIG[notice.level]
  const Icon = config.icon

  return (
    <div className={`rounded-lg border border-border-gray p-4 ${notice.read ? 'bg-bg-white' : 'bg-bg-panel'}`}>
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${config.bg}`}>
          <Icon size={20} className={config.color} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className={`text-caption font-bold ${config.color}`}>{config.label}</span>
            {!notice.read && <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary-blue" />}
          </div>
          <p className="mt-1 text-base font-bold text-primary-navy">{notice.title}</p>
          <p className="mt-1 text-base leading-relaxed text-text-gray">{notice.message}</p>
          <div className="mt-2 flex items-center justify-between text-caption text-text-light">
            <span>{notice.facilityName}</span>
            <span>{notice.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
