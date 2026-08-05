import { useCallback, useEffect, useState } from 'react'
import { facilities } from '../data/facilities'
import { findNearestFacility } from './geo'
import type { Facility } from '../types'

export type CurrentLocationState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'resolved'; facility: Facility }
  | { status: 'error'; message: string }

export function useCurrentLocation() {
  const [state, setState] = useState<CurrentLocationState>({ status: 'idle' })

  const check = useCallback(() => {
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
  }, [])

  useEffect(() => {
    check()
  }, [check])

  return { state, retry: check }
}
