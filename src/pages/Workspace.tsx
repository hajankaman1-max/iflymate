import { Plus } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface WorkspaceProps {
  onNavigate?: (key: string) => void
}

interface WorkspaceCard {
  emoji: string
  title: string
  tasks: { text: string; action?: string; actionKey?: string; running?: boolean }[]
}

const workspaces: WorkspaceCard[] = [
  {
    emoji: '📋',
    title: 'iflyclaw 产品项目',
    tasks: [
      { text: '撰写「条款抽取 v2.0」PRD 中...', action: '前往处理 →', actionKey: 'workspace-detail', running: true },
      { text: '金融场景产品方案待确认关键指标' },
    ],
  },
  {
    emoji: '✍️',
    title: 'iflywriter 产品项目',
    tasks: [
      { text: '竞品续写功能对标分析已完成', action: '查看结果 →' },
      { text: '1,842 条用户反馈聚类分析中...', running: true },
    ],
  },
  {
    emoji: '🎙️',
    title: '智能语音助手',
    tasks: [
      { text: 'v3.1 需求拆解待确认优先级', action: '前往处理 →' },
      { text: '方言识别可行性评估已完成', action: '查看结果 →' },
    ],
  },
  {
    emoji: '📚',
    title: '星火知识库',
    tasks: [
      { text: '灰度上线方案已生成', action: '前往确认 →' },
      { text: '权限隔离需求规格梳理中...', running: true },
    ],
  },
  {
    emoji: '🏫',
    title: '智慧教育平台',
    tasks: [
      { text: '学情报告需补充评估结论', action: '前往处理 →' },
      { text: 'v5.0 迭代路线图规划中...', running: true },
    ],
  },
  {
    emoji: '🔧',
    title: '行业大师',
    tasks: [
      { text: '产品需求文档编写已完成', action: '查看结果 →' },
      { text: '模板拆分方案待确认范围', action: '前往处理 →' },
    ],
  },
]

export function Workspace({ onNavigate }: WorkspaceProps) {
  return (
    <div className="w-[1440px] h-[899px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="workspace" onNavigate={onNavigate as any} />

        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full p-8 gap-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']">工作区</h1>
            <button
              onClick={() => onNavigate?.('scene-templates')}
              className="flex items-center gap-1.5 bg-[#0a0a0a] rounded-lg px-4 py-2 cursor-pointer"
            >
              <Plus size={16} className="text-[#fafafa]" />
              <span className="text-sm font-medium text-[#fafafa] font-['Noto_Sans_SC']">新建</span>
            </button>
          </div>

          {/* Grid */}
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col gap-4">
              {[workspaces.slice(0, 3), workspaces.slice(3)].map((row, ri) => (
                <div key={ri} className="flex gap-4">
                  {row.map((ws) => (
                    <button
                      key={ws.title}
                      onClick={() => onNavigate?.('workspace-detail')}
                      className="flex-1 bg-white border border-[#e5e5e5] rounded-xl p-5 flex flex-col gap-3 text-left cursor-pointer hover:border-[#d0d0d0] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{ws.emoji}</span>
                        <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{ws.title}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {ws.tasks.map((task, ti) => (
                          <div key={ti} className="flex items-start gap-2">
                            <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${task.running ? 'bg-[#2563EB]' : 'bg-[#F59E0B]'}`} />
                            <div className="flex-1 min-w-0">
                              <span className="text-[12.5px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.5]">{task.text}</span>
                              {task.action && (
                                <span className="text-[12.5px] text-[#2563EB] font-['Noto_Sans_SC'] ml-1">{task.action}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </button>
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
