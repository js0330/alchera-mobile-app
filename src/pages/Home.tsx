import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, MessageSquareText, Settings } from 'lucide-react'
import SafetySummaryCard from '../components/SafetySummaryCard'
import CurrentLocationCard from '../components/CurrentLocationCard'
import FacilityRow from '../components/FacilityRow'
import FacilityDetailSheet from '../components/FacilityDetailSheet'
import { facilities } from '../data/facilities'
import { notices } from '../data/notices'
import { residentProfile, complexName } from '../data/resident'
import { worstStatus } from '../lib/status'
import type { Facility } from '../types'

export default function Home() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)
  const overallStatus = worstStatus(facilities)
  const previewFacilities = facilities.slice(0, 3)
  const previewNotices = notices.slice(0, 2)

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-base text-text-gray">{complexName}</p>
          <h1 className="text-page-title text-primary-navy">안녕하세요, {residentProfile.name}님</h1>
        </div>
        <Link
          to="/profile"
          aria-label="내 정보 및 설정"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-border-gray bg-bg-white text-text-gray"
        >
          <Settings size={22} />
        </Link>
      </div>

      <CurrentLocationCard />

      <SafetySummaryCard status={overallStatus} />

      <div>
        <div className="flex items-center justify-between">
          <p className="text-card-title text-primary-navy">공용공간 현황</p>
          <Link to="/facilities" className="flex items-center gap-0.5 text-base font-medium text-primary-blue">
            전체보기
            <ChevronRight size={18} />
          </Link>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {previewFacilities.map((facility) => (
            <FacilityRow key={facility.id} facility={facility} onClick={() => setSelectedFacility(facility)} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-card-title text-primary-navy">최근 알림</p>
          <Link to="/alerts" className="flex items-center gap-0.5 text-base font-medium text-primary-blue">
            전체보기
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

      <FacilityDetailSheet facility={selectedFacility} onClose={() => setSelectedFacility(null)} />
    </div>
  )
}
