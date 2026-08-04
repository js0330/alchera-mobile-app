import type { Facility } from '../types'
import StatusBadge from './common/StatusBadge'

interface FacilityRowProps {
  facility: Facility
  onClick: () => void
}

export default function FacilityRow({ facility, onClick }: FacilityRowProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-lg border border-border-gray bg-bg-white p-3 text-left transition-colors hover:bg-bg-panel"
    >
      <img
        src={facility.thumbnailUrl}
        alt={`${facility.name} 사진`}
        className="h-16 w-20 flex-shrink-0 rounded-md object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="text-base font-bold text-primary-navy">{facility.name}</p>
        <p className="mt-0.5 text-base text-text-gray">{facility.plainMessage}</p>
      </div>
      <StatusBadge status={facility.status} size="sm" />
    </button>
  )
}
