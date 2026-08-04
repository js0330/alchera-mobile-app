import { Signal, Wifi, BatteryFull } from 'lucide-react'

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between bg-primary-navy px-6 pb-2 pt-3 text-white">
      <span className="text-caption font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={14} />
        <Wifi size={14} />
        <BatteryFull size={16} />
      </div>
    </div>
  )
}
