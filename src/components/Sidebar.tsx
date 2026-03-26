import { Plus, CalendarCheck, Shapes, Plug, Briefcase } from 'lucide-react'
import { WindowControls } from './WindowControls'

type NavKey = 'new' | 'scheduled' | 'workspace' | 'skills' | 'connector'

interface SidebarProps {
  activeItem?: NavKey
  onNavigate?: (key: NavKey) => void
}

const recentTasks = [
  '整理本周会议纪要并归档',
  '生成Q2季度销售数据报表',
  '批量重命名合同扫描件',
]

export function Sidebar({ activeItem = 'new', onNavigate }: SidebarProps) {
  const navItems: { key: NavKey; icon: React.ReactNode; label: string; bold?: boolean }[] = [
    { key: 'new', icon: <Plus size={18} className="text-[#0a0a0a]" />, label: '新任务', bold: true },
    { key: 'scheduled', icon: <CalendarCheck size={18} className="text-[#737373]" />, label: '定时任务' },
    { key: 'workspace', icon: <Briefcase size={18} className="text-[#737373]" />, label: '工作区' },
    { key: 'skills', icon: <Shapes size={18} className="text-[#737373]" />, label: '技能' },
    { key: 'connector', icon: <Plug size={18} className="text-[#737373]" />, label: '连接器' },
  ]

  return (
    <div className="w-[260px] h-full flex flex-col bg-transparent px-4 pb-3 shrink-0">
      <WindowControls />

      {/* Nav Items */}
      <div className="flex flex-col w-full gap-0">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate?.(item.key)}
            className={`flex items-center gap-2.5 rounded-md p-2 w-full text-left cursor-pointer ${
              activeItem === item.key ? 'bg-[#f5f5f5]' : ''
            }`}
          >
            {item.icon}
            <span
              className={`text-base text-[#0a0a0a] leading-[1.5] font-["Noto_Sans_SC"] ${
                item.bold ? 'font-semibold' : 'font-normal'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Divider label */}
      <div className="pt-5 pb-1 px-2">
        <span className="text-xs font-medium text-[#737373] leading-[1.4] font-['Noto_Sans_SC']">最近任务</span>
      </div>

      {/* Task History */}
      <div className="flex flex-col w-full flex-1 overflow-hidden">
        {recentTasks.map((task, i) => (
          <div key={i} className="flex items-center rounded-md py-1.5 px-2 cursor-pointer">
            <span className="text-sm text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">{task}</span>
          </div>
        ))}
      </div>

      {/* Account Bar */}
      <div className="flex items-center gap-2.5 px-2 py-2.5 w-full">
        <div className="w-9 h-9 rounded-[18px] bg-[#171717] flex items-center justify-center shrink-0">
          <span className="text-[#fafafa] text-[15px] font-semibold font-['Noto_Sans_SC']">李</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">李明</span>
          <span className="text-xs text-[#737373] leading-[1.3] font-['Noto_Sans_SC']">科大讯飞</span>
        </div>
      </div>
    </div>
  )
}
