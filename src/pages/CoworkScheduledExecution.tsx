import { ChevronDown, ChevronRight, Copy, ThumbsUp, ThumbsDown, Globe, FileText, Mic } from 'lucide-react'
import { WindowControls } from '../components/WindowControls'

interface CoworkScheduledExecutionProps {
  onNavigate?: (key: string) => void
}

const taskHistory = [
  { label: '每日新闻', items: ['3月20日 – 每日新闻', '3月19日 – 每日新闻', '3月18日 – 每日新闻'] },
]

const recentTasks = ['扫描下载目录大文件', '整理本周会议纪要并归档', '生成Q2季度销售数据报表']

export function CoworkScheduledExecution({ onNavigate }: CoworkScheduledExecutionProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        {/* Specialized Sidebar */}
        <div className="w-[260px] h-full flex flex-col bg-transparent px-4 pb-3 shrink-0 overflow-hidden">
          <WindowControls />

          <div className="pt-2 pb-1 px-2">
            <span className="text-xs font-medium text-[#737373] font-['Noto_Sans_SC']">定时任务</span>
          </div>
          {taskHistory.map((group) => (
            <div key={group.label} className="flex flex-col">
              <div className="flex items-center gap-1.5 rounded-md py-1.5 px-2 cursor-pointer">
                <ChevronDown size={14} className="text-[#737373]" />
                <span className="text-sm font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">{group.label}</span>
              </div>
              {group.items.map((item) => (
                <div key={item} className={`flex items-center rounded-md py-1.5 pl-7 pr-2 cursor-pointer ${item === '3月20日 – 每日新闻' ? 'bg-[#f5f5f5]' : ''}`}>
                  <span className="text-[12.5px] text-[#737373] font-['Noto_Sans_SC']">{item}</span>
                </div>
              ))}
            </div>
          ))}

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
          {/* Chat Column */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 px-6 h-[52px] border-b border-[#e5e5e5] shrink-0">
              <span className="text-[15px] font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">3月20日 – 每日新闻</span>
              <ChevronDown size={16} className="text-[#737373]" />
            </div>

            <div className="flex-1 flex flex-col gap-5 px-10 py-8 overflow-auto">
              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-xl px-4 py-3 cursor-pointer">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">执行定时任务：每日新闻</span>
                <ChevronRight size={14} className="text-[#737373] ml-auto" />
              </div>

              <p className="text-[15px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.6]">
                现在让我将每日新闻报告创建为 Markdown 文件。
              </p>

              <p className="text-[15px] font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">今日中美 AI 热点 Top 10 已整理完毕！</p>

              <p className="text-[15px] text-[#0a0a0a] font-['Noto_Sans_SC'] leading-[1.7]">
                美国亮点：AMI Labs 完成 10.3 亿美元种子轮（AI 史上最大）、GPT-5.4 发布、ChatGPT 周活达 9 亿、Meta 四代自研芯片路线图、Anthropic 遭五角大楼黑名单事件
              </p>
              <p className="text-[15px] text-[#0a0a0a] font-['Noto_Sans_SC'] leading-[1.7]">
                中国亮点：中国 API 调用量首超美国、"十五五"规划定 AI 产业 10 万亿目标、AI 智能体岗位需求暴涨 455%、八部门"人工智能+制造"行动、OPC 一人公司模式兴起。
              </p>

              <div className="flex flex-col gap-1.5 pl-3 border-l-2 border-[#e5e5e5]">
                <span className="text-[13px] font-medium text-[#737373] font-['Noto_Sans_SC']">Sources:</span>
                {['tech3point.ro – Top Tech News March 19, 2025', 'Economist.ai – Latest AI News', 'LLM Daily – AI News March 21-2126'].map((s) => (
                  <a key={s} href="#" className="text-[13px] text-[#2563EB] font-['Noto_Sans_SC']">· {s}</a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Copy size={16} className="text-[#737373] cursor-pointer" />
                <ThumbsUp size={16} className="text-[#737373] cursor-pointer" />
                <ThumbsDown size={16} className="text-[#737373] cursor-pointer" />
              </div>
            </div>

            <div className="px-6 py-4 pb-5 flex items-center justify-center">
              <div className="w-[680px] bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] px-5 py-4 flex flex-col gap-4">
                <span className="text-[15px] text-[#737373] font-['Noto_Sans_SC']">回复...</span>
                <div className="flex items-center justify-between">
                  <Globe size={16} className="text-[#737373]" />
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">DeepSeek 3.1</span>
                    <Mic size={16} className="text-[#737373]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-[280px] shrink-0 bg-[#f5f5f5] flex flex-col px-4 py-5 gap-3 overflow-auto" style={{ borderLeft: '1px solid #e5e5e5' }}>
            <div className="flex flex-col gap-2 pb-4 border-b border-[#e5e5e5]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">进度</span>
                <ChevronDown size={16} className="text-[#737373]" />
              </div>
              {['抓取行业资讯源数据', 'AI 分析与评分', '汇总生成每日资讯报告'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                  <span className="text-[12.5px] text-[#737373] font-['Noto_Sans_SC']">{t}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 pb-4 border-b border-[#e5e5e5]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">工作文件夹</span>
                <ChevronDown size={16} className="text-[#737373]" />
              </div>
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-[#737373]" />
                <span className="text-[12.5px] text-[#0a0a0a] font-['Noto_Sans_SC']">daily-news-2026-03-20.md</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">上下文</span>
              <span className="text-[11px] font-medium text-[#737373] font-['Noto_Sans_SC']">连接器</span>
              {['每日新闻', '行业资讯源'].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <Globe size={14} className="text-[#737373]" />
                  <span className="text-[12.5px] text-[#0a0a0a] font-['Noto_Sans_SC']">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
