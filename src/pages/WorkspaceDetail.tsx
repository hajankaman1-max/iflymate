import { ArrowLeft, Home, ChevronDown, ChevronRight, Plus, Mic, Edit2, FileText, Globe, Sparkles } from 'lucide-react'
import { WindowControls } from '../components/WindowControls'

interface WorkspaceDetailProps {
  onNavigate?: (key: string) => void
}

const schedItems = [
  { label: '每周迭代进度周报', execs: ['3月24日 - 迭代周报', '3月17日 - 迭代周报', '3月10日 - 迭代周报'] },
  { label: '竞品动态监控', execs: [] },
]

const recentTasks = ['提炼产品亮点', '整理产品侧代办工作', '撰写 PRD 需求文档', '竞品功能对比分析', '用户增长策略头脑风暴']

const recCards = [
  { icon: '📄', title: '撰写 PRD', desc: '基于需求讨论或会议纪要，生成结构化产品需求文档' },
  { icon: '🔍', title: '竞品分析', desc: '抓取竞品动态，对比功能差异，输出分析报告' },
  { icon: '💬', title: '用户反馈洞察', desc: '汇总用户反馈，提炼高频痛点，生成需求建议' },
  { icon: '📅', title: '迭代周报', desc: '汇总本周进展与阻塞，自动生成结构化周报' },
  { icon: '🗺️', title: '版本规划', desc: '梳理需求池，按优先级排列，输出版本 Roadmap' },
  { icon: '✨', title: '产品亮点提炼', desc: '从功能列表中提炼差异化价值，生成对外话术' },
]

const libraryFiles = [
  { icon: '📄', name: 'iflymate-prd', tag: '本地文件' },
  { icon: '📊', name: '竞品分析看板', tag: '飞书文档' },
  { icon: '🗺️', name: '产品路线图 2025', tag: '飞书文档' },
  { icon: '🌐', name: 'Similarweb 流量数据', tag: '网页链接' },
  { icon: '⭐', name: 'G2 Reviews - 竞品评分', tag: '网页链接' },
  { icon: '📝', name: '需求评审会议纪要', tag: '飞书文档' },
]

const outputs = ['iflymate-v2.0-PRD.md', '竞品分析报告-Q1.pdf', '迭代周报-W12.md']

const scheduled = [
  { name: 'Summary', freq: '每周二 9:07' },
  { name: '每周迭代进度周报', freq: '每周一 10:00' },
]

