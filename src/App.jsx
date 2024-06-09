import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { CareersPage } from './pages/CareersPage'
import { SupportPage } from './pages/SupportPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/careers' element={<CareersPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
