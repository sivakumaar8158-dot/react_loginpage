const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-purple-600 via-blue-600 to-cyan-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="px-8 py-10">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-linear-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">🔐</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Welcome Back
              </h1>
              <p className="text-white/80 text-lg">Sign in to your account</p>
            </div>
            
            <form className="space-y-6">
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
                <label className="block text-sm font-semibold text-white/90 mb-3 ml-1">Password</label>
                <input 
                  type="password" 
                  name="password"   
                  placeholder="Enter your password"   
                  className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-2xl focus:bg-white focus:text-gray-800 focus:border-white focus:ring-4 focus:ring-white/30 text-white placeholder-white/60 transition-all duration-300 outline-none backdrop-blur-sm"   
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-linear-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  🚀 Login to Account
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-white font-semibold hover:text-green-300 transition-colors duration-200 underline">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login