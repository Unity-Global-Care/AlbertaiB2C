import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import HowItWorks from '@/pages/HowItWorks'
import AgingInPlaceScore from '@/pages/AgingInPlaceScore'
import Pricing from '@/pages/Pricing'
import Resources from '@/pages/Resources'
import ArticlePage from '@/pages/ArticlePage'
import About from '@/pages/About'
import Support from '@/pages/Support'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Hipaa from '@/pages/Hipaa'
import RequestScore from '@/pages/RequestScore'
import VerifyEmail from '@/pages/VerifyEmail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/aging-in-place-score" element={<AgingInPlaceScore />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/hipaa" element={<Hipaa />} />
          <Route path="/request-score" element={<RequestScore />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App