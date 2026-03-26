import { Search, Plus } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkSkillsProps {
  onNavigate?: (key: string) => void
}

const tabs = ['全部', '办公提效', '产品研发', '营销售前', '合规法务', '财务管理', '供应链', '人力资源']

const skills = [
  { icon: '📊', title: '智能表格处理', desc: '一键处理 Excel 数据报表，公式推导、格式优化与数据透视' },
  { icon: '📑', title: '演示文稿生成', desc: '根据主题自动生成专业 PPT，支持多种行业模板' },
  { icon: '📝', title: '会议纪要生成', desc: '自动整理会议内容，提取关键决策与行动计划' },
  { icon: '📋', title: 'PRD 自动生成', desc: '基于需求描述生成标准产品需求文档，关联历史变更记录' },
  { icon: '🔍', title: '竞品监控分析', desc: '自动采集竞品动态，生成多维度对比报告与策略建议' },
  { icon: '✉️', title: '邮件智能撰写', desc: '根据场景自动起草商务邮件，支持多语言翻译与润色' },
  { icon: '📦', title: '方案组装生成', desc: '根据客户 RFP 自动组装解决方案，关联历史成功案例' },
  { icon: '⚖️', title: '合同条款审查', desc: '智能识别合同风险条款，提供修改建议与合规意见' },
  { icon: '📈', title: '招股书生成', desc: '基于项目上下文分章节生成招股书草稿，自动交叉引用' },
  { icon: '🔢', title: '自动对账核验', desc: '跨系统财务数据自动比对，快速定位差异和错误' },
  { icon: '📉', title: '数据报表生成', desc: '从原始数据自动生成可视化报表，附同比环比分析' },
  { icon: '📦', title: '库存预警分析', desc: '实时监控库存水位，自动触发补货建议与异常预警' },
  { icon: '👥', title: '人才盘点报告', desc: '自动汇总人才数据，生成九宫格盘点与发展建议' },
  { icon: '🤝', title: '供应商评估比价', desc: '多维度对比供应商报价与资质，辅助采购决策' },
  { icon: '📰', title: '研报自动生成', desc: '基于数据与文献自动撰写行业研究报告' },
  { icon: '🧾', title: '税务合规计算', desc: '自动计算增值税、所得税，生成纳税申报建议' },
  { icon: '📄', title: '标书智能撰写', desc: '根据招标文件自动生成投标方案与应答内容' },
  { icon: '🗂️', title: '文档智能摘要', desc: '快速提取长文档核心要点，生成结构化摘要' },
]

export function CoworkSkills({ onNavigate }: CoworkSkillsProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="skills" onNavigate={onNavigate as any} />

        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full p-8 gap-5">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']">技能</h1>
              <p className="text-sm text-[#737373] font-['Noto_Sans_SC']">赋能 AI 更强大的能力</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-3 h-9 w-[220px]">
                <Search size={16} className="text-[#737373]" />
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">搜索技能...</span>
              </div>
              <button className="flex items-center gap-1.5 bg-[#0a0a0a] rounded-lg px-4 h-9 cursor-pointer">
                <Plus size={14} className="text-white" />
                <span className="text-[13px] font-medium text-white font-['Noto_Sans_SC']">安装技能</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 w-full flex-wrap">
            {tabs.map((tab, i) => (
              <div key={tab} className={`flex items-center rounded-md px-3.5 py-1.5 cursor-pointer ${i === 0 ? 'bg-[#f5f5f5]' : ''}`}>
                <span className={`text-[13px] font-['Noto_Sans_SC'] ${i === 0 ? 'text-[#0a0a0a] font-medium' : 'text-[#737373]'}`}>
                  {tab}
                </span>
              </div>
            ))}
          </div>

          {/* Skill Grid */}
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col gap-3.5">
              {Array.from({ length: Math.ceil(skills.length / 3) }, (_, ri) => (
                <div key={ri} className="flex gap-4">
                  {skills.slice(ri * 3, ri * 3 + 3).map((skill) => (
                    <div key={skill.title} className="flex-1 h-[76px] bg-[#f5f5f5] rounded-[10px] px-4 flex items-center gap-3.5 cursor-pointer">
                      <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center shrink-0">
                        <span className="text-xl">{skill.icon}</span>
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{skill.title}</span>
                        <span className="text-xs text-[#737373] font-['Noto_Sans_SC'] leading-[1.4] truncate">{skill.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
