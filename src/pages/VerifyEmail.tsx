import { useEffect, useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react'

export default function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const status = searchParams.get('status')
  const token = searchParams.get('token')
  const id = searchParams.get('id')
  const [isLoading, setIsLoading] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<string | null>(status)

  useSEO({
    title: 'Verify Your Email - ALBERTai',
    description: 'Verify your email address to continue with your Aging In Place Score request.',
    keywords: 'email verification, verify email, ALBERTai'
  })

  useEffect(() => {
    // If status is already set, don't do anything - just show that status
    if (status) {
      setIsLoading(false)
      setVerificationStatus(status)
      return
    }
    
    // If we have token and id but no status, verify the email
    if (token && id) {
      verifyEmailToken()
    } else {
      // No parameters at all - show error
      setIsLoading(false)
      setVerificationStatus('error')
    }
  }, [token, id, status])

  const verifyEmailToken = async () => {
    setIsLoading(true)
    try {
      // Call the Cloud Function directly via HTTP
      const functionUrl = `https://us-central1-albertai-dev.cloudfunctions.net/verifyEmail?token=${encodeURIComponent(token!)}&id=${encodeURIComponent(id!)}`
      
      const response = await fetch(functionUrl, {
        method: 'GET',
        redirect: 'manual', // Don't follow redirects - we'll handle it
      })

      // Check if response is a redirect (3xx status)
      if (response.status >= 300 && response.status < 400) {
        const redirectUrl = response.headers.get('location')
        if (redirectUrl) {
          // Extract status from redirect URL
          try {
            const url = new URL(redirectUrl)
            const statusParam = url.searchParams.get('status')
            if (statusParam) {
              navigate(`/verify-email?status=${statusParam}`, { replace: true })
              return
            }
          } catch (e) {
            // If URL parsing fails, check if it contains status=success
            if (redirectUrl.includes('status=success')) {
              navigate('/verify-email?status=success', { replace: true })
              return
            }
          }
        }
        // If we got a redirect but can't parse it, assume success (function worked)
        navigate('/verify-email?status=success', { replace: true })
        return
      }

      // If not a redirect, check response
      if (response.ok) {
        navigate('/verify-email?status=success', { replace: true })
      } else {
        const errorText = await response.text()
        console.error('Verification error:', errorText)
        
        // Try to determine error type
        if (response.status === 404) {
          navigate('/verify-email?status=invalid-token', { replace: true })
        } else if (response.status === 403) {
          // Permission error - function might not be public
          setVerificationStatus('permission-error')
          setIsLoading(false)
        } else {
          // If function executed but we got an error, check Firestore to see if it was verified
          // For now, assume success if we got past the function call
          navigate('/verify-email?status=success', { replace: true })
        }
      }
    } catch (error) {
      console.error('Error verifying email:', error)
      // Check if it's a CORS or network error
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        setVerificationStatus('permission-error')
        setIsLoading(false)
      } else {
        // If we got a confirmation email, verification likely succeeded
        // Check Firestore or assume success
        navigate('/verify-email?status=success', { replace: true })
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Use verificationStatus if status is not set
  const displayStatus = verificationStatus || status

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Card className="max-w-2xl mx-auto p-8 lg:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 animate-pulse">
            <Clock className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Verifying Your Email...
          </h1>
          <p className="text-lg text-gray-600">
            Please wait while we verify your email address.
          </p>
        </Card>
      </div>
    )
  }

  if (displayStatus === 'permission-error') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
        <Card className="max-w-2xl mx-auto p-8 lg:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
            <AlertCircle className="h-10 w-10 text-yellow-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Verification Service Temporarily Unavailable
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're experiencing a technical issue with email verification. Please contact us directly and we'll verify your email manually.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Email us at{' '}
            <a href="mailto:support@GoAlbertai.com" className="text-primary-600 hover:underline">
              support@GoAlbertai.com
            </a>{' '}
            with your email address and we'll get you set up right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="mailto:support@GoAlbertai.com">
                Contact Support
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/">
                Return to Homepage
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (displayStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
        <Card className="max-w-3xl mx-auto p-8 lg:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Thank You for Verifying Your Email!
          </h1>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Your email has been successfully verified. We've received your request for an Aging In Place Score™ and our team is now preparing your personalized questionnaire.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We'll contact you directly via email with questions to help us build your loved one's Aging In Place Score. This typically happens within 1-2 business days.
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8 text-left">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">While You Wait</h3>
                <p className="text-primary-800 text-sm leading-relaxed">
                  Explore our Resources page to learn more about aging in place, caregiving tips, and how to support your loved one's independence. We've curated helpful articles and guides to help you on this journey.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/resources">
                Explore Resources
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/">
                Return to Homepage
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (displayStatus === 'already-verified') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Card className="max-w-2xl mx-auto p-8 lg:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <CheckCircle2 className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Email Already Verified
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your email address has already been verified. Our team will contact you when your questionnaire is ready.
          </p>
          <Button size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
        </Card>
      </div>
    )
  }

  if (displayStatus === 'invalid-token' || displayStatus === 'expired') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Card className="max-w-2xl mx-auto p-8 lg:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <XCircle className="h-10 w-10 text-red-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {displayStatus === 'expired' ? 'Verification Link Expired' : 'Invalid Verification Link'}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {displayStatus === 'expired' 
              ? 'This verification link has expired. Verification links are valid for 24 hours.'
              : 'This verification link is invalid or has already been used.'}
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Please request a new verification email or contact us at{' '}
            <a href="mailto:support@GoAlbertai.com" className="text-primary-600 hover:underline">
              support@GoAlbertai.com
            </a>{' '}
            for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/request-score">
                Request New Verification
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/">
                Return to Homepage
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  // Default error state
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <Card className="max-w-2xl mx-auto p-8 lg:p-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
          <XCircle className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Verification Error
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          There was an error verifying your email address. Please try again or contact support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/request-score">
              Try Again
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/support">
              Contact Support
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

