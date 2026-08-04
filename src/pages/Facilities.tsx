import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import FacilityRow from '../components/FacilityRow'
import FacilityDetailSheet from '../components/FacilityDetailSheet'
import { facilities } from '../data/facilities'
import type { Facility } from '../types'

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)

  return (
    <div className="flex flex-col gap-4 p-5">
      <PageHeader title="공용공간 현황" subtitle={`우리 단지 ${facilities.length}곳의 실시간 상태예요.`} />

      <div className="flex flex-col gap-3">
        {facilities.map((facility) => (
          <FacilityRow key={facility.id} facility={facility} onClick={() => setSelectedFacility(facility)} />
        ))}
      </div>

      <FacilityDetailSheet facility={selectedFacility} onClose={() => setSelectedFacility(null)} />
    </div>
  )
}
