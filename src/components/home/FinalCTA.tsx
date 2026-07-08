import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'

export default function FinalCTA() {
  const benefits = [
    {
      icon: Shield,
      title: "30-Day Money-Back Guarantee",
      description: "If ALBERTai doesn't provide the peace of mind you need, we'll refund your first month—no questions asked."
    },
    {
      icon: Clock,
      title: "No Credit Card Required",
      description: "Start your free assessment today. Only pay when you're ready to begin continuous monitoring."
    },
    {
      icon: Users,
      title: "Trusted by 10,000+ Families",
      description: "Join thousands of families who have found confidence in their caregiving decisions."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Your Free Assessment Today
          </h2>
          
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Get your parent's Aging In Place Score™ in just 5 minutes. 
            No commitment, no risk—just the clarity you need to make confident decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 border-white"
              asChild
            >
              <Link to="/request-score">
                Request An Aging In Place Score
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Watch 2-Minute Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm opacity-90">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              What You'll Get in Your Free Assessment:
            </h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Your parent's preliminary Aging In Place Score™</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Detailed explanation of what the score means</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Key risk factors and recommendations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Next steps for improving their score</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Option to start continuous monitoring</span>
              </li>
            </ul>
          </div>
          
          <p className="text-sm opacity-75 mt-8">
            Assessment takes 5-7 minutes • Results delivered within 24 hours • 100% confidential
          </p>
        </div>
      </div>
    </section>
  )
}
