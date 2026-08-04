import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PlusCircle } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import ComplaintCard from '../components/ComplaintCard'
import ComplaintForm from '../components/ComplaintForm'
import { complaints as initialComplaints } from '../data/complaints'
import type { Complaint, ComplaintCategory } from '../types'

let nextId = 100

export default function Complaints() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints)
  const [formOpen, setFormOpen] = useState(searchParams.get('new') === '1')

  const openForm = () => {
    setFormOpen(true)
    setSearchParams({}, { replace: true })
  }

  const closeForm = () => {
    setFormOpen(false)
    setSearchParams({}, { replace: true })
  }

  const handleSubmit = (input: { category: ComplaintCategory; facilityName: string; content: string }) => {
    const newComplaint: Complaint = {
      id: `C-NEW-${nextId++}`,
      category: input.category,
      facilityName: input.facilityName,
      content: input.content,
      status: '접수완료',
      createdAt: new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    }
    setComplaints((prev) => [newComplaint, ...prev])
    closeForm()
  }

  return (
    <div className="flex flex-col gap-4 p-5">
      <PageHeader title="민원·신고" subtitle="불편한 점을 관리사무소에 알려주세요." />

      <button
        onClick={openForm}
        className="flex items-center justify-center gap-2 rounded-lg bg-primary-blue py-4 text-base font-bold text-white transition-colors hover:bg-primary-navy"
      >
        <PlusCircle size={20} />
        새 민원 작성
      </button>

      <div className="flex flex-col gap-3">
        {complaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>

      <ComplaintForm open={formOpen} onClose={closeForm} onSubmit={handleSubmit} />
    </div>
  )
}
