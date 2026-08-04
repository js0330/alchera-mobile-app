import type { Facility } from '../types'

const thumb = (id: string) => `https://picsum.photos/seed/${id}/480/320`

export const facilities: Facility[] = [
  {
    id: 'underground-parking',
    name: '지하주차장',
    status: 'caution',
    plainMessage: '환기를 가동 중이에요. 잠시 후 다시 확인해주세요.',
    co2: 742,
    pm25: 24,
    temp: 25,
    humidity: 51,
    lastUpdated: '오늘 14:22',
    thumbnailUrl: thumb('underground-parking'),
  },
  {
    id: 'underground-storage',
    name: '지하 창고',
    status: 'normal',
    plainMessage: '지금 이용하기 안전해요.',
    co2: 520,
    pm25: 15,
    temp: 23,
    humidity: 46,
    lastUpdated: '오늘 14:18',
    thumbnailUrl: thumb('underground-storage'),
  },
  {
    id: 'mechanical-room',
    name: '기계실 인근 통로',
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
    id: 'community-hall',
    name: '경로당·커뮤니티실',
    status: 'normal',
    plainMessage: '지금 이용하기 안전해요.',
    co2: 560,
    pm25: 13,
    temp: 24,
    humidity: 45,
    lastUpdated: '오늘 14:15',
    thumbnailUrl: thumb('community-hall'),
  },
  {
    id: 'basement-corridor',
    name: '지하 연결통로',
    status: 'normal',
    plainMessage: '지금 이용하기 안전해요.',
    co2: 505,
    pm25: 12,
    temp: 22,
    humidity: 44,
    lastUpdated: '오늘 14:10',
    thumbnailUrl: thumb('basement-corridor'),
  },
]

export const findFacilityById = (id: string) => facilities.find((facility) => facility.id === id)
