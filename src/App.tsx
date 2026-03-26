import { useState } from 'react'
import { CoworkMain } from './pages/CoworkMain'
import { CoworkScheduled } from './pages/CoworkScheduled'
import { CoworkScheduledTaskList } from './pages/CoworkScheduledTaskList'
import { CoworkScheduledNewTask } from './pages/CoworkScheduledNewTask'
import { CoworkScheduledNewTaskTemplate } from './pages/CoworkScheduledNewTaskTemplate'
import { CoworkScheduledExecution } from './pages/CoworkScheduledExecution'
import { CoworkScheduledIndustryNewsExecution } from './pages/CoworkScheduledIndustryNewsExecution'
import { CoworkSkills } from './pages/CoworkSkills'
import { CoworkConnectors } from './pages/CoworkConnectors'
import { CoworkTask } from './pages/CoworkTask'
import { CoworkTaskArtifact } from './pages/CoworkTaskArtifact'
import { RemoteControlConfig } from './pages/RemoteControlConfig'
import { Workspace } from './pages/Workspace'
import { WorkspaceDetail } from './pages/WorkspaceDetail'
import { SceneTemplates } from './pages/SceneTemplates'

type Screen =
  | 'main'
  | 'scheduled'
  | 'scheduled-task-list'
  | 'scheduled-new'
  | 'scheduled-new-template'
  | 'scheduled-execution'
  | 'scheduled-industry-news'
  | 'skills'
  | 'connector'
  | 'task'
  | 'task-artifact'
  | 'remote-control'
  | 'workspace'
  | 'workspace-detail'
  | 'scene-templates'

const screens: { key: Screen; label: string }[] = [
  { key: 'main', label: 'Cowork Main' },
  { key: 'scheduled', label: 'Scheduled (Empty)' },
  { key: 'scheduled-task-list', label: 'Scheduled (Task List)' },
  { key: 'scheduled-new', label: 'Scheduled (New Task)' },
  { key: 'scheduled-new-template', label: 'Scheduled (Template)' },
  { key: 'scheduled-execution', label: 'Scheduled (Execution)' },
  { key: 'scheduled-industry-news', label: 'Scheduled (Industry News)' },
  { key: 'skills', label: 'Skills' },
  { key: 'connector', label: 'Connectors' },
  { key: 'task', label: 'Task Chat' },
  { key: 'task-artifact', label: 'Task + Artifact' },
  { key: 'remote-control', label: 'Remote Control Config' },
  { key: 'workspace', label: 'Workspace' },
  { key: 'workspace-detail', label: 'Workspace Detail' },
  { key: 'scene-templates', label: 'Scene Templates' },
]

function ScreenRenderer({ screen, onNavigate }: { screen: Screen; onNavigate: (key: string) => void }) {
  const nav = onNavigate as (key: any) => void
  switch (screen) {
    case 'main': return <CoworkMain onNavigate={nav} />
    case 'scheduled': return <CoworkScheduled onNavigate={nav} />
    case 'scheduled-task-list': return <CoworkScheduledTaskList onNavigate={nav} />
    case 'scheduled-new': return <CoworkScheduledNewTask onNavigate={nav} />
    case 'scheduled-new-template': return <CoworkScheduledNewTaskTemplate onNavigate={nav} />
    case 'scheduled-execution': return <CoworkScheduledExecution onNavigate={nav} />
    case 'scheduled-industry-news': return <CoworkScheduledIndustryNewsExecution onNavigate={nav} />
    case 'skills': return <CoworkSkills onNavigate={nav} />
    case 'connector': return <CoworkConnectors onNavigate={nav} />
    case 'task': return <CoworkTask onNavigate={nav} />
    case 'task-artifact': return <CoworkTaskArtifact onNavigate={nav} />
    case 'remote-control': return <RemoteControlConfig onNavigate={nav} />
    case 'workspace': return <Workspace onNavigate={nav} />
    case 'workspace-detail': return <WorkspaceDetail onNavigate={nav} />
    case 'scene-templates': return <SceneTemplates onNavigate={nav} />
    default: return <CoworkMain onNavigate={nav} />
  }
}

export function App() {
  const [current, setCurrent] = useState<Screen>('main')

  const handleNavigate = (key: string) => {
    const navMap: Record<string, Screen> = {
      new: 'main',
      main: 'main',
      scheduled: 'scheduled',
      'scheduled-new': 'scheduled-new',
      'scheduled-new-template': 'scheduled-new-template',
      'scheduled-task-list': 'scheduled-task-list',
      'scheduled-execution': 'scheduled-execution',
      'scheduled-industry-news': 'scheduled-industry-news',
      skills: 'skills',
      connector: 'connector',
      task: 'task',
      'task-artifact': 'task-artifact',
      'remote-control': 'remote-control',
      workspace: 'workspace',
      'workspace-detail': 'workspace-detail',
      'scene-templates': 'scene-templates',
    }
    if (navMap[key]) setCurrent(navMap[key])
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      {/* Screen Switcher */}
      <div className="flex flex-wrap gap-2 w-full max-w-[1440px]">
        {screens.map((s) => (
          <button
            key={s.key}
            onClick={() => setCurrent(s.key)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              current === s.key
                ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                : 'bg-white text-[#0a0a0a] border-[#e5e5e5] hover:bg-[#f5f5f5]'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Screen */}
      <div className="overflow-auto w-full flex justify-center">
        <ScreenRenderer screen={current} onNavigate={handleNavigate} />
      </div>
    </div>
  )
}

export default App
