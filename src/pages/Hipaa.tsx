import LegalPage from '@/components/legal/LegalPage'
import hipaaMarkdown from '@/content/legal/hipaa-compliance.md?raw'

export default function Hipaa() {
  return (
    <LegalPage
      title="HIPAA Compliance Statement"
      effectiveDate="March 3, 2026"
      lastRevised="June 8, 2026"
      seoDescription="Unity Global Care HIPAA Compliance Statement. Learn how we protect health information as a Business Associate and the safeguards we apply across our platforms."
      seoKeywords="unity global care hipaa, albertai hipaa compliance, protected health information, BAA"
      markdown={hipaaMarkdown}
    />
  )
}
