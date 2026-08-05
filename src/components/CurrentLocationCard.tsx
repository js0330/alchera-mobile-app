import { useState } from 'react'
import { LocateFixed, MapPin, RotateCw } from 'lucide-react'
import StatusBadge from './common/StatusBadge'
import { facilities } from '../data/facilities'
import { findNearestFacility } from '../lib/geo'
import type { Facility } from '../types'

type LocationState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'resolved'; facility: Facility }
  | { status: 'error'; message: string }

export default function CurrentLocationCard() {
  const [state, setState] = useState<LocationState>({ status: 'idle' })

  const checkLocation = () => {
    if (!navigator.geolocation) {
      setState({ status: 'error', message: '이 기기에서는 위치 확인을 지원하지 않아요.' })
      return
    }
    setState({ status: 'loading' })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nearest = findNearestFacility(position.coords.latitude, position.coords.longitude, facilities)
        if (!nearest) {
          setState({ status: 'error', message: '가까운 공용공간을 찾지 못했어요.' })
          return
        }
        setState({ status: 'resolved', facility: nearest.facility })
      },
      () => {
        setState({ status: 'error', message: '위치 확인 권한이 없어서 확인이 어려워요. 아래에서 전체 현황을 확인해주세요.' })
      },
      { enableHighAccuracy: true, timeout: 8000 },
    )
  }

  if (state.status === 'idle') {
    return (
      <button
        onClick={checkLocation}
        className="flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primary-blue/40 bg-primary-blue/5 py-4 text-base font-bold text-primary-blue"
      >
        <LocateFixed size={20} />
        현재 위치 공기질 확인하기
      </button>
    )
  }

  if (state.status === 'loading') {
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg border border-border-gray bg-bg-panel py-4 text-base text-text-gray">
        <RotateCw size={18} className="animate-spin" />
        위치를 확인하는 중이에요...
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="flex flex-col items-center gap-2 rounded-lg border border-border-gray bg-bg-panel px-5 py-4 text-center">
        <p className="text-base text-text-gray">{state.message}</p>
        <button onClick={checkLocation} className="text-base font-semibold text-primary-blue">
          다시 시도하기
        </button>
      </div>
    )
  }

  const { facility } = state
  return (
    <div className="rounded-lg border border-primary-blue/30 bg-primary-blue/5 p-5">
      <div className="flex items-center gap-1.5 text-caption font-semibold text-primary-blue">
        <MapPin size={14} />
        현재 위치와 가장 가까운 공간
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-card-title text-primary-navy">{facility.name}</p>
        <StatusBadge status={facility.status} />
      </div>
      <p className="mt-1 text-base text-text-gray">{facility.plainMessage}</p>
      <button onClick={checkLocation} className="mt-3 flex items-center gap-1 text-base font-semibold text-primary-blue">
        <RotateCw size={14} />
        다시 확인하기
      </button>
    </div>
  )
}
