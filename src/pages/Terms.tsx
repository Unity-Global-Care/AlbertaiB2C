import LegalPage from '@/components/legal/LegalPage'
import termsMarkdown from '@/content/legal/terms-of-use.md?raw'

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      effectiveDate="March 11, 2025"
      lastRevised="June 8, 2026"
      seoDescription="Unity Global Care and ALBERTai Terms of Use. Read the terms governing your access to and use of our websites, applications, and services."
      seoKeywords="unity global care terms of use, albertai terms, legal, user agreement"
      markdown={termsMarkdown}
    />
  )
}
