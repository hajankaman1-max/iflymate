import { ChevronDown, ChevronRight, Globe, FileText, Mic } from 'lucide-react'
import { WindowControls } from '../components/WindowControls'

interface CoworkScheduledIndustryNewsExecutionProps {
  onNavigate?: (key: string) => void
}

const taskHistory = [
  { label: '白糖产业每日资讯', items: ['3月18日 – 白糖产业每日资讯', '3月17日 – 白糖产业每日资讯', '3月16日 – 白糖产业每日资讯'] },
]

const recentTasks = ['扫描下载目录大文件', '整理本周会议纪要并归档', '生成Q2季度销售数据报表']

interface NewsItem {
  title: string
  summary: string
  tag: string
  time: string
  score: number
}

const newsItems: NewsItem[] = [
  {
    title: '大同经开区国家级零碳园区建设实施意见印发',
    summary: 'AI总结：大同市印发《支持大同经开区建设国家级零碳园区的实施意见》，明确以近零碳、净零碳为导向，力争2028年底前全面建成绿色能源结构、初步形成绿色低碳产业体系。',
    tag: '天然气分布式能源',
    time: '18:25',
    score: 110,
  },
  {
    title: '美国与印太国家达成560亿美元能源交易 液化天然气领域突出',
    summary: 'AI总结：美国在印太能源安全峰会上与17国达成超560亿美元私营部门能源投资协议，重点推进液化天然气合作：Venture Global就CP2项目作出86亿美元最终投资决定。',
    tag: '海外油气',
    time: '18:24',
    score: 100,
  },
  {
    title: '东北石油大学最新获奖2项！',
    summary: 'AI总结：东北石油大学在第十七届中国产学研合作创新大会获两项大奖：党委书记付晓飞获中国产学研合作创新人物奖；侯立东教授牵头成果获创新成果一等奖。',
    tag: '石油石化科技与数字创新资讯',
    time: '18:23',
    score: 80,
  },
  {
    title: '三部门：开展掺氢燃烧试点',
    summary: 'AI总结：三部门联合开展氢能综合应用试点工作，以城市群为单位，重点推进燃料电池汽车、绿色氨醇、氢基化工替代、氢冶金及掺氢燃烧等多元应用。目标到2030年实现终端用氢价格低于25元/千克。',
    tag: '天然气分布式能源',
    time: '18:23',
    score: 150,
  },
  {
    title: '新疆油田天山气田累产工业天然气超10亿立方米',
    summary: 'AI总结：截至3月15日，中国石油新疆油田天山气田累产工业天然气超10亿立方米。该气田自2021年2月投产以来，攻克超深、超高压碎屑岩凝析气藏开发难题，日产气突破160万立方米。',
    tag: '石油石化科技与数字创新资讯',
    time: '18:23',
    score: 100,
  },
]

export function CoworkScheduledIndustryNewsExecution({ onNavigate }: CoworkScheduledIndustryNewsExecutionProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[260px] h-full flex flex-col bg-transparent px-4 pb-3 shrink-0 overflow-hidden">
          <WindowControls />

          <div className="pt-2 pb-1 px-2">
            <span className="text-xs font-medium text-[#737373] font-['Noto_Sans_SC']">行业资讯订阅</span>
          </div>
          {taskHistory.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-1.5 rounded-md py-1.5 px-2 cursor-pointer">
                <ChevronDown size={14} className="text-[#737373]" />
                <span className="text-sm font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">{group.label}</span>
              </div>
              {group.items.map((item) => (
                <div key={item} className={`flex items-center rounded-md py-1.5 pl-7 pr-2 cursor-pointer ${item === '3月18日 – 白糖产业每日资讯' ? 'bg-[#f5f5f5]' : ''}`}>
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

        {/* Right */}
        <div className="flex-1 bg-white rounded-2xl flex overflow-hidden h-full">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 px-6 h-[52px] border-b border-[#e5e5e5] shrink-0">
              <span className="text-[15px] font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">3月18日 – 白糖产业每日资讯</span>
              <ChevronDown size={16} className="text-[#737373]" />
            </div>

            <div className="flex-1 flex flex-col gap-4 px-10 py-6 overflow-auto">
              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-xl px-4 py-3 cursor-pointer">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">执行定时任务：白糖产业每日资讯</span>
                <ChevronRight size={14} className="text-[#737373] ml-auto" />
              </div>

              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-xl px-4 py-3 cursor-pointer">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">已搜索行业资讯源、抓取公众号文章、分析评分</span>
                <ChevronRight size={14} className="text-[#737373] ml-auto" />
              </div>

              <p className="text-[15px] text-[#737373] font-['Noto_Sans_SC']">已完成白糖产业每日资讯的抓取与分析，以下是 2026-03-18 的行业动态汇总：</p>

              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-xl px-4 py-3 cursor-pointer">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">已汇总资讯、生成报告文件</span>
                <ChevronRight size={14} className="text-[#737373] ml-auto" />
              </div>

              <p className="text-lg font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">2026-03-18 白糖产业每日资讯</p>

              {newsItems.map((news, i) => (
                <div key={i} className="flex flex-col gap-2 pb-4 border-b border-[#f0f0f0]">
                  <p className="text-[14px] font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{news.title}</p>
                  <p className="text-[13px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.6]">{news.summary}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span className="text-[12px] text-[#2563EB] font-['Noto_Sans_SC']">{news.tag}</span>
                    </div>
                    <span className="text-[12px] text-[#737373] font-['Noto_Sans_SC']">{news.time}</span>
                    <span className="text-[12px] text-[#737373] font-['Noto_Sans_SC']">{news.score}分</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 pb-5 flex items-center justify-center">
              <div className="w-[680px] bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] px-5 py-4 flex flex-col gap-4">
                <span className="text-[15px] text-[#737373] font-['Noto_Sans_SC']">回复...</span>
                <div className="flex items-center justify-between">
                  <Globe size={16} className="text-[#737373]" />
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">Opus 4.6</span>
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
                <span className="text-[12.5px] text-[#0a0a0a] font-['Noto_Sans_SC']">sugar-industry-2026-03-18.md</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">上下文</span>
              <span className="text-[11px] font-medium text-[#737373] font-['Noto_Sans_SC']">连接器</span>
              {['白糖产业每日资讯', '行业资讯源'].map((c) => (
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
