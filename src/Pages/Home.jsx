import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaShieldAlt, FaRocket, FaCog } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-transparent to-transparent dark:from-slate-800/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 mb-8 shadow-sm shadow-slate-200/60 dark:shadow-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
                Available for new projects
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8 text-slate-950 dark:text-white">
              Build something
              <span className="block text-indigo-600 dark:text-slate-600">extraordinary</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 dark:shadow-none"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 rounded-xl font-medium text-lg hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-transparent transition-all duration-200 shadow-sm shadow-slate-200/60 dark:shadow-none"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
      </div>

      {/* Stats Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "10+", label: "Years in Business" },
              { value: "500+", label: "Projects Completed" },
              { value: "40+", label: "Team Members" },
              { value: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 border-t border-slate-200 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-indigo-600 dark:text-slate-500 uppercase tracking-widest mb-6 block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-6 tracking-tight">
                Your partner in growth and innovation
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic consulting and planning",
                  "End-to-end project delivery",
                  "Ongoing support and maintenance",
                  "Measurable results and analytics"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-200">
                      <FaCheck className="text-indigo-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-slate-900 text-[10px] transition-colors duration-200" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-400 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-20 h-20 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-slate-900/20 dark:shadow-none">
                    <FaShieldAlt className="text-3xl text-white dark:text-slate-900" />
                  </div>
                  <p className="text-xl font-medium text-slate-950 dark:text-white mb-2">Trusted Since 2014</p>
                  <p className="text-slate-600 dark:text-slate-500 font-light">Delivering excellence across industries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 border-t border-slate-200 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-indigo-600 dark:text-slate-500 uppercase tracking-widest block mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white tracking-tight">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-500 mt-4 font-light max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaRocket,
                title: "Performance",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              },
              {
                icon: FaShieldAlt,
                title: "Reliability",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
              },
              {
                icon: FaCog,
                title: "Customization",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white dark:bg-transparent border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-300">
                  <feature.icon className="text-xl text-indigo-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 border-t border-slate-200 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-6 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-slate-900/10 dark:shadow-none"
            >
              Contact Us
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}