import { useState } from 'react'
import { X, Camera } from 'lucide-react'
import { facilities } from '../data/facilities'
import type { ComplaintCategory } from '../types'

const CATEGORIES: ComplaintCategory[] = ['환기 불량', '악취', '소음', '청소 상태', '기타']

interface ComplaintFormProps {
  open: boolean
  onClose: () => void
  onSubmit: (input: { category: ComplaintCategory; facilityName: string; content: string }) => void
}

export default function ComplaintForm({ open, onClose, onSubmit }: ComplaintFormProps) {
  const [category, setCategory] = useState<ComplaintCategory>('환기 불량')
  const [facilityName, setFacilityName] = useState(facilities[0].name)
  const [content, setContent] = useState('')
  const [photoAttached, setPhotoAttached] = useState(false)

  const canSubmit = content.trim().length > 0

  const handleSubmit = () => {
    if (!canSubmit) return
    onSubmit({ category, facilityName, content })
    setContent('')
    setPhotoAttached(false)
  }

  return (
    <div
      className={`absolute inset-0 z-30 transition-opacity duration-300 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-primary-navy/40" onClick={onClose} />
      <div
        className={`absolute bottom-0 left-0 right-0 max-h-[90%] overflow-y-auto rounded-t-3xl bg-bg-white p-5 transition-transform duration-300 ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-card-title text-primary-navy">새 민원·신고 작성</h2>
          <button onClick={onClose} className="rounded-md p-1.5 text-text-gray hover:bg-bg-panel">
            <X size={20} />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-5">
          <div>
            <p className="text-base font-semibold text-primary-navy">어떤 문제인가요?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {CATEGORIES.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-lg border px-4 py-2.5 text-base font-medium transition-colors ${
                    category === item
                      ? 'border-primary-blue bg-primary-blue text-white'
                      : 'border-border-gray bg-bg-white text-text-gray'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-semibold text-primary-navy">어디에서 발생했나요?</p>
            <select
              value={facilityName}
              onChange={(event) => setFacilityName(event.target.value)}
              className="mt-2 w-full rounded-lg border border-border-gray bg-bg-white px-4 py-3 text-base text-primary-navy"
            >
              {facilities.map((facility) => (
                <option key={facility.id} value={facility.name}>
                  {facility.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-base font-semibold text-primary-navy">자세한 내용을 알려주세요</p>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={4}
              placeholder="예) 지하주차장에 들어가면 공기가 답답해요."
              className="mt-2 w-full rounded-lg border border-border-gray bg-bg-white px-4 py-3 text-base text-primary-navy placeholder:text-text-light"
            />
          </div>

          <button
            onClick={() => setPhotoAttached((prev) => !prev)}
            className={`flex items-center justify-center gap-2 rounded-lg border py-3 text-base font-medium transition-colors ${
              photoAttached
                ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                : 'border-border-gray bg-bg-white text-text-gray'
            }`}
          >
            <Camera size={20} />
            {photoAttached ? '사진 1장 첨부됨' : '사진 첨부하기'}
          </button>

          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="rounded-lg bg-primary-blue py-4 text-base font-bold text-white transition-colors hover:bg-primary-navy disabled:cursor-not-allowed disabled:bg-border-gray disabled:text-text-light"
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  )
}
