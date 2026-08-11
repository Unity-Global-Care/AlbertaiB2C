import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import PostSubmitInterstitial from '@/components/marketing/PostSubmitInterstitial'
import { getB2CSignInUrl } from '@/config/b2cApp'
import { ArrowRight, CheckCircle2, Mail, Calendar, Users, Shield, TrendingUp, Heart, User } from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001'

const RELATIONSHIP_OPTIONS = [
  'Father',
  'Mother',
  'Grandfather',
  'Grandmother',
  'Stepfather',
  'Stepmother',
  'Father-in-law',
  'Mother-in-law',
  'Aunt',
  'Uncle',
  'Spouse',
  'Sibling',
  'Other',
]

type ScoreRequestNext = {
  downloadAppUrl: string | null
  pwaUrl: string
  email: string
}

type ScoreRequestSuccessResponse = {
  success?: boolean
  next?: Partial<ScoreRequestNext>
}

export default function RequestScore() {
  const [yourFirstName, setYourFirstName] = useState('')
  const [yourLastName, setYourLastName] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [relationship, setRelationship] = useState('')
  const [customRelationship, setCustomRelationship] = useState('')
  const [age, setAge] = useState('')
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [acceptedImportantInfo, setAcceptedImportantInfo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitNext, setSubmitNext] = useState<ScoreRequestNext | null>(null)
  const [error, setError] = useState('')
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!submitNext) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    successRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [submitNext])

  useSEO({
    title: 'Request An Aging In Place Score - ALBERTai',
    description: 'Request your loved one\'s Aging In Place Score™. Simple, secure, and personalized assessment to help you make confident decisions about aging in place.',
    keywords: 'aging in place score, request score, elder care assessment, caregiver assessment'
  })

  const resetForm = () => {
    setYourFirstName('')
    setYourLastName('')
    setEmail('')
    setFirstName('')
    setLastName('')
    setRelationship('')
    setCustomRelationship('')
    setAge('')
    setAcceptedPrivacy(false)
    setAcceptedTerms(false)
    setAcceptedImportantInfo(false)
    setSubmitNext(null)
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!yourFirstName.trim() || !yourLastName.trim()) {
      setError('Please enter your first and last name')
      return
    }

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter the first and last name of the person you care for')
      return
    }

    if (!age || parseInt(age) < 1 || parseInt(age) > 150) {
      setError('Please enter a valid age')
      return
    }

    if (!relationship) {
      setError('Please select your relationship to the person you care for')
      return
    }

    if (relationship === 'Other' && !customRelationship.trim()) {
      setError('Please specify your relationship to the person you care for')
      return
    }

    if (!acceptedPrivacy || !acceptedTerms || !acceptedImportantInfo) {
      setError('Please agree to the Privacy Policy, Terms of Service, and Important Information to continue')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/public/score-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          firstName: yourFirstName.trim(),
          lastName: yourLastName.trim(),
          careRecipientFirstName: firstName.trim(),
          careRecipientLastName: lastName.trim(),
          relationship: relationship === 'Other' ? customRelationship.trim() : relationship,
          careRecipientAge: parseInt(age),
        }),
      })

      const data = (await response.json().catch(() => null)) as ScoreRequestSuccessResponse | { message?: string } | null

      if (!response.ok) {
        throw new Error(data && 'message' in data && data.message ? data.message : 'Something went wrong. Please try again.')
      }

      const next = data && 'next' in data ? data.next : undefined
      const submittedEmail = email.trim()
      setSubmitNext({
        downloadAppUrl: next?.downloadAppUrl ?? null,
        pwaUrl: next?.pwaUrl || `${getB2CSignInUrl()}`,
        email: submittedEmail,
      })
      setYourFirstName('')
      setYourLastName('')
      setEmail('')
      setFirstName('')
      setLastName('')
      setRelationship('')
      setCustomRelationship('')
      setAge('')
      setAcceptedPrivacy(false)
      setAcceptedTerms(false)
      setAcceptedImportantInfo(false)
    } catch (err) {
      console.error('Error submitting request:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or contact support@goalbertai.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your information is protected with HIPAA-compliant security'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Get objective assessments based on comprehensive data analysis'
    },
    {
      icon: Heart,
      title: 'Personalized Guidance',
      description: 'Receive tailored recommendations for your specific situation'
    },
    {
      icon: Users,
      title: 'Family Collaboration',
      description: 'Invite family members to contribute observations and insights'
    }
  ]

  if (submitNext) {
    return (
      <div ref={successRef} className="bg-gray-50 py-12 px-4 scroll-mt-24">
        <Card className="max-w-2xl mx-auto p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Request Received!
            </h1>
          </div>

          <PostSubmitInterstitial
            email={submitNext.email}
            downloadAppUrl={submitNext.downloadAppUrl}
            pwaUrl={submitNext.pwaUrl}
          />

          {/* Founder letter: kept below interstitial CTAs per product request */}
          <div className="mt-10 bg-primary-50 border border-primary-200 rounded-lg p-6 lg:p-8 text-left space-y-4 text-gray-700">
            <p>
              Hello, my name is Dave, the Founder and CEO of Unity Global Care. I would personally like to thank you for requesting an Aging In Place Score for your loved one, because we all want to know if Mom and/or Dad is really ok living alone.
            </p>
            <p>
              I am happy to let you know that ALBERTai, our Aging-In-Place Score, is about 4 weeks away from our much anticipated launch date, and I can assure you that we are building and launching something very special to help families with aging loved ones, caregivers, and extended care team.
            </p>
            <p>
              For the last several months, we have been testing it with a large number of families and receiving very positive feedback.
            </p>
            <p>
              Please keep an eye out for another email from our team announcing our launch.
            </p>
            <p>
              Every person who registers in the first 60 days after launch will receive a <strong>FREE lifetime membership</strong> to ALBERTai — you will always have the resources to assist you in making the best possible proactive health and wellness decisions for your aging loved one and family.
            </p>
            <p>
              If you have any questions, please feel free to reach out to me directly at{' '}
              <a href="mailto:DaveD@UnityGlobalCare.com" className="text-primary-600 font-medium hover:underline">
                DaveD@UnityGlobalCare.com
              </a>{' '}
              and I will do my very best to assist you.
            </p>
            <p className="pt-2">
              All My Very Best,
              <br />
              <strong>Dave</strong>
              <br />
              Founder &amp; CEO, Unity Global Care
            </p>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-4"
              onClick={resetForm}
            >
              Submit Another Request
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Request an Aging In Place Score
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Understanding how well your loved one is aging in place should not feel complicated. 
            ALBERTai begins with a few simple details about you and the person you care for.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We prepare a tailored questionnaire and send you a secure login when everything is ready.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Inside your account, you will answer thoughtful questions about health, daily function, environment, and emotional wellbeing. ALBERTai then generates the Aging In Place Score and a personalized care plan with clear first steps.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ongoing Support
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  The support continues long after the score is delivered. ALBERTai monitors patterns in safety, cognition, and independence. When something changes, you receive timely updates and guidance. Recommendations may include small home adjustments or supportive services that extend your loved one's ability to remain at home.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  You can also add other family members or care partners. Their observations add depth to the insights and help the score evolve with real life.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-lg text-gray-900 font-semibold mb-2">
                  A clear starting point. A continuous source of guidance. A partner in keeping your loved one safe and independent.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <Card className="p-6 lg:p-10 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Begin the Request
                </h3>
                <p className="text-gray-600 mb-6">
                  Tell us about yourself and the person you care for.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="yourFirstName" className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-gray-500" />
                        Your First Name
                      </Label>
                      <Input
                        id="yourFirstName"
                        type="text"
                        placeholder="John"
                        value={yourFirstName}
                        onChange={(e) => setYourFirstName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="yourLastName" className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-gray-500" />
                        Your Last Name
                      </Label>
                      <Input
                        id="yourLastName"
                        type="text"
                        placeholder="Smith"
                        value={yourLastName}
                        onChange={(e) => setYourLastName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-gray-500" />
                        First Name of Person You Care For
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Jane"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-gray-500" />
                        Last Name of Person You Care For
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="relationship" className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        Your Relationship to Them
                      </Label>
                      <select
                        id="relationship"
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a relationship</option>
                        {RELATIONSHIP_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="age" className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        Age of Person You Care For
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="65"
                        min="1"
                        max="150"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  {relationship === 'Other' && (
                    <div>
                      <Label htmlFor="customRelationship" className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        Please Specify Your Relationship
                      </Label>
                      <Input
                        id="customRelationship"
                        type="text"
                        placeholder="e.g. Neighbor, Family Friend"
                        value={customRelationship}
                        onChange={(e) => setCustomRelationship(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptedPrivacy}
                        onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I have read and agree to the{' '}
                        <Link
                          to="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I have read and agree to the{' '}
                        <Link
                          to="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Terms of Service
                        </Link>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptedImportantInfo}
                        onChange={(e) => setAcceptedImportantInfo(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I have read and agree to{' '}
                        <Link
                          to="/important-information"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Please Read: Important Information
                        </Link>
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg px-8 py-4"
                    disabled={isSubmitting || !acceptedPrivacy || !acceptedTerms || !acceptedImportantInfo}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll never share your information with third parties.
                  </p>
                </form>
              </Card>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
