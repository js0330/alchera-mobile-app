import { CheckCircle2, AlertCircle, AlertTriangle, MapPin, RotateCw } from 'lucide-react'
import type { CurrentLocationState } from '../lib/useCurrentLocation'
import type { FacilityStatus } from '../types'

interface CurrentLocationCardProps {
  state: CurrentLocationState
  onRetry: () => void
}

const STATUS_CONTENT: Record<FacilityStatus, { icon: typeof CheckCircle2; title: string; subtitle: string; text: string; bg: string }> = {
  normal: {
    icon: CheckCircle2,
    title: '정상',
    subtitle: '현재 위치 공기질 양호 · 안심하고 이용하세요.',
    text: 'text-status-normal',
    bg: 'bg-status-normal/10',
  },
  caution: {
    icon: AlertCircle,
    title: '주의',
    subtitle: '환기가 필요한 상태예요 · 잠시 후 다시 확인해주세요.',
    text: 'text-status-caution',
    bg: 'bg-status-caution/10',
  },
  danger: {
    icon: AlertTriangle,
    title: '위험',
    subtitle: '지금은 이용을 자제하고 관리사무소에 문의해주세요.',
    text: 'text-status-danger',
    bg: 'bg-status-danger/10',
  },
}

export default function CurrentLocationCard({ state, onRetry }: CurrentLocationCardProps) {
  if (state.status === 'idle' || state.status === 'loading') {
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg border border-border-gray bg-bg-panel py-6 text-base text-text-gray">
        <RotateCw size={18} className="animate-spin" />
        위치를 확인하는 중이에요...
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="flex flex-col items-center gap-2 rounded-lg border border-border-gray bg-bg-panel px-5 py-5 text-center">
        <p className="text-base text-text-gray">{state.message}</p>
        <button onClick={onRetry} className="flex items-center gap-1 text-base font-semibold text-primary-blue">
          <RotateCw size={14} />
          다시 시도하기
        </button>
      </div>
    )
  }

  const { facility } = state
  const content = STATUS_CONTENT[facility.status]
  const Icon = content.icon

  return (
    <div className={`rounded-lg border border-border-gray p-6 text-center ${content.bg}`}>
      <div className="flex items-center justify-center gap-1.5 text-caption font-semibold text-text-light">
        <MapPin size={14} />
        현재 위치 ({facility.name})
      </div>
      <Icon size={44} className={`mx-auto mt-3 ${content.text}`} strokeWidth={1.75} />
      <p className={`mt-2 text-card-title ${content.text}`}>{content.title}</p>
      <p className="mt-1 text-base text-text-gray">{content.subtitle}</p>
      <button
        onClick={onRetry}
        className="mx-auto mt-3 flex items-center gap-1 text-base font-semibold text-primary-blue"
      >
        <RotateCw size={14} />
        다시 확인하기
      </button>
    </div>
  )
}
