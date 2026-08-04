import type { Facility } from '../types'

// 관리자 웹 대시보드의 구역명·사진과 매칭됩니다 (알체라 실버타운 = 대시보드의 동일 건물).
const thumb = (id: string) => `/zones/${id}.jpg`

export const facilities: Facility[] = [
  {
    id: 'b1-parking-a',
    name: 'B1 주차구역A',
    status: 'caution',
    plainMessage: '환기를 가동 중이에요. 잠시 후 다시 확인해주세요.',
    co2: 742,
    pm25: 24,
    temp: 25,
    humidity: 51,
    lastUpdated: '오늘 14:22',
    thumbnailUrl: thumb('b1-parking-a'),
  },
  {
    id: 'b2-storage',
    name: 'B2 저장구역',
    status: 'caution',
    plainMessage: '환기를 가동 중이에요. 잠시 후 다시 확인해주세요.',
    co2: 715,
    pm25: 22,
    temp: 25,
    humidity: 52,
    lastUpdated: '오늘 14:18',
    thumbnailUrl: thumb('b2-storage'),
  },
  {
    id: 'mechanical-room',
    name: '기계실',
    status: 'danger',
    plainMessage: '지금은 이용을 자제하고 관리사무소에 문의해주세요.',
    co2: 1180,
    pm25: 52,
    temp: 28,
    humidity: 58,
    lastUpdated: '오늘 14:23',
    thumbnailUrl: thumb('mechanical-room'),
  },
  {
    id: '2f-meeting',
    name: '2F 회의실',
    status: 'normal',
    plainMessage: '지금 이용하기 안전해요.',
    co2: 601,
    pm25: 16,
    temp: 24,
    humidity: 47,
    lastUpdated: '오늘 14:19',
    thumbnailUrl: thumb('2f-meeting'),
  },
  {
    id: 'b1-entrance',
    name: 'B1 출입구역',
    status: 'caution',
    plainMessage: '환기를 가동 중이에요. 잠시 후 다시 확인해주세요.',
    co2: 512,
    pm25: 14,
    temp: 23,
    humidity: 45,
    lastUpdated: '오늘 14:20',
    thumbnailUrl: thumb('b1-entrance'),
  },
]

export const findFacilityById = (id: string) => facilities.find((facility) => facility.id === id)
