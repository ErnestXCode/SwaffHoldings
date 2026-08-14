import { motion } from "framer-motion";
import { FaArrowRight, FaLightbulb, FaChartBar, FaCogs, FaGlobe, FaUsers, FaHandshake } from "react-icons/fa";

const businessAreas = [
  {
    icon: FaLightbulb,
    title: "Consulting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["Strategic planning", "Market analysis", "Process optimization", "Risk assessment"]
  },
  {
    icon: FaChartBar,
    title: "Analytics",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: ["Data visualization", "Predictive modeling", "Performance metrics", "Business intelligence"]
  },
  {
    icon: FaCogs,
    title: "Engineering",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    details: ["System architecture", "Software development", "Quality assurance", "DevOps"]
  },
  {
    icon: FaGlobe,
    title: "Digital Solutions",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    details: ["Web applications", "Mobile platforms", "Cloud services", "API integration"]
  },
  {
    icon: FaUsers,
    title: "Managed Services",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    details: ["24/7 monitoring", "Technical support", "Infrastructure management", "Security operations"]
  },
  {
    icon: FaHandshake,
    title: "Partnerships",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    details: ["Strategic alliances", "Vendor management", "Joint ventures", "Channel partnerships"]
  }
];

export default function OurBusiness() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-6 block">
              Our Business
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Multiple divisions,
              <span className="block text-slate-400 dark:text-slate-600">one mission</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Business Areas Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-300">
                <area.icon className="text-xl text-slate-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {area.title}
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {area.description}
              </p>
              
              <ul className="space-y-3">
                {area.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">
                  Learn more
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-slate-100 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Interested in learning more?
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 inline-flex items-center gap-2"
            >
              Get in touch
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}