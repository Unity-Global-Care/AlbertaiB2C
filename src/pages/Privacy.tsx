import LegalPage from '@/components/legal/LegalPage'
import privacyMarkdown from '@/content/legal/privacy-policy.md?raw'

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="March 11, 2025"
      lastRevised="Aug 3, 2026"
      seoDescription="Unity Global Care and ALBERTai Privacy Policy. Learn how we collect, use, and protect your personal information across our websites and services."
      seoKeywords="unity global care privacy policy, albertai privacy, data protection, CCPA, personal information"
      markdown={privacyMarkdown}
    />
  )
}
