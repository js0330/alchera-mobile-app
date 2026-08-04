import { useMemo, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import NoticeCard from '../components/NoticeCard'
import { notices } from '../data/notices'
import type { NoticeLevel } from '../types'

type Filter = 'all' | NoticeLevel

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'danger', label: '위험' },
  { key: 'caution', label: '주의' },
  { key: 'notice', label: '공지' },
]

export default function Alerts() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = useMemo(() => notices.filter((notice) => filter === 'all' || notice.level === filter), [filter])

  return (
    <div className="flex flex-col gap-4 p-5">
      <PageHeader title="알림" subtitle="우리 단지의 공지와 안전 알림이에요." />

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((option) => (
          <button
            key={option.key}
            onClick={() => setFilter(option.key)}
            className={`rounded-lg border px-4 py-2 text-base font-medium transition-colors ${
              filter === option.key
                ? 'border-primary-navy bg-primary-navy text-white'
                : 'border-border-gray bg-bg-white text-text-gray'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
        {filtered.length === 0 && (
          <div className="rounded-lg border border-dashed border-border-gray bg-bg-panel p-8 text-center text-base text-text-light">
            해당하는 알림이 없어요.
          </div>
        )}
      </div>
    </div>
  )
}
