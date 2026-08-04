interface MetricCardProps {
  label: string
  value: string
  unit?: string
}

export default function MetricCard({ label, value, unit }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-border-gray bg-bg-panel p-4">
      <p className="text-caption font-medium text-text-light">{label}</p>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-primary-navy">{value}</span>
        {unit && <span className="text-base text-text-gray">{unit}</span>}
      </div>
    </div>
  )
}
