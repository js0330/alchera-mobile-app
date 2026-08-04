import type { ReactNode } from 'react'
import StatusBar from './StatusBar'
import BottomNav from './BottomNav'

interface MobileLayoutProps {
  children: ReactNode
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e7e9f2] py-8">
      <div className="flex h-[880px] w-[402px] flex-col overflow-hidden rounded-[2.5rem] border-8 border-primary-navy bg-bg-white shadow-2xl">
        <StatusBar />
        <div className="relative flex-1 overflow-y-auto bg-bg-white">{children}</div>
        <BottomNav />
      </div>
    </div>
  )
}
