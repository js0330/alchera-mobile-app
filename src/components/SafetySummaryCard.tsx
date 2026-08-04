import { CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react'
import type { FacilityStatus } from '../types'

interface SafetySummaryCardProps {
  status: FacilityStatus
}

const CONFIG: Record<
  FacilityStatus,
  { icon: typeof CheckCircle2; headline: string; message: string; bg: string; fg: string }
> = {
  normal: {
    icon: CheckCircle2,
    headline: '우리 단지는 안전해요',
    message: '모든 공용공간의 공기질이 정상이에요.',
    bg: 'bg-status-normal/10',
    fg: 'text-status-normal',
  },
  caution: {
    icon: AlertCircle,
    headline: '일부 공간이 환기 중이에요',
    message: '공용공간 현황에서 자세히 확인해주세요.',
    bg: 'bg-status-caution/10',
    fg: 'text-status-caution',
  },
  danger: {
    icon: AlertTriangle,
    headline: '위험 구역이 있어요',
    message: '해당 공간의 이용을 자제하고 안내를 확인해주세요.',
    bg: 'bg-status-danger/10',
    fg: 'text-status-danger',
  },
}

export default function SafetySummaryCard({ status }: SafetySummaryCardProps) {
  const config = CONFIG[status]
  const Icon = config.icon

  return (
    <div className={`flex flex-col items-center gap-3 rounded-xl border border-border-gray p-8 text-center ${config.bg}`}>
      <Icon size={56} className={config.fg} strokeWidth={1.75} />
      <p className={`text-card-title ${config.fg}`}>{config.headline}</p>
      <p className="text-base text-text-gray">{config.message}</p>
    </div>
  )
}
