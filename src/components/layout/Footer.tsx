import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Mail, Phone, Facebook, Twitter, Linkedin, CheckCircle2 } from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Aging In Place Score™', href: '/aging-in-place-score' },
      { name: 'Pricing', href: '/pricing' },
    ],
    resources: [
      { name: 'Resources', href: '/resources' },
      { name: 'Blog', href: '/resources#blog' },
      { name: 'Case Studies', href: '/resources#case-studies' },
      { name: 'Webinars', href: '/resources#webinars' },
    ],
    support: [
      { name: 'Support', href: '/support' },
      { name: 'FAQ', href: '/support#faq' },
      { name: 'Contact Us', href: '/support#contact' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Please Read: Important Information', href: '/important-information' },
      { name: 'HIPAA Compliance', href: '/hipaa' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSuccess(false)
    
    // Validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    const trimmedEmail = email.trim().toLowerCase()
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/public/newsletter-subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmedEmail,
          source: 'goalbertai_footer',
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.message || 'Subscription failed')
      }

      setIsSuccess(true)
      setEmail('')
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      console.error('Error subscribing to newsletter:', err)
      setError('Something went wrong. Please try again or contact support@goalbert.ai')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/images/logos/AlbertAI_Tagline_Color_R.png" 
                alt="ALBERTai" 
                className="h-20 md:h-[100px] w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Data-driven peace of mind for families caring for aging parents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest insights on aging in place and caregiving.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto flex-col md:flex-row gap-2">
              <div className="flex-1 md:flex-initial">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg md:rounded-l-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg md:rounded-r-lg md:rounded-l-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    <span>Submitting...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
          {error && (
            <div className="mt-3 text-sm text-red-400 text-center md:text-left">
              {error}
            </div>
          )}
          {isSuccess && (
            <div className="mt-3 text-sm text-green-400 text-center md:text-left flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle2 className="h-4 w-4" />
              <span>Thank you for subscribing! Check your email for a welcome message.</span>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ALBERTai. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="h-4 w-4" />
              <span>support@goalbert.ai</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="h-4 w-4" />
              <span>800-314-0255</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