export function WorkspaceDetail({ onNavigate }: WorkspaceDetailProps) {
  return (
    <div className="w-[1440px] h-[899px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        {/* Workspace Sidebar */}
        <div className="w-[260px] h-full flex flex-col bg-transparent px-4 pb-3 shrink-0 overflow-hidden">
          <WindowControls />

          <div className="flex flex-col gap-0.5 w-full">
            <button onClick={() => onNavigate?.('workspace')} className="flex items-center gap-2.5 rounded-md p-2 w-full cursor-pointer">
              <ArrowLeft size={16} className="text-[#0a0a0a]" />
              <span className="text-base font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">返回</span>
            </button>
            <button className="flex items-center gap-2.5 rounded-md p-2 w-full cursor-pointer">
              <Home size={16} className="text-[#737373]" />
              <span className="text-base text-[#737373] font-['Noto_Sans_SC']">首页</span>
            </button>
          </div>

          <div className="pt-4 pb-1 px-2">
            <span className="text-xs font-medium text-[#737373] font-['Noto_Sans_SC']">定时任务</span>
          </div>
          <div className="flex flex-col gap-0.5 w-full">
            {schedItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center gap-1.5 rounded-md py-1.5 px-2 cursor-pointer">
                  <ChevronRight size={14} className="text-[#737373]" />
                  <span className="text-sm text-[#0a0a0a] font-['Noto_Sans_SC']">{item.label}</span>
                </div>
                {item.execs.map((e) => (
                  <div key={e} className="flex items-center rounded-md py-1 pl-7 pr-2 cursor-pointer">
                    <span className="text-[12.5px] text-[#737373] font-['Noto_Sans_SC']">{e}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="pt-4 pb-1 px-2">
            <span className="text-xs font-medium text-[#737373] font-['Noto_Sans_SC']">最近任务</span>
          </div>
          <div className="flex flex-col w-full flex-1 overflow-hidden">
            {recentTasks.map((t, i) => (
              <div key={i} className="flex items-center rounded-md py-1.5 px-2 cursor-pointer">
                <span className="text-sm text-[#737373] font-['Noto_Sans_SC'] truncate">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5 px-2 py-2.5">
            <div className="w-9 h-9 rounded-[18px] bg-[#171717] flex items-center justify-center shrink-0">
              <span className="text-[#fafafa] text-[15px] font-semibold font-['Noto_Sans_SC']">李</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">李明</span>
              <span className="text-xs text-[#737373] font-['Noto_Sans_SC']">科大讯飞</span>
            </div>
          </div>
        </div>

        {/* Right Area */}
        <div className="flex-1 bg-white rounded-2xl flex overflow-hidden h-full">
          {/* Center */}
          <div className="flex-1 flex flex-col items-center justify-center px-10 gap-6 overflow-auto py-10">
            <div className="w-full max-w-[720px] flex flex-col gap-6">
              {/* Title */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']">iflyclaw 产品项目</span>
              </div>

              {/* Input */}
              <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[18px_20px] flex flex-col gap-5">
                <p className="text-base text-[#737373] font-['Noto_Sans_SC']">在工作区内，你想完成什么？</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 bg-[#f5f5f5] rounded-lg px-2.5 py-1.5 cursor-pointer">
                      <Globe size={14} className="text-[#737373]" />
                      <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">iflymate +1</span>
                    </div>
                    <Plus size={18} className="text-[#737373] cursor-pointer" />
                  </div>
                  <Mic size={18} className="text-[#737373] cursor-pointer" />
                </div>
              </div>

              {/* AI Recommend */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#737373]" />
                  <span className="text-[13px] font-medium text-[#737373] font-['Noto_Sans_SC']">AI 推荐</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {[recCards.slice(0, 3), recCards.slice(3)].map((row, ri) => (
                    <div key={ri} className="flex gap-3">
                      {row.map((card) => (
                        <div key={card.title} className="flex-1 bg-white rounded-xl border border-[#e5e5e5] p-[14px_16px] flex flex-col gap-1.5 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="text-[18px] leading-none">{card.icon}</span>
                            <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{card.title}</span>
                          </div>
                          <p className="text-[11.5px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.5]">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-[280px] shrink-0 bg-[#f5f5f5] flex flex-col px-4 py-5 gap-4 overflow-auto" style={{ borderLeft: '1px solid #e5e5e5' }}>
            {/* Background */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">背景设定</span>
                <div className="flex items-center gap-2">
                  <Edit2 size={14} className="text-[#737373] cursor-pointer" />
                  <ChevronDown size={14} className="text-[#737373]" />
                </div>
              </div>
              <p className="text-[12px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.6]">
                产品背景{'\n'}当前负责产品：iflyclaw{'\n'}目标用户：企业级客户{'\n'}核心价值主张：AI驱动的智能协作
              </p>
              <span className="text-[12px] text-[#737373] font-['Noto_Sans_SC'] cursor-pointer">显示更多</span>
            </div>

            <div className="w-full h-px bg-[#e5e5e5]" />

            {/* Library */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">资料库</span>
                <div className="flex items-center gap-2">
                  <Plus size={14} className="text-[#737373] cursor-pointer" />
                  <ChevronDown size={14} className="text-[#737373]" />
                </div>
              </div>
              {libraryFiles.map((f) => (
                <div key={f.name} className="flex items-center gap-2 py-0.5">
                  <span className="text-sm shrink-0">{f.icon}</span>
                  <span className="text-[12.5px] text-[#0a0a0a] font-['Noto_Sans_SC'] flex-1 truncate">{f.name}</span>
                  <span className="text-[11px] text-[#737373] font-['Noto_Sans_SC'] shrink-0">{f.tag}</span>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-[#e5e5e5]" />

            {/* Outputs */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">输出产物</span>
                <ChevronDown size={14} className="text-[#737373]" />
              </div>
              {outputs.map((o) => (
                <div key={o} className="flex items-center gap-2 py-0.5">
                  <FileText size={14} className="text-[#737373] shrink-0" />
                  <span className="text-[12.5px] text-[#0a0a0a] font-['Noto_Sans_SC'] truncate">{o}</span>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-[#e5e5e5]" />

            {/* Scheduled */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">定时任务</span>
                <div className="flex items-center gap-2">
                  <Plus size={14} className="text-[#737373] cursor-pointer" />
                  <ChevronDown size={14} className="text-[#737373]" />
                </div>
              </div>
              {scheduled.map((s) => (
                <div key={s.name} className="flex items-center justify-between py-0.5">
                  <div className="flex flex-col">
                    <span className="text-[12.5px] text-[#0a0a0a] font-['Noto_Sans_SC']">{s.name}</span>
                    <span className="text-[11px] text-[#737373] font-['Noto_Sans_SC']">{s.freq}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-[#e5e5e5]" />

            {/* Memory */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">记忆</span>
                <ChevronDown size={14} className="text-[#737373]" />
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <span className="text-sm">💡</span>
                <span className="text-[12px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.5]">团队偏好简洁的 PRD 模板格式</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
