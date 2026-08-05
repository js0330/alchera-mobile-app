import { Link } from 'react-router-dom'
import { Bell, ChevronRight, ChevronDown, MessageSquareText, Settings } from 'lucide-react'
import CurrentLocationCard from '../components/CurrentLocationCard'
import MetricCard from '../components/common/MetricCard'
import { notices } from '../data/notices'
import { complexName } from '../data/resident'
import { useCurrentLocation } from '../lib/useCurrentLocation'

export default function Home() {
  const { state, retry } = useCurrentLocation()
  const previewNotices = notices.slice(0, 2)
  const metricsFacility = state.status === 'resolved' ? state.facility : null

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-base font-semibold text-primary-navy">
          {complexName}
          <ChevronDown size={18} className="text-text-light" />
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/alerts"
            aria-label="알림"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-border-gray bg-bg-white text-text-gray"
          >
            <Bell size={20} />
          </Link>
          <Link
            to="/profile"
            aria-label="내 정보 및 설정"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-border-gray bg-bg-white text-text-gray"
          >
            <Settings size={20} />
          </Link>
        </div>
      </div>

      <CurrentLocationCard state={state} onRetry={retry} />

      <div>
        <p className="text-card-title text-primary-navy">현재 공기질</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <MetricCard label="CO" unit="ppm" value={metricsFacility ? `${metricsFacility.co}` : '-'} />
          <MetricCard label="VOC" unit="ppb" value={metricsFacility ? `${metricsFacility.voc}` : '-'} />
          <MetricCard label="라돈" unit="Bq/㎥" value={metricsFacility ? `${metricsFacility.radon}` : '-'} />
          <MetricCard label="PM2.5" unit="㎍/㎥" value={metricsFacility ? `${metricsFacility.pm25}` : '-'} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-card-title text-primary-navy">최근 알림</p>
          <Link to="/alerts" className="flex items-center gap-0.5 text-base font-medium text-primary-blue">
            더보기
            <ChevronRight size={18} />
          </Link>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {previewNotices.map((notice) => (
            <div key={notice.id} className="rounded-lg border border-border-gray bg-bg-white p-4">
              <p className="text-base font-semibold text-primary-navy">{notice.title}</p>
              <p className="mt-1 text-base text-text-gray">{notice.message}</p>
              <p className="mt-1.5 text-caption text-text-light">
                {notice.facilityName} · {notice.timestamp}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/complaints?new=1"
        className="flex items-center justify-center gap-2 rounded-lg bg-primary-blue py-4 text-base font-bold text-white transition-colors hover:bg-primary-navy"
      >
        <MessageSquareText size={20} />
        민원·신고 하기
      </Link>
    </div>
  )
}
