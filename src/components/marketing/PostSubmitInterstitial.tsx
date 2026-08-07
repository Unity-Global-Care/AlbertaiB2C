import { ExternalLink } from 'lucide-react'

type PostSubmitInterstitialProps = {
  downloadAppUrl?: string | null
  pwaUrl?: string
}

/**
 * Two-option continue UI after POST /api/public/score-request succeeds.
 * Pattern mirrored from B2C-Pwa/src/marketing/PostSubmitInterstitial.jsx (not imported cross-repo).
 */
export default function PostSubmitInterstitial({
  downloadAppUrl = null,
  pwaUrl = '/login',
}: PostSubmitInterstitialProps) {
  const showDownload = Boolean(downloadAppUrl)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          You&apos;re all set
        </h2>
        <p className="text-gray-600">
          Choose how you&apos;d like to continue with ALBERTai.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {showDownload ? (
          <a
            href={downloadAppUrl!}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border-2 border-primary-500 bg-primary-50 p-5 transition-colors hover:bg-primary-100"
          >
            <span className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              Download the App
              <ExternalLink className="h-4 w-4 text-primary-600" />
            </span>
            <span className="mt-1 block text-sm text-gray-600">
              Get the native app from the store
            </span>
          </a>
        ) : (
          <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 opacity-80">
            <span className="block text-lg font-semibold text-gray-900">
              Download the App
            </span>
            <span className="mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
              Coming Soon
            </span>
          </div>
        )}

        <a
          href={pwaUrl}
          className="block rounded-xl border-2 border-gray-200 bg-white p-5 transition-colors hover:border-primary-200 hover:bg-primary-50"
        >
          <span className="block text-lg font-semibold text-gray-900">
            Continue in Browser
          </span>
          <span className="mt-1 block text-sm text-gray-600">
            Sign in and complete the assessment online
          </span>
        </a>
      </div>
    </div>
  )
}
