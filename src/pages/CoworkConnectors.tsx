import { Mail } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkConnectorsProps {
  onNavigate?: (key: string) => void
}

interface ConnectorItem {
  logo: string
  name: string
  desc: string
  added: boolean
}

const connectors: ConnectorItem[] = [
  { logo: '📄', name: '飞书文档', desc: '连接飞书文档，AI 可自动读取、搜索和引用团队知识库内容。', added: true },
  { logo: '📧', name: '邮箱', desc: '连接企业邮箱，AI 可自动收发邮件、提取关键信息并生成摘要。', added: true },
  { logo: '💼', name: '销帮帮 CRM', desc: '连接销帮帮 CRM，AI 可自动查询客户、商机和订单数据。', added: true },
  { logo: '🔗', name: '纷享销客 CRM', desc: '连接纷享销客 CRM，AI 可自动同步客户关系与销售漏斗数据。', added: true },
  { logo: '💰', name: '分贝通费控', desc: '连接分贝通费控系统，AI 可自动查询报销、费用审批等财务数据。', added: false },
  { logo: '📑', name: '一诺合同', desc: '连接一诺合同管理系统，AI 可自动检索合同条款与到期提醒。', added: false },
  { logo: '☁️', name: '简道云', desc: '连接简道云低代码平台，AI 可自动读取表单数据与流程状态。', added: true },
]

export function CoworkConnectors({ onNavigate }: CoworkConnectorsProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="connector" onNavigate={onNavigate as any} />

        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full p-8 gap-5">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']">连接器</h1>
            <p className="text-sm text-[#737373] font-['Noto_Sans_SC']">打通数据孤岛，为工作赋能提效</p>
          </div>

          {/* Cards Grid */}
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col gap-4">
              {Array.from({ length: Math.ceil(connectors.length / 2) }, (_, ri) => (
                <div key={ri} className="flex gap-4">
                  {connectors.slice(ri * 2, ri * 2 + 2).map((conn) => (
                    <div key={conn.name} className="flex-1 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[14px] p-4 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center text-[18px]">
                            {conn.logo === '📧' ? <Mail size={18} className="text-[#737373]" /> : conn.logo}
                          </div>
                          <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{conn.name}</span>
                          {conn.added && (
                            <div className="flex items-center gap-1 bg-[#E8F5E9] rounded-full px-2 py-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                              <span className="text-[11px] text-[#4CAF50] font-['Noto_Sans_SC']">已添加</span>
                            </div>
                          )}
                        </div>
                        <button className="flex items-center justify-center border border-[#e5e5e5] rounded-md px-4 py-1.5 bg-white text-sm text-[#0a0a0a] font-['Noto_Sans_SC'] cursor-pointer shadow-sm">
                          {conn.added ? '查看配置' : '添加'}
                        </button>
                      </div>
                      <p className="text-sm text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">{conn.desc}</p>
                    </div>
                  ))}
                  {connectors.slice(ri * 2, ri * 2 + 2).length === 1 && <div className="flex-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
