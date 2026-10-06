import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import HowItWorks from '@/pages/HowItWorks'
import AgingInPlaceScore from '@/pages/AgingInPlaceScore'
import Resources from '@/pages/Resources'
import ArticlePage from '@/pages/ArticlePage'
import About from '@/pages/About'
import Support from '@/pages/Support'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import ImportantInformation from '@/pages/ImportantInformation'
import Hipaa from '@/pages/Hipaa'
import RequestScore from '@/pages/RequestScore'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/aging-in-place-score" element={<AgingInPlaceScore />} />
          <Route path="/pricing" element={<Navigate to="/" replace />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/important-information" element={<ImportantInformation />} />
          <Route path="/hipaa" element={<Hipaa />} />
          <Route path="/request-score" element={<RequestScore />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App