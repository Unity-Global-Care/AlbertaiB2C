import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'

type LegalPageProps = {
  title: string
  subtitle?: string
  effectiveDate?: string
  lastRevised?: string
  seoDescription: string
  seoKeywords: string
  markdown: string
}

export default function LegalPage({
  title,
  subtitle = 'Unity Global Care, Inc. | ALBERTai',
  effectiveDate,
  lastRevised,
  seoDescription,
  seoKeywords,
  markdown,
}: LegalPageProps) {
  useSEO({
    title: `${title} - ALBERTai`,
    description: seoDescription,
    keywords: seoKeywords,
  })

  const dateParts = [
    effectiveDate && `Effective Date: ${effectiveDate}`,
    lastRevised && `Last Revised: ${lastRevised}`,
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-lg text-gray-600 mb-1">{subtitle}</p>
          {dateParts.length > 0 && (
            <p className="text-sm text-gray-500">{dateParts.join(' · ')}</p>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>

        <nav className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-2">
          <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="text-primary-600 hover:underline">Terms of Use</Link>
          <Link to="/hipaa" className="text-primary-600 hover:underline">HIPAA Compliance</Link>
        </nav>
      </section>
    </div>
  )
}
