import { Bot, Folder, Mic } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkMainProps {
  onNavigate?: (key: string) => void
}

const tabs = ['产品运营', '市场销售', '财务']

const cards = [
  { emoji: '📄', title: '撰写 PRD', desc: '基于需求讨论或会议纪要，生成结构化产品需求文档' },
  { emoji: '🔍', title: '竞品分析', desc: '抓取竞品动态，对比功能差异，输出分析报告' },
  { emoji: '💬', title: '用户反馈洞察', desc: '汇总用户反馈，提炼高频痛点，生成需求建议' },
  { emoji: '📅', title: '迭代周报', desc: '汇总本周进展与阻塞，自动生成结构化周报' },
  { emoji: '🗺️', title: '版本规划', desc: '梳理需求池，按优先级排列，输出版本 Roadmap' },
  { emoji: '✨', title: '产品亮点提炼', desc: '从功能列表中提炼差异化价值，生成对外话术' },
]

export function CoworkMain({ onNavigate }: CoworkMainProps) {
  return (
    <div className="w-[1440px] h-[899px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="new" onNavigate={onNavigate as any} />

        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full">
          <div className="flex-1 flex flex-col items-center justify-center px-10 gap-7 overflow-auto py-10">
            {/* Hero */}
            <div className="flex flex-col items-center gap-3.5">
              <div className="w-14 h-14 bg-[#0a0a0a] rounded-[14px] flex items-center justify-center">
                <Bot size={28} className="text-[#fafafa]" />
              </div>
              <h1 className="text-4xl font-bold text-[#0a0a0a] leading-[1.3] font-['Noto_Sans_SC']">
                不止聊天，搞定任务
              </h1>
              <p className="text-[15px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">
                安全、可靠、专业、随时的 AI 工作伙伴
              </p>
            </div>

            {/* Input */}
            <div className="w-[780px] bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[20px_22px] flex flex-col gap-6">
              <p className="text-base text-[#737373] leading-[1.2] font-['Noto_Sans_SC']">有什么可以帮你的？</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 bg-[#f5f5f5] rounded-lg px-2.5 py-1.5 cursor-pointer">
                  <Folder size={16} className="text-[#737373]" />
                  <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.2]">工作区</span>
                </div>
                <Mic size={20} className="text-[#737373] cursor-pointer" />
              </div>
            </div>

            {/* Tabs + Cards */}
            <div className="w-[780px] flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {tabs.map((tab, i) => (
                  <div key={tab} className={`flex items-center rounded-md px-3.5 py-1.5 cursor-pointer ${i === 0 ? 'bg-[#f5f5f5]' : ''}`}>
                    <span className={`text-[13px] font-['Noto_Sans_SC'] ${i === 0 ? 'text-[#0a0a0a] font-medium' : 'text-[#737373]'}`}>
                      {tab}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {[cards.slice(0, 3), cards.slice(3)].map((row, ri) => (
                  <div key={ri} className="flex gap-3">
                    {row.map((card) => (
                      <div key={card.title} className="flex-1 bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[16px_18px] flex flex-col gap-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-[20px] leading-none">{card.emoji}</span>
                          <span className="text-sm font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">{card.title}</span>
                        </div>
                        <p className="text-[12px] text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
