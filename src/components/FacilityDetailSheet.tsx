import { X } from 'lucide-react'
import type { Facility } from '../types'
import StatusBadge from './common/StatusBadge'

interface FacilityDetailSheetProps {
  facility: Facility | null
  onClose: () => void
}

export default function FacilityDetailSheet({ facility, onClose }: FacilityDetailSheetProps) {
  const open = !!facility

  return (
    <div
      className={`absolute inset-0 z-30 transition-opacity duration-300 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-primary-navy/40" onClick={onClose} />
      <div
        className={`absolute bottom-0 left-0 right-0 max-h-[85%] overflow-y-auto rounded-t-3xl bg-bg-white transition-transform duration-300 ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {facility && (
          <>
            <div className="relative h-40 overflow-hidden rounded-t-3xl bg-bg-panel">
              <img src={facility.thumbnailUrl} alt={`${facility.name} 사진`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/70 via-transparent to-transparent" />
              <button
                onClick={onClose}
                className="absolute right-3 top-3 rounded-full bg-primary-navy/60 p-1.5 text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-card-title text-primary-navy">{facility.name}</h2>
                <StatusBadge status={facility.status} size="md" />
              </div>

              <p className="text-base leading-relaxed text-text-gray">{facility.plainMessage}</p>

              <div className="rounded-lg border border-border-gray bg-bg-panel p-4">
                <p className="text-base font-semibold text-primary-navy">자세히 보기</p>
                <div className="mt-2 grid grid-cols-2 gap-y-1.5 text-base text-text-gray">
                  <span>온도 {facility.temp}℃</span>
                  <span>습도 {facility.humidity}%</span>
                  <span>이산화탄소 {facility.co2}ppm</span>
                  <span>미세먼지 {facility.pm25}㎍/㎥</span>
                </div>
              </div>

              <p className="text-caption text-text-light">최근 갱신 {facility.lastUpdated}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
