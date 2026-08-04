import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Bell, LogOut, Phone, Type } from 'lucide-react'
import Toggle from '../components/common/Toggle'
import { useSettings } from '../context/useSettings'
import { residentProfile, complexName } from '../data/resident'

export default function Profile() {
  const navigate = useNavigate()
  const { largeText, setLargeText } = useSettings()
  const [notificationsEnabled, setNotificationsEnabled] = useState(residentProfile.notificationsEnabled)

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          aria-label="뒤로 가기"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-border-gray bg-bg-white text-text-gray"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-page-title text-primary-navy">내 정보</h1>
      </div>

      <div className="flex items-center gap-4 rounded-lg border border-border-gray bg-bg-panel p-5">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-blue text-2xl font-bold text-white">
          {residentProfile.name.slice(0, 1)}
        </div>
        <div>
          <p className="text-card-title text-primary-navy">{residentProfile.name}님</p>
          <p className="mt-0.5 text-base text-text-gray">{complexName}</p>
          <p className="text-base text-text-light">{residentProfile.unit}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-lg border border-border-gray p-4">
        <Phone size={20} className="flex-shrink-0 text-primary-blue" />
        <div>
          <p className="text-caption text-text-light">등록된 연락처</p>
          <p className="text-base font-semibold text-primary-navy">{residentProfile.phone}</p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-border-gray p-4">
        <div className="flex items-center gap-3">
          <Type size={20} className="flex-shrink-0 text-primary-blue" />
          <div>
            <p className="text-base font-semibold text-primary-navy">글자 크게 보기</p>
            <p className="text-caption text-text-light">화면의 모든 글자가 더 크게 보여요</p>
          </div>
        </div>
        <Toggle checked={largeText} onChange={setLargeText} />
      </div>

      <div className="flex items-center justify-between rounded-lg border border-border-gray p-4">
        <div className="flex items-center gap-3">
          <Bell size={20} className="flex-shrink-0 text-primary-blue" />
          <p className="text-base font-semibold text-primary-navy">위험 알림 수신</p>
        </div>
        <Toggle checked={notificationsEnabled} onChange={setNotificationsEnabled} />
      </div>

      <button className="flex items-center justify-center gap-2 rounded-lg border border-border-gray py-3.5 text-base font-semibold text-status-danger transition-colors hover:bg-bg-panel">
        <LogOut size={18} />
        로그아웃
      </button>
    </div>
  )
}
