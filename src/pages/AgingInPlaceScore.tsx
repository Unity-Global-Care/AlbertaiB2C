import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  AlertCircle, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Activity
} from 'lucide-react'

export default function AgingInPlaceScore() {
  useSEO({
    title: 'Aging In Place Score™ - A Simple Number That Tells a Life-Changing Story | ALBERTai',
    description: 'The Aging In Place Score™ is the first assessment that blends health, behavior, cognitive signals, and safety data into one easy-to-understand score. Learn what your score means.',
    keywords: 'Aging In Place Score, senior assessment, elder care scoring, aging in place evaluation, health monitoring score'
  })
  const scoreRanges = [
    {
      range: "80–100",
      label: "Doing well, stable independence",
      action: "Maintain routines, light supervision",
      color: "green",
      bgColor: "bg-score-excellent",
      textColor: "text-score-excellent",
      borderColor: "border-score-excellent",
      percentage: 100,
      description: "Your parent is thriving independently with minimal support needs."
    },
    {
      range: "60–79",
      label: "Early warning signs",
      action: "Add support, monitor changes",
      color: "yellow",
      bgColor: "bg-score-good",
      textColor: "text-score-good",
      borderColor: "border-score-good",
      percentage: 70,
      description: "Some changes detected. Time to add supportive measures and increase monitoring."
    },
    {
      range: "40–59",
      label: "Moderate risk",
      action: "Increase caregiving, evaluate home safety",
      color: "orange",
      bgColor: "bg-score-fair",
      textColor: "text-score-fair",
      borderColor: "border-score-fair",
      percentage: 50,
      description: "Significant support needed. Consider increased caregiving and home safety improvements."
    },
    {
      range: "0–39",
      label: "High risk",
      action: "Consider care services or assisted living",
      color: "red",
      bgColor: "bg-score-critical",
      textColor: "text-score-critical",
      borderColor: "border-score-critical",
      percentage: 20,
      description: "Immediate action required. Explore care services or assisted living options."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-100 rounded-full px-4 py-2 mb-6">
              <span className="text-primary-700 font-semibold text-sm">PROPRIETARY TECHNOLOGY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Aging In Place Score™
            </h1>
            <p className="text-3xl sm:text-4xl text-gray-700 mb-8 font-light">
              A simple number that tells a life-changing story.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ALBERTai's proprietary Aging In Place Score™ is the first assessment that blends 
              health, behavior, cognitive signals, and safety data into one easy-to-understand score.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Score Scale */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding Your Score
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The Aging In Place Score™ ranges from 0 to 100, providing a clear picture of your parent's ability to live independently.
            </p>
          </div>

          {/* Visual Scale */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12 border border-gray-100">
            <div className="relative">
              {/* Scale Background */}
              <div className="w-full h-16 bg-gray-200 rounded-full overflow-hidden mb-8 relative">
                {/* Color Segments */}
                <div className="absolute left-0 top-0 w-1/5 h-full bg-score-excellent"></div>
                <div className="absolute left-[20%] top-0 w-1/5 h-full bg-score-good"></div>
                <div className="absolute left-[40%] top-0 w-1/5 h-full bg-score-fair"></div>
                <div className="absolute left-[60%] top-0 w-2/5 h-full bg-score-critical"></div>
                
                {/* Score Markers */}
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <span className="text-sm font-semibold text-white drop-shadow">0</span>
                  <span className="text-sm font-semibold text-white drop-shadow">20</span>
                  <span className="text-sm font-semibold text-white drop-shadow">40</span>
                  <span className="text-sm font-semibold text-white drop-shadow">60</span>
                  <span className="text-sm font-semibold text-white drop-shadow">80</span>
                  <span className="text-sm font-semibold text-white drop-shadow">100</span>
                </div>
              </div>

              {/* Current Score Display (Example) */}
              <div className="text-center mb-8">
                <div className="inline-block bg-primary-100 rounded-2xl px-8 py-4">
                  <div className="text-sm text-gray-600 mb-2">Example Score</div>
                  <div className="text-6xl font-bold text-primary-600">78</div>
                  <div className="text-sm text-gray-600 mt-2">Early warning signs detected</div>
                </div>
              </div>
            </div>
          </div>

          {/* Score Ranges Table */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What the Score Means
            </h3>
            
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Score Range</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">What It Indicates</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">What Families Should Do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {scoreRanges.map((range, index) => (
                    <tr 
                      key={index}
                      className={`hover:bg-white transition-colors ${range.bgColor} bg-opacity-10`}
                    >
                      <td className={`py-6 px-6 ${range.textColor} font-bold text-lg`}>
                        {range.range}
                      </td>
                      <td className="py-6 px-6 text-gray-800 font-medium">
                        {range.label}
                      </td>
                      <td className="py-6 px-6 text-gray-700">
                        {range.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Detailed Range Cards for Mobile */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:hidden">
              {scoreRanges.map((range, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 border-2 ${range.borderColor} shadow-lg`}
                >
                  <div className={`${range.textColor} font-bold text-2xl mb-3`}>
                    {range.range}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {range.label}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {range.description}
                  </p>
                  <div className={`${range.bgColor} ${range.textColor} rounded-lg p-3 text-sm font-medium`}>
                    {range.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Score Range Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-6">
            {scoreRanges.map((range, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 border-2 ${range.borderColor} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="mb-6">
                  <div className={`${range.textColor} font-bold text-3xl mb-2`}>
                    {range.range}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className={`h-2 rounded-full ${range.bgColor}`}
                      style={{ width: `${range.percentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                  {range.label}
                </h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {range.description}
                </p>
                
                <div className={`${range.bgColor} ${range.textColor} rounded-lg p-4 text-sm font-medium`}>
                  <strong>Action:</strong> {range.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why It Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Without Data */}
            <div className="bg-red-50 rounded-2xl p-8 lg:p-12 border-2 border-red-200">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-10 w-10 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Without Data
                </h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Families often wait until something goes wrong.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Reactive decision-making</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Crisis-driven interventions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Late-stage care transitions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Higher healthcare costs</span>
                </li>
              </ul>
            </div>

            {/* With ALBERTai */}
            <div className="bg-green-50 rounded-2xl p-8 lg:p-12 border-2 border-green-200">
              <div className="flex items-center mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  With ALBERTai
                </h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                You can act early, keep parents safe longer, and avoid preventable crises.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Proactive, data-driven decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Early intervention opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Gradual, planned transitions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Prevented emergencies and costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Calculated */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How the Score Is Calculated
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Aging In Place Score™ synthesizes multiple data streams into one comprehensive assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Activity className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Health Data</h3>
                <p className="text-sm text-gray-600">Biometric readings, medications, medical history</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <TrendingUp className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Behavior Patterns</h3>
                <p className="text-sm text-gray-600">Activity levels, routines, daily habits</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Cognitive Signals</h3>
                <p className="text-sm text-gray-600">Memory patterns, decision-making, communication</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Info className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Safety Data</h3>
                <p className="text-sm text-gray-600">Fall risk, home safety, emergency indicators</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <p className="text-lg text-gray-800 font-medium">
                Our patent-pending AI analyzes all these factors continuously, updating your score as new data becomes available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get Your Parent's Aging In Place Score™
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start with a free assessment and receive your parent's preliminary score in minutes. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 border-white text-lg px-8 py-4"
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
                className="border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              30-Day Money-Back Guarantee • HIPAA Compliant • No Credit Card Required
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}