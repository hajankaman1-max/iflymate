import { Plus, Info, X, ChevronDown, Check } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkScheduledNewTaskTemplateProps {
  onNavigate?: (key: string) => void
}

const templates = [
  {
    title: '豆油产业每日资讯',
    desc: '每日自动汇总豆油产业链动态、价格走势与市场分析',
    selected: true,
  },
  {
    title: '白糖产业每日资讯',
    desc: '每日自动汇总白糖产业链动态、价格走势与市场分析',
    selected: false,
  },
  {
    title: '豆粕产业每日资讯',
    desc: '每日自动汇总豆粕产业链动态、价格走势与市场分析',
    selected: false,
  },
]

export function CoworkScheduledNewTaskTemplate({ onNavigate }: CoworkScheduledNewTaskTemplateProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl relative">
      {/* Background */}
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="scheduled" onNavigate={onNavigate as any} />
        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full">
          <div className="flex items-center justify-between px-10 pt-8 w-full">
            <h1 className="text-[28px] font-bold text-[#0a0a0a] leading-[1.3] font-['Noto_Sans_SC']">定时任务</h1>
            <button className="flex items-center gap-1.5 bg-[#0a0a0a] rounded-lg px-4 py-2">
              <Plus size={16} className="text-[#fafafa]" />
              <span className="text-sm font-medium text-[#fafafa] font-['Noto_Sans_SC']">新建任务</span>
            </button>
          </div>
          <div className="px-10 pt-2 w-full">
            <p className="text-sm text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
              按计划运行任务，或在你需要时随时执行。在任意任务中输入 /schedule 即可设置。
            </p>
          </div>
          <div className="px-10 pt-4 w-full">
            <div className="flex items-center justify-between bg-[#f5f5f5] rounded-[10px] border border-[#e5e5e5] px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <Info size={16} className="text-[#737373] shrink-0" />
                <span className="text-[13px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">
                  定时任务将在有效期前发送邮件和弹幕提示完成进度说明。
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">自动续期</span>
                <div className="w-9 h-5 bg-[#171717] rounded-full flex justify-end items-center p-0.5">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
          {/* Empty State */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <div className="relative w-[100px] h-[100px]">
              <div className="absolute w-[72px] h-[72px] rounded-full border-[2.5px] border-[#e5e5e5]" style={{ left: 14, top: 18 }} />
              <div className="absolute w-[2.5px] h-[18px] bg-[#e5e5e5] rounded-sm" style={{ left: 49, top: 32 }} />
              <div className="absolute w-4 h-[2.5px] bg-[#e5e5e5] rounded-sm" style={{ left: 50, top: 48 }} />
              <div className="absolute w-6 h-1.5 bg-[#e5e5e5] rounded-[3px]" style={{ left: 38, top: 8 }} />
              <div className="absolute w-[2.5px] h-3 bg-[#e5e5e5] rounded-sm rotate-[30deg]" style={{ left: 22, top: 82 }} />
              <div className="absolute w-[2.5px] h-3 bg-[#e5e5e5] rounded-sm -rotate-[30deg]" style={{ left: 76, top: 82 }} />
            </div>
            <span className="text-base text-[#737373] font-['Noto_Sans_SC']">暂无定时任务</span>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="absolute inset-0 bg-black/25 rounded-2xl" />

      {/* Dialog */}
      <div
        className="absolute bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.13)] overflow-hidden flex flex-col"
        style={{ width: 700, left: 370, top: 80, maxHeight: 740 }}
      >
        {/* Header */}
        <div className="flex flex-col px-8 pt-6 pb-0 gap-4 shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">新建定时任务</span>
            <button onClick={() => onNavigate?.('scheduled')} className="w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <X size={20} className="text-[#737373]" />
            </button>
          </div>
          {/* Tabs */}
          <div className="flex border-b border-[#e5e5e5]">
            <button
              onClick={() => onNavigate?.('scheduled-new')}
              className="px-5 py-2.5 text-sm text-[#737373] font-['Noto_Sans_SC'] cursor-pointer"
            >
              空白新建
            </button>
            <div className="px-5 py-2.5 text-sm font-medium text-[#0a0a0a] font-['Noto_Sans_SC'] border-b-2 border-[#0a0a0a] -mb-px cursor-pointer">
              模版新建
            </div>
          </div>
        </div>

        {/* Template Content */}
        <div className="flex-1 overflow-auto px-8 py-5 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">产业资讯订阅</span>
            <div className="flex gap-3">
              {templates.map((tmpl) => (
                <div
                  key={tmpl.title}
                  className={`flex-1 rounded-xl p-4 flex flex-col gap-2 cursor-pointer border ${
                    tmpl.selected ? 'border-[#0a0a0a] bg-[#f5f5f5]' : 'border-[#e5e5e5] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${tmpl.selected ? 'bg-[#0a0a0a]' : 'bg-[#e5e5e5]'}`} />
                      <span className="text-[13px] font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">{tmpl.title}</span>
                    </div>
                    {tmpl.selected && <Check size={14} className="text-[#0a0a0a]" />}
                  </div>
                  <p className="text-[12px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.5]">{tmpl.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Config */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">频率</span>
              <div className="flex items-center justify-between border border-[#e5e5e5] rounded-md px-3 py-2.5 cursor-pointer">
                <span className="text-sm text-[#0a0a0a] font-['Inter']">Every day at 09:00</span>
                <ChevronDown size={16} className="text-[#737373]" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 border border-[#e5e5e5] rounded-md px-3 py-2.5 cursor-pointer">
              <span className="text-sm text-[#0a0a0a] font-['Noto_Sans_SC']">更多选项</span>
              <ChevronDown size={16} className="text-[#737373]" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-8 py-4 border-t border-[#f5f5f5] shrink-0">
          <button onClick={() => onNavigate?.('scheduled')} className="border border-[#e5e5e5] rounded-md px-5 py-2 text-sm text-[#0a0a0a] font-['Noto_Sans_SC'] cursor-pointer">
            取消
          </button>
          <button className="bg-[#0a0a0a] rounded-md px-5 py-2 text-sm text-white font-['Noto_Sans_SC'] cursor-pointer">
            保存
          </button>
        </div>
      </div>
    </div>
  )
}
