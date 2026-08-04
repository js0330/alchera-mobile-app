export type FacilityStatus = 'normal' | 'caution' | 'danger'

export interface Facility {
  id: string
  name: string
  status: FacilityStatus
  plainMessage: string
  co2: number
  pm25: number
  temp: number
  humidity: number
  lastUpdated: string
  thumbnailUrl: string
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
