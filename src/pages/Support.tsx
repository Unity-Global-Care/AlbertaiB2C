import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { SUPPORT_EMAIL } from '@/config/b2cApp'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Video, 
  Users, 
  BookOpen, 
  Sparkles,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  MessageCircle,
  Phone
} from 'lucide-react'

export default function Support() {
  useSEO({
    title: 'Support & Community - Get Help with ALBERTai | ALBERTai',
    description: 'Get support for ALBERTai. Access FAQs, customer support, join our community, and find answers to common questions about aging in place and caregiving.',
    keywords: 'albert.ai support, caregiver support, elder care help, aging in place questions, senior care community'
  })

  const supportWays = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Personalized Help Whenever You Need It",
      description: "Have a question about your parent's Aging In Place Score or about setting up your account? Our support team is ready to help with clear, friendly guidance.",
      contact: SUPPORT_EMAIL,
      details: [
        "Clear, friendly guidance",
        "Expert support team",
        "Available whenever you need help"
      ]
    },
    {
      number: 2,
      icon: Video,
      title: "Step by Step Tutorials",
      description: "We provide simple videos and walkthroughs that show you how to:",
      features: [
        "Set up your account",
        "Connect available data sources",
        "Understand your parent's Aging In Place Score",
        "Use the dashboard",
        "Share updates with siblings or caregivers"
      ],
      note: "Everything is designed so you never feel overwhelmed."
    },
    {
      number: 3,
      icon: Users,
      title: "Live Community Sessions and Q&A",
      description: "Every month our team hosts a live online session where you can:",
      features: [
        "Learn caregiving best practices",
        "Ask questions about your parent's score",
        "Hear from experts in aging, safety, and home care",
        "Connect with others facing similar challenges"
      ],
      note: "These sessions help families learn together and feel less alone."
    },
    {
      number: 4,
      icon: BookOpen,
      title: "Resource Library for Families",
      description: "Our learning hub includes easy to understand guidance on topics like:",
      features: [
        "Recognizing changes in your parent's health",
        "Keeping seniors safe at home",
        "Talking to your parent about needing help",
        "Understanding different care options",
        "Preparing for emergencies"
      ],
      note: "This section will grow over time as we add more workshops and articles."
    },
    {
      number: 5,
      icon: Sparkles,
      title: "Ongoing Product Support and Updates",
      description: "ALBERTai evolves with you. When we update the platform or add new features, you will receive:",
      features: [
        "Clear explanations of new tools",
        "Tutorials to help you use new features",
        "Optional demos or live support"
      ],
      note: "We grow the platform based on what families tell us they need most."
    }
  ]

  const faqs = [
    {
      question: "What is ALBERTai in simple terms?",
      answer: "ALBERTai is a platform that helps you understand how safely your parent is aging at home. It analyzes signals from devices, routines, and check-ins, then gives you a clear Aging In Place Score along with easy next steps."
    },
    {
      question: "Do I need special hardware or equipment?",
      answer: "No. ALBERTai works with the tools you already have. You can start with basic information and add more data sources over time if you want."
    },
    {
      question: "Is the Aging In Place Score hard to understand?",
      answer: "Not at all. It is designed for everyday families. You will see a simple score from zero to one hundred, along with a clear explanation and guidance for what to do next."
    },
    {
      question: "Can I invite my siblings or other caregivers?",
      answer: "Yes. Your subscription includes unlimited caregiver accounts so everyone stays informed and on the same page."
    },
    {
      question: "What happens if my parent's score changes?",
      answer: "ALBERTai sends you an alert right away. You will receive an explanation of the change along with recommended next steps."
    },
    {
      question: "Is my parent's information secure?",
      answer: "Yes. ALBERTai follows strict privacy and security standards. All data is encrypted and handled with care. We protect your family's information as if it were our own."
    },
    {
      question: "Does ALBERTai replace caregivers or doctors?",
      answer: "No. ALBERTai is a guide. It helps you understand risks early and communicate more clearly with professionals. It does not replace medical or emergency services."
    },
    {
      question: "Is there a contract?",
      answer: "No. You can cancel anytime. We also offer a money back guarantee for new users so you can try the service risk free."
    },
    {
      question: "I am not tech savvy. Will this be difficult for me?",
      answer: "Not at all. ALBERTai is designed for families, not technologists. If you ever need help, contact us and we will walk you through everything at your pace."
    },
    {
      question: "How do I contact support?",
      answer: `Our team is always here to help. Email us anytime at ${SUPPORT_EMAIL} or call us at 800-314-0255. We respond as quickly as possible so you never feel stuck or alone.`
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Are Here for You and Your Family
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Caring for an aging parent is emotional and often exhausting. You should never have to navigate it alone. 
              Our support team is here to guide you through every step of using ALBERTai so you feel confident, 
              informed, and supported from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Ways We Support You */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ways We Support You
            </h2>
          </div>

          <div className="space-y-12">
            {supportWays.map((way, index) => (
              <div key={index} className="relative">
                {/* Connection Line (Desktop) */}
                {index < supportWays.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-secondary-300" />
                )}

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <way.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {way.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {way.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {way.description}
                      </p>

                      {/* Contact Email */}
                      {way.contact && (
                        <div className="bg-white rounded-xl p-6 mb-6 border-2 border-primary-200">
                          <div className="flex items-center mb-3">
                            <Mail className="h-5 w-5 text-primary-600 mr-3" />
                            <span className="font-semibold text-gray-900">Contact us anytime:</span>
                          </div>
                          <div className="space-y-2">
                            <a 
                              href={`mailto:${way.contact}`}
                              className="block text-primary-600 hover:text-primary-700 font-medium text-lg"
                            >
                              {way.contact}
                            </a>
                            <a 
                              href="tel:800-314-0255"
                              className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
                            >
                              <Phone className="h-5 w-5 mr-2" />
                              800-314-0255
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Features List */}
                      {way.features && (
                        <ul className="space-y-3 mb-6">
                          {way.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Details List */}
                      {way.details && (
                        <ul className="space-y-2 mb-6">
                          {way.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Note */}
                      {way.note && (
                        <div className="bg-primary-50 rounded-xl p-4 border-l-4 border-primary-500">
                          <p className="text-gray-800 font-medium italic">
                            {way.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              A simple guide to our most common questions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <HelpCircle className="h-4 w-4 text-primary-600" />
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Team Is Always Here to Help
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Have questions? Need assistance? Our support team responds as quickly as possible 
              so you never feel stuck or alone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex-1 max-w-sm">
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                <a 
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-white hover:underline font-medium"
                >
                  {SUPPORT_EMAIL}
                </a>
                <p className="text-sm opacity-75 mt-2">We respond as quickly as possible</p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex-1 max-w-sm">
                <Clock className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                <p className="text-white font-medium">Within 24 hours</p>
                <p className="text-sm opacity-75 mt-2">Usually much faster</p>
              </div>
            </div>

            <a 
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 border-2 border-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Contact Support Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Resource Library Link */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200">
            <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Our Resource Library
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Access expert guides, articles, and tutorials to help you on your caregiving journey.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/resources">
                Visit Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
