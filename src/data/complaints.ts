import type { Complaint } from '../types'

export const complaints: Complaint[] = [
  {
    id: 'C-0031',
    category: '환기 불량',
    facilityName: '지하주차장',
    content: '지하주차장에 들어가면 공기가 답답해요. 환기가 잘 안 되는 것 같아요.',
    status: '처리중',
    createdAt: '2026-08-03 10:12',
  },
  {
    id: 'C-0027',
    category: '악취',
    facilityName: '지하 창고',
    content: '창고 쪽에서 냄새가 나요. 확인 부탁드려요.',
    status: '처리완료',
    createdAt: '2026-07-28 09:30',
    managerReply: '환기 설비 점검 및 청소를 완료했습니다. 이용에 불편을 드려 죄송합니다.',
  },
  {
    id: 'C-0019',
    category: '청소 상태',
    facilityName: '경로당·커뮤니티실',
    content: '바닥이 미끄러워요. 청소 상태를 확인해주세요.',
    status: '처리완료',
    createdAt: '2026-07-15 14:00',
    managerReply: '청소 및 미끄럼 방지 매트를 설치했습니다.',
  },
]
