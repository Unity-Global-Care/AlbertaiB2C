import LegalPage from '@/components/legal/LegalPage'
import importantMarkdown from '@/content/legal/important-information.md?raw'

export default function ImportantInformation() {
  return (
    <LegalPage
      title="Please Read: Important Information"
      effectiveDate="Aug 8, 2026"
      lastRevised="Aug 8, 2026"
      seoDescription="Important information about ALBERTai: decision support only, not medical advice, emergency guidance, and limitations of the Aging-in-Place Score."
      seoKeywords="albertai important information, aging in place disclaimer, not medical advice, emergency 911"
      markdown={importantMarkdown}
    />
  )
}
