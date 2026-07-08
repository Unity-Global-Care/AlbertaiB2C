import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Brain, Shield, Target, ArrowRight } from 'lucide-react'

export default function SolutionSection() {
  const valueProps = [
    {
      icon: Brain,
      title: "Comprehensive Monitoring",
      description: "Integrates data from multiple sources for a complete health picture",
      features: [
        "Health records integration",
        "Activity tracking from wearables",
        "Smart home sensor data",
        "Social engagement patterns"
      ]
    },
    {
      icon: Shield,
      title: "Predictive Intelligence",
      description: "AI-powered insights that predict needs before crises occur",
      features: [
        "Early warning system",
        "Risk factor identification",
        "Trend analysis over time",
        "Personalized recommendations"
      ]
    },
    {
      icon: Target,
      title: "Actionable Guidance",
      description: "Clear recommendations on when and how to adjust care",
      features: [
        "Step-by-step action plans",
        "Resource recommendations",
        "Timeline guidance",
        "Family coordination tools"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Meet ALBERTai: Your Data-Driven Care Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finally, a solution that brings clarity to the most emotional family decisions. 
            ALBERTai transforms uncertainty into confidence through the power of data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors">
                <prop.icon className="h-10 w-10 text-primary-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {prop.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {prop.description}
              </p>
              
              <ul className="space-y-3 text-left">
                {prop.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/how-it-works" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mt-6 group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* The Aging In Place Score™ Highlight */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            The Aging In Place Score™
          </h3>
          <p className="text-xl mb-8 opacity-90">
            A single, comprehensive metric that quantifies your parent's ability to live independently and safely at home.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">85-100</div>
              <div className="text-sm opacity-90">Thriving Independently</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">70-84</div>
              <div className="text-sm opacity-90">Stable with Monitoring</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">55-69</div>
              <div className="text-sm opacity-90">Emerging Needs</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">0-54</div>
              <div className="text-sm opacity-90">Action Required</div>
            </div>
          </div>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="bg-white text-primary-600 hover:bg-gray-100 border-white"
          >
            <Link to="/aging-in-place-score">
              Learn About the Score
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
