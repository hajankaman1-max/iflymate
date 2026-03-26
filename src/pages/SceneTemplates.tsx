import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface SceneTemplatesProps {
  onNavigate?: (key: string) => void
}

const tabs = ['全部', '产品研发', '销售客服', '财务行政', '人力资源', '市场运营']

interface TemplateCard {
  emoji: string
  title: string
  sub: string
  context: string
  output: string
}

const templates: TemplateCard[] = [
  {
    emoji: '📋',
    title: '产品经理工作区',
    sub: '围绕「产品」· PRD · 竞品分析 · 用户反馈',
    context: '上下文: 需求文档、竞品资料、用户画像',
    output: '产物: PRD、分析报告、版本规划',
  },
  {
    emoji: '📊',
    title: '项目经理工作区',
    sub: '围绕「项目」· 里程碑 · 风险跟踪 · 进度汇报',
    context: '上下文: 项目计划、站会记录、资源表',
    output: '产物: 周报、风险清单、会议纪要',
  },
  {
    emoji: '💻',
    title: '研发工程师工作区',
    sub: '围绕「代码库」· Bug修复 · Code Review · 技术方案',
    context: '上下文: 代码仓库、技术文档、API文档',
    output: '产物: 技术方案、变更日志、重构计划',
  },
  {
    emoji: '💼',
    title: '销售工作区',
    sub: '围绕「客户」· 商机跟进 · 方案定制 · 报价',
    context: '上下文: CRM数据、报价单、客户画像',
    output: '产物: 解决方案、跟进记录、竞对分析',
  },
  {
    emoji: '💰',
    title: '财务工作区',
    sub: '围绕「账目」· 预算编制 · 费用审批 · 月结对账',
    context: '上下文: 财务报表、发票、预算表',
    output: '产物: 预算表、审计报告、税务合规文档',
  },
  {
    emoji: '👥',
    title: 'HR 工作区',
    sub: '围绕「人员」· 招聘 · 绩效评估 · 培训计划',
    context: '上下文: 岗位JD、绩效数据、人才库',
    output: '产物: 招聘计划、培训方案、人才盘点',
  },
  {
    emoji: '📢',
    title: '市场营销工作区',
    sub: '围绕「品牌」· 内容策划 · 投放分析 · 活动策划',
    context: '上下文: 品牌手册、投放数据、竞品动态',
    output: '产物: 营销方案、传播素材、SEO报告',
  },
  {
    emoji: '🎧',
    title: '客服工作区',
    sub: '围绕「工单」· 客诉处理 · 知识库 · 满意度',
    context: '上下文: 工单系统、FAQ文档、客户反馈',
    output: '产物: 话术库、问题分析、服务改进方案',
  },
  {
    emoji: '🏢',
    title: '行政运营工作区',
    sub: '围绕「流程」· 采购管理 · 资产盘点 · 合同审批',
    context: '上下文: 采购清单、合同台账、资产表',
    output: '产物: 采购报告、合规文档、运营周报',
  },
]

export function SceneTemplates({ onNavigate }: SceneTemplatesProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="workspace" onNavigate={onNavigate as any} />

        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full p-8 gap-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']">从场景模板创建工作区</h1>
              <p className="text-sm text-[#737373] font-['Noto_Sans_SC']">选择一个企业场景模板，快速创建专属工作区</p>
            </div>
            <button
              onClick={() => onNavigate?.('workspace')}
              className="flex items-center gap-1.5 border border-[#e5e5e5] rounded-lg px-4 py-2 cursor-pointer bg-white"
            >
              <ArrowLeft size={14} className="text-[#737373]" />
              <span className="text-sm text-[#737373] font-['Noto_Sans_SC']">返回</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab, i) => (
              <div key={tab} className={`flex items-center rounded-md px-3.5 py-1.5 cursor-pointer ${i === 0 ? 'bg-[#f5f5f5]' : ''}`}>
                <span className={`text-[13px] font-['Noto_Sans_SC'] ${i === 0 ? 'text-[#0a0a0a] font-medium' : 'text-[#737373]'}`}>
                  {tab}
                </span>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col gap-4">
              {[templates.slice(0, 3), templates.slice(3, 6), templates.slice(6)].map((row, ri) => (
                <div key={ri} className="flex gap-4">
                  {row.map((tmpl) => (
                    <div key={tmpl.title} className="flex-1 bg-white border border-[#e5e5e5] rounded-xl p-5 flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#f5f5f5] rounded-[10px] flex items-center justify-center shrink-0">
                          <span className="text-xl">{tmpl.emoji}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{tmpl.title}</span>
                          <span className="text-[12px] text-[#737373] font-['Noto_Sans_SC']">{tmpl.sub}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[12px] text-[#737373] font-['Noto_Sans_SC']">{tmpl.context}</p>
                        <p className="text-[12px] text-[#737373] font-['Noto_Sans_SC']">{tmpl.output}</p>
                      </div>
                      <button
                        onClick={() => onNavigate?.('workspace-detail')}
                        className="flex items-center justify-between bg-[#0a0a0a] rounded-lg px-4 py-2 cursor-pointer mt-auto"
                      >
                        <span className="text-[13px] font-medium text-white font-['Noto_Sans_SC']">创建工作区</span>
                        <ChevronRight size={14} className="text-white" />
                      </button>
                    </div>
                  ))}
                  {row.length < 3 && Array.from({ length: 3 - row.length }, (_, i) => (
                    <div key={i} className="flex-1" />
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
