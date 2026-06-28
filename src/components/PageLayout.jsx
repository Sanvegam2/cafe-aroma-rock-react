import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'

export default function PageLayout() {
  return (
    <>
      <div className="page grunge">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

