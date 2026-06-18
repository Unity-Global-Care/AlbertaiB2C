import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Heart, 
  Home,
  AlertCircle,
  Shield,
  Users,
  TrendingUp,
  Bell,
  FileText
} from 'lucide-react'

export default function Pricing() {
  useSEO({
    title: 'Pricing - Simple, Transparent Plans for Families | ALBERTai',
    description: 'ALBERTai costs just $25/month - less than one home health visit. Includes Aging In Place Score™, personalized care plan, family dashboard, and 30-day money-back guarantee.',
    keywords: 'albert.ai pricing, aging in place cost, senior care pricing, caregiver support cost, elder care subscription'
  })
  const features = [
    {
      icon: TrendingUp,
      text: "Aging In Place Score™ (updated daily/weekly depending on data)"
    },
    {
      icon: FileText,
      text: "Personalized Care Plan"
    },
    {
      icon: Users,
      text: "Family dashboard"
    },
    {
      icon: Bell,
      text: "Predictive alerts"
    },
    {
      icon: Users,
      text: "Unlimited caregiver accounts"
    },
    {
      icon: Shield,
      text: "Full support"
    }
  ]

  const comparisons = [
    {
      item: "One home health visit",
      icon: Heart,
      color: "text-red-600"
    },
    {
      item: "One missed early warning that leads to hospitalization",
      icon: AlertCircle,
      color: "text-red-600"
    },
    {
      item: "One month of assisted living",
      icon: Home,
      color: "text-red-600"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple. Transparent. Designed for Families.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One affordable monthly subscription gives you everything you need to protect your parent and gain peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary-200 overflow-hidden">
              {/* Pricing Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 lg:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Monthly Subscription</h2>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-6xl lg:text-7xl font-bold">$25</span>
                  <span className="text-2xl lg:text-3xl ml-2 opacity-90">/month</span>
                </div>
                <p className="text-lg opacity-90">Billed monthly • Cancel anytime</p>
              </div>

              {/* Features List */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Includes:</h3>
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                        <feature.icon className="h-4 w-4 text-primary-600" />
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 flex-1">{feature.text}</p>
                    </div>
                  ))}
                </div>

                {/* Guarantee Badge */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-green-800 font-bold text-lg">30-Day Money-Back Guarantee</span>
                  </div>
                  <p className="text-green-700 text-center text-sm">
                    Try ALBERTai risk-free. If it doesn't provide the peace of mind you need, we'll refund your first month.
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full text-lg px-8 py-4 mb-4"
                  asChild
                >
                  <Link to="/request-score">
                    Request An Aging In Place Score
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-center text-sm text-gray-500">
                  No credit card required for assessment • HIPAA Compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Say It's Worth It */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Families Say It's Worth It
            </h2>
            <p className="text-2xl text-gray-700 font-semibold mb-8">
              ALBERTai costs less than:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {comparisons.map((comparison, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <comparison.icon className={`h-12 w-12 ${comparison.color} mx-auto mb-4`} />
                <p className="text-gray-800 font-medium text-lg leading-relaxed">
                  {comparison.item}
                </p>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <p className="text-3xl lg:text-4xl font-bold mb-4">
              Peace of mind shouldn't be a luxury.
            </p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              For just $25 a month, ALBERTai gives you the data-driven insights 
              and early warnings that can prevent costly emergencies and keep your parent safe at home longer.
            </p>
          </div>
        </div>
      </section>

      {/* Value Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare the Costs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ALBERTai stacks up against other care options
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Option</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Monthly Cost</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Annual Cost</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">What You Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-primary-50 hover:bg-primary-100 transition-colors">
                    <td className="py-6 px-6 font-bold text-primary-700">ALBERTai</td>
                    <td className="py-6 px-6 text-gray-900 font-semibold">$25</td>
                    <td className="py-6 px-6 text-gray-900 font-semibold">$300</td>
                    <td className="py-6 px-6 text-gray-700">Continuous monitoring, predictive insights, peace of mind</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 text-gray-800">Assisted Living</td>
                    <td className="py-6 px-6 text-gray-700">$4,500+</td>
                    <td className="py-6 px-6 text-gray-700">$54,000+</td>
                    <td className="py-6 px-6 text-gray-600">Loss of independence, high cost</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 text-gray-800">Home Health Aide</td>
                    <td className="py-6 px-6 text-gray-700">$4,000+</td>
                    <td className="py-6 px-6 text-gray-700">$48,000+</td>
                    <td className="py-6 px-6 text-gray-600">Limited hours, expensive</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 text-gray-800">Medical Alert System</td>
                    <td className="py-6 px-6 text-gray-700">$30-50</td>
                    <td className="py-6 px-6 text-gray-700">$360-600</td>
                    <td className="py-6 px-6 text-gray-600">Reactive only, no predictive insights</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 text-gray-800">Do Nothing</td>
                    <td className="py-6 px-6 text-gray-700">$0</td>
                    <td className="py-6 px-6 text-gray-700">$0</td>
                    <td className="py-6 px-6 text-gray-600">Risk of emergency, stress, uncertainty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Highlight */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center border-2 border-primary-200">
            <div className="max-w-3xl mx-auto">
              <DollarSign className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Potential Annual Savings
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                By catching issues early and preventing just one emergency room visit or hospitalization, 
                ALBERTai can save your family thousands of dollars while keeping your parent safer at home.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">$10,000+</div>
                  <p className="text-sm text-gray-600">Average ER visit</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">$15,000+</div>
                  <p className="text-sm text-gray-600">Average hospitalization</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <p className="text-sm text-gray-600">Of falls preventable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ALBERTai pricing
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes, absolutely. Cancel anytime with no penalties or fees.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer discounts for multiple family members?</h3>
              <p className="text-gray-600">Unlimited caregiver accounts are included in your subscription at no additional cost.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No, there's no setup fee. Your subscription includes everything you need to get started.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What if I'm not satisfied?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee. If ALBERTai doesn't provide the peace of mind you need, we'll refund your first month—no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of families who have found peace of mind with ALBERTai. 
              Start your risk-free trial today.
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
                Learn More About the Score
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              30-Day Money-Back Guarantee • No Credit Card Required for Assessment • HIPAA Compliant
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}