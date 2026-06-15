import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, X } from 'lucide-react'

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/vitaly-gariev-rGd9DIWnMO4-unsplash.jpg')"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Conversation Every Family
              <span className="text-primary-600"> Needs to Have</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              "Is Mom really okay living alone?" Get the data-driven insights you need to have confident conversations about aging in place with your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/request-score">
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Family Story
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              30-Day Money-Back Guarantee • No Credit Card Required for Assessment
            </p>
          </div>
          
          {/* Hero Video Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6 relative group">
                {!isVideoPlaying ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                        <p className="text-gray-600 font-medium">Watch Family Story</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                      aria-label="Close video"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/8TdFDQds_S8?autoplay=1&rel=0"
                      title="Watch Family Story"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </>
                )}
              </div>
              
              {/* Mock Dashboard Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Current Score</span>
                  <span className="text-2xl font-bold text-primary-600">78</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-sm text-gray-500">Stable with Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
