import type { Complaint } from '../types'

const STATUS_STYLE: Record<Complaint['status'], string> = {
  접수완료: 'bg-primary-blue/10 text-primary-blue',
  처리중: 'bg-status-caution/10 text-status-caution',
  처리완료: 'bg-status-normal/10 text-status-normal',
}

interface ComplaintCardProps {
  complaint: Complaint
}

export default function ComplaintCard({ complaint }: ComplaintCardProps) {
  return (
    <div className="rounded-lg border border-border-gray bg-bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-caption font-medium text-text-light">
          {complaint.category} · {complaint.facilityName}
        </span>
        <span className={`rounded-full px-2.5 py-1 text-caption font-bold ${STATUS_STYLE[complaint.status]}`}>
          {complaint.status}
        </span>
      </div>
      <p className="mt-2 text-base leading-relaxed text-primary-navy">{complaint.content}</p>
      {complaint.managerReply && (
        <div className="mt-3 rounded-lg bg-bg-panel p-3">
          <p className="text-caption font-bold text-text-light">관리사무소 답변</p>
          <p className="mt-1 text-base leading-relaxed text-text-gray">{complaint.managerReply}</p>
        </div>
      )}
      <p className="mt-2 text-caption text-text-light">{complaint.createdAt}</p>
    </div>
  )
}
