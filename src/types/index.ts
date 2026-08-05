export type FacilityStatus = 'normal' | 'caution' | 'danger'

export interface Facility {
  id: string
  name: string
  status: FacilityStatus
  plainMessage: string
  co2: number
  co: number
  voc: number
  radon: number
  pm25: number
  temp: number
  humidity: number
  ventilationOn: boolean
  lastUpdated: string
  thumbnailUrl: string
  /** 현재 위치 감지(가장 가까운 공용공간 찾기) 시뮬레이션용 좌표입니다. */
  lat: number
  lng: number
}

export type NoticeLevel = 'notice' | 'caution' | 'danger'

export interface NoticeItem {
  id: string
  level: NoticeLevel
  facilityName: string
  title: string
  message: string
  timestamp: string
  read: boolean
}

export type ComplaintCategory = '환기 불량' | '악취' | '소음' | '청소 상태' | '기타'
export type ComplaintStatus = '접수완료' | '처리중' | '처리완료'

export interface Complaint {
  id: string
  category: ComplaintCategory
  facilityName: string
  content: string
  status: ComplaintStatus
  createdAt: string
  managerReply?: string
}

export interface ResidentProfile {
  name: string
  unit: string
  phone: string
  notificationsEnabled: boolean
}
