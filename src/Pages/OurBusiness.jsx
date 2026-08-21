import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaTruck,
  FaChartLine,
  FaRoute,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const businessAreas = [
  {
    icon: FaTruck,
    number: "01",
    title: "Logistics",
    description:
      "Reliable logistics solutions designed to move goods efficiently and keep businesses connected to their markets.",
    details: [
      "Transportation coordination",
      "Delivery management",
      "Supply chain support",
      "Logistics planning",
    ],
  },
  {
    icon: FaChartLine,
    number: "02",
    title: "Consulting",
    description:
      "Practical business advisory services helping organizations make better decisions, improve performance and pursue sustainable growth.",
    details: [
      "Business strategy",
      "Market analysis",
      "Operational improvement",
      "Growth advisory",
    ],
  },
];

export default function OurBusiness() {
  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 dark:border-slate-900">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="absolute left-[10%] top-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.07] blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:pb-28 lg:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-10 bg-indigo-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                Our Business
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-slate-950 md:text-7xl dark:text-white">
              Moving business
              <span className="block text-indigo-600">
                forward.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
              We combine dependable logistics with practical business
              consulting to help organizations operate better and grow with
              confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-2">
          {businessAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/[0.05] md:p-10 dark:border-slate-800 dark:bg-black dark:hover:border-slate-700 dark:hover:shadow-none"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/[0.03] blur-[80px] transition-all duration-500 group-hover:bg-indigo-500/[0.08]" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-xl text-slate-700 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white dark:bg-slate-900 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                    <area.icon />
                  </div>

                  <span className="text-sm font-bold text-slate-200 dark:text-slate-800">
                    {area.number}
                  </span>
                </div>

                <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {area.title}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {area.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {area.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-slate-100 pt-6 dark:border-slate-800">
                  <Link
                    to="/contact-us"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white"
                  >
                    Discuss your needs
                    <FaArrowRight className="text-xs text-indigo-600 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-slate-200 bg-slate-50/70 dark:border-slate-900 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                Our approach
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl dark:text-white">
                Practical thinking.
                <span className="block text-indigo-600">
                  Reliable execution.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid gap-8 sm:grid-cols-2"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm dark:bg-slate-900">
                  <FaRoute />
                </div>

                <h3 className="font-bold text-slate-950 dark:text-white">
                  Built around your needs
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  We focus on understanding the problem before designing the
                  solution.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm dark:bg-slate-900">
                  <FaHandshake />
                </div>

                <h3 className="font-bold text-slate-950 dark:text-white">
                  Long-term relationships
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  We aim to become a dependable partner rather than simply
                  another service provider.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-24 dark:bg-black">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-indigo-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                Let's work together
              </span>

              <div className="h-px w-8 bg-indigo-500" />
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 md:text-5xl dark:text-white">
              Have a business challenge?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-600 dark:text-slate-400">
              Tell us what you are working on. We would be glad to explore how
              our logistics or consulting services can help.
            </p>

            <Link
              to="/contact-us"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-slate-950 px-7 py-4 font-semibold text-white shadow-lg shadow-slate-950/10 transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:shadow-none dark:hover:bg-slate-100"
            >
              Get in touch
              <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}