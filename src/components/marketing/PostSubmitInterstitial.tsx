import { ExternalLink } from 'lucide-react'
import { getB2CSignInUrl } from '@/config/b2cApp'

type PostSubmitInterstitialProps = {
  email: string
  downloadAppUrl?: string | null
  pwaUrl?: string
}

/**
 * Two-option continue UI after POST /api/public/score-request succeeds.
 * Pattern mirrored from B2C-Pwa/src/marketing/PostSubmitInterstitial.jsx (not imported cross-repo).
 */
export default function PostSubmitInterstitial({
  email,
  downloadAppUrl = null,
  pwaUrl = getB2CSignInUrl(),
}: PostSubmitInterstitialProps) {
  const showDownload = Boolean(downloadAppUrl)

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-primary-200 bg-primary-50 p-4 text-left">
        <p className="text-sm sm:text-base text-gray-800 leading-snug">
          <span className="font-semibold text-gray-900">Check your email.</span>{' '}
          We&apos;re sending{' '}
          <span className="font-semibold text-primary-700 break-all">{email}</span>{' '}
          a temporary password and sign-in link right now. Use it to log in and start
          your loved one&apos;s assessment.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-snug">
          It should arrive within a few minutes — check your spam or junk folder if you
          don&apos;t see it.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          You&apos;re all set
        </h2>
        <p className="text-sm text-gray-600">
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
            Use the temporary password from your email to sign in and complete the
            assessment online
          </span>
        </a>
      </div>
    </div>
  )
}
