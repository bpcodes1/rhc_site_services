import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App