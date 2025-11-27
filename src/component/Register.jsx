const Register = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-purple-600 via-blue-600 to-cyan-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="px-8 py-10">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-linear-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">👤</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Join Us
              </h1>
              <p className="text-white/80 text-lg">Create your account in seconds</p>
            </div>
            
            <form className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-white/90 mb-3 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullname"    
                  placeholder="Enter your full name"  
                  className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-2xl focus:bg-white focus:text-gray-800 focus:border-white focus:ring-4 focus:ring-white/30 text-white placeholder-white/60 transition-all duration-300 outline-none backdrop-blur-sm"   
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-white/90 mb-3 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"   
                  placeholder="Enter your email address"  
                  className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-2xl focus:bg-white focus:text-gray-800 focus:border-white focus:ring-4 focus:ring-white/30 text-white placeholder-white/60 transition-all duration-300 outline-none backdrop-blur-sm"   
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-white/90 mb-3 ml-1">Mobile Number</label>
                <input 
                  type="number" 
                  name="mobile"    
                  placeholder="Enter your mobile number"   
                  className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-2xl focus:bg-white focus:text-gray-800 focus:border-white focus:ring-4 focus:ring-white/30 text-white placeholder-white/60 transition-all duration-300 outline-none backdrop-blur-sm"   
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-white/90 mb-3 ml-1">Password</label>
                <input 
                  type="password" 
                  name="password"   
                  placeholder="Create a strong password"   
                  className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-2xl focus:bg-white focus:text-gray-800 focus:border-white focus:ring-4 focus:ring-white/30 text-white placeholder-white/60 transition-all duration-300 outline-none backdrop-blur-sm"   
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  🚀 Create Account Now
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm">
                Already have an account?{" "}
                <a href="#" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-200 underline">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register