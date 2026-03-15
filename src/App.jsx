import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import CV from './modules/cv/CV'
import Interests from './modules/interests/Interests'
import Wishlist from './modules/wishlist/Wishlist'
import Recipes from './modules/recipes/Recipes'

const modules = [
  { id: 'cv', label: 'CV', component: CV },
  { id: 'interests', label: 'Interests', component: Interests },
  { id: 'wishlist', label: 'Wishlist', component: Wishlist },
  { id: 'recipes', label: 'Recipes', component: Recipes },
]

export default function App() {
  const [activeId, setActiveId] = useState(modules[0].id)
  const [moduleKey, setModuleKey] = useState(0)
  const ActiveModule = modules.find((m) => m.id === activeId)?.component

  function handleNavigate(id) {
    if (id === activeId) setModuleKey((k) => k + 1)
    else setActiveId(id)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar modules={modules} activeId={activeId} onNavigate={handleNavigate} />
      <main
        style={{
          maxWidth: 'var(--max-width)',
          width: '100%',
          margin: '0 auto',
          padding: 'var(--space-7) var(--space-5)',
          flex: 1,
        }}
      >
        {ActiveModule && <ActiveModule key={moduleKey} />}
      </main>
      <Analytics />
    </div>
  )
}
