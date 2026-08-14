import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const leaders = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Jane Doe",
    role: "Chief Operating Officer",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Robert Johnson",
    role: "Chief Financial Officer",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    name: "Emily Brown",
    role: "Chief Technology Officer",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Michael Davis",
    role: "VP of Operations",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    name: "Sarah Wilson",
    role: "VP of Marketing",
    bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
  }
];

export default function Leadership() {
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
              Our Team
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Meet our
              <span className="block text-slate-400 dark:text-slate-600">leadership</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-300">
                <span className="text-2xl font-bold text-slate-400 dark:text-slate-500 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {leader.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                {leader.role}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {leader.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                  <FaLinkedin className="text-base" />
                </a>
                <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                  <FaTwitter className="text-base" />
                </a>
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
              Join our team
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
            <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200">
              View open positions
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}