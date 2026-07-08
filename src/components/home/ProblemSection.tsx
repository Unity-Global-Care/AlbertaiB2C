import { Heart, Clock, HelpCircle } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      icon: Heart,
      title: "Is Mom Really Okay?",
      description: "You worry constantly about your parent living alone. Are they eating properly? Taking their medications? Staying safe? The uncertainty is overwhelming.",
      details: [
        "Constant worry about their wellbeing",
        "Fear of missing warning signs",
        "Guilt about not being there enough"
      ]
    },
    {
      icon: Clock,
      title: "When Should I Intervene?",
      description: "Timing is everything in elder care. Intervene too early and you might limit their independence. Wait too long and you could miss critical warning signs.",
      details: [
        "Uncertainty about when to step in",
        "Fear of making the wrong decision",
        "Pressure from family members"
      ]
    },
    {
      icon: HelpCircle,
      title: "How Do I Know What's Best?",
      description: "Every family situation is unique. What worked for your neighbor might not work for your parent. You need personalized guidance, not generic advice.",
      details: [
        "Conflicting advice from different sources",
        "One-size-fits-all solutions don't work",
        "Need for data-driven decisions"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            You're Not Alone in This Difficult Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Millions of adult children face the same heart-wrenching decisions every day. 
            The emotional weight is real, and the stakes couldn't be higher.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <problem.icon className="h-8 w-8 text-red-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {problem.description}
              </p>
              
              <ul className="space-y-3">
                {problem.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Cost of Uncertainty
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">$10,000+</div>
                <p className="text-gray-600">Average cost of one emergency room visit</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
                <p className="text-gray-600">Of falls could be prevented with early intervention</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">6 months</div>
                <p className="text-gray-600">Average delay in recognizing care needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
