import { useNavigate, useLocation, Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Home from './modules/home/Home'
import CV from './modules/cv/CV'
import Interests from './modules/interests/Interests'
import Wishlist from './modules/wishlist/Wishlist'
import Recipes from './modules/recipes/Recipes'

const modules = [
  { id: 'cv',        label: 'CV',        path: '/cv',        component: CV },
  { id: 'interests', label: 'Interests', path: '/interests', component: Interests },
  { id: 'wishlist',  label: 'Wishlist',  path: '/wishlist',  component: Wishlist },
  { id: 'recipes',   label: 'Recipes',   path: '/recipes',   component: Recipes },
]

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeId =
    location.pathname === '/'
      ? 'home'
      : modules.find((m) => m.path === location.pathname)?.id ?? 'home'

  const isHome = activeId === 'home'

  function handleNavigate(id) {
    const mod = modules.find((m) => m.id === id)
    navigate(mod ? mod.path : '/')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        modules={modules}
        activeId={activeId}
        onNavigate={handleNavigate}
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
        <div key={location.pathname} className="page-fade" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {modules.map((mod) => {
              const Component = mod.component
              return <Route key={mod.id} path={mod.path} element={<Component />} />
            })}
            <Route path="/recipes/:id" element={<Recipes />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Analytics />
    </div>
  )
}
