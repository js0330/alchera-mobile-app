import type { NoticeItem } from '../types'

export const notices: NoticeItem[] = [
  {
    id: 'N-0142',
    level: 'caution',
    facilityName: 'B1 주차구역A',
    title: '환기를 시작했어요',
    message: 'B1 주차구역A의 공기질이 다소 나빠져 자동으로 환기를 가동했어요. 잠시 후 다시 확인해주세요.',
    timestamp: '오늘 14:22',
    read: false,
  },
  {
    id: 'N-0141',
    level: 'danger',
    facilityName: '기계실',
    title: '지금은 이용을 자제해주세요',
    message: '기계실의 공기질이 위험 수준이에요. 이용을 자제하시고, 필요하시면 관리사무소로 연락해주세요.',
    timestamp: '오늘 11:06',
    read: false,
  },
  {
    id: 'N-0140',
    level: 'notice',
    facilityName: '전체',
    title: '정기 소독 안내',
    message: '내일 오전 9시부터 11시까지 B1 주차구역A 정기 소독이 진행돼요. 이용에 참고해주세요.',
    timestamp: '어제 18:00',
    read: true,
  },
  {
    id: 'N-0139',
    level: 'caution',
    facilityName: 'B1 주차구역A',
    title: '환기를 시작했어요',
    message: '출퇴근 시간대 차량 증가로 공기질이 일시적으로 나빠져 환기를 가동했어요.',
    timestamp: '그제 07:45',
    read: true,
  },
]
