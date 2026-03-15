import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Home from './modules/home/Home'
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
  const [activeId, setActiveId] = useState('home')
  const [moduleKey, setModuleKey] = useState(0)

  function handleNavigate(id) {
    if (id === activeId) setModuleKey((k) => k + 1)
    else setActiveId(id)
  }

  const isHome = activeId === 'home'
  const ActiveModule = modules.find((m) => m.id === activeId)?.component

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        modules={modules}
        activeId={activeId}
        onNavigate={handleNavigate}
        onLogoClick={() => handleNavigate('home')}
      />
      <main
        style={{
          maxWidth: 'var(--max-width)',
          width: '100%',
          margin: '0 auto',
          padding: isHome ? '0 var(--space-5)' : 'var(--space-7) var(--space-5)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {isHome
          ? <Home key={moduleKey} />
          : ActiveModule && <ActiveModule key={moduleKey} />
        }
      </main>
      <Analytics />
    </div>
  )
}
