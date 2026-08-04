import { Link } from 'react-router-dom'
import { Settings } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-page-title text-primary-navy">{title}</h1>
        {subtitle && <p className="mt-1 text-base text-text-gray">{subtitle}</p>}
      </div>
      <Link
        to="/profile"
        aria-label="내 정보 및 설정"
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-border-gray bg-bg-white text-text-gray"
      >
        <Settings size={22} />
      </Link>
    </div>
  )
}
