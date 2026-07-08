import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Smartphone, Brain, TrendingUp } from 'lucide-react'

export default function HowItWorksPreview() {
  const steps = [
    {
      icon: Smartphone,
      title: "Connect Data Sources",
      description: "Link health devices, apps, and provide observational insights",
      details: "Integrate with fitness trackers, smart home devices, medical records, and more"
    },
    {
      icon: Brain,
      title: "AI Analyzes & Scores",
      description: "Our AI processes all data to calculate your parent's Aging In Place Score™",
      details: "Advanced machine learning identifies patterns and predicts future needs"
    },
    {
      icon: TrendingUp,
      title: "Receive Insights & Guidance",
      description: "Get actionable recommendations and continuous monitoring",
      details: "Weekly reports, real-time alerts, and personalized care guidance"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How ALBERTai Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple setup, powerful results. Get your parent's Aging In Place Score™ in just minutes, 
            then enjoy continuous monitoring and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-2xl group-hover:bg-primary-200 transition-colors">
                  <step.icon className="h-10 w-10 text-primary-600" />
                </div>
                
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full"></div>
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>
              
              <p className="text-sm text-gray-500 mb-6">
                {step.details}
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Step {index + 1} of 3
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((index + 1) / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Sources Preview */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Comprehensive Data Integration
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Smartphone className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Health Devices</h4>
              <p className="text-sm text-gray-600">Fitbit, Apple Watch, medical devices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Brain className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Smart Home</h4>
              <p className="text-sm text-gray-600">Motion sensors, smart appliances</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Medical Records</h4>
              <p className="text-sm text-gray-600">EHR, lab results, prescriptions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <ArrowRight className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Family Input</h4>
              <p className="text-sm text-gray-600">Observational insights and updates</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of families who have found peace of mind with ALBERTai
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/request-score">
                  Request An Aging In Place Score
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                <Link to="/how-it-works">
                  Learn More About the Process
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • 30-day money-back guarantee • HIPAA compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
