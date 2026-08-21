import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaTruck,
  FaChartLine,
  FaGlobeAfrica,
  FaHandshake,
  FaBoxes,
  FaLightbulb
} from "react-icons/fa";

const services = [
  {
    icon: FaTruck,
    title: "Logistics & Supply Chain",
    description:
      "Reliable movement of goods, coordinated logistics and practical supply chain solutions designed around your operations."
  },
  {
    icon: FaLightbulb,
    title: "Business Consulting",
    description:
      "Practical advisory support to help businesses improve performance, make better decisions and pursue sustainable growth."
  },
  {
    icon: FaChartLine,
    title: "Strategy & Operations",
    description:
      "Clear analysis and operational thinking that turn business challenges into measurable opportunities."
  }
];

const strengths = [
  "Practical, solutions-focused approach",
  "Reliable execution from planning to delivery",
  "Local insight with a broader perspective",
  "Long-term relationships built on trust"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-black dark:to-black" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl dark:bg-indigo-950/20" />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-36 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Logistics & Consulting
              </span>
            </div>

            <h1 className="max-w-5xl text-6xl font-bold tracking-[-0.04em] text-slate-950 md:text-8xl dark:text-white">
              Moving business
              <span className="block text-indigo-600 dark:text-indigo-400">
                forward.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl dark:text-slate-400">
              We combine dependable logistics with practical business
              consulting to help organizations move goods, solve problems and
              grow with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/our-business"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-slate-950 px-7 py-4 font-medium text-white shadow-xl shadow-slate-900/10 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                Explore our business
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-700"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="relative border-t border-slate-200/80 bg-white/70 backdrop-blur dark:border-slate-900 dark:bg-black/50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 md:grid-cols-4">
            {[
              ["01", "Logistics"],
              ["02", "Consulting"],
              ["03", "Operations"],
              ["04", "Growth"]
            ].map(([number, label]) => (
              <div
                key={number}
                className="border-r border-slate-200 px-6 py-2 first:pl-0 last:border-0 dark:border-slate-800"
              >
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {number}
                </div>
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-slate-200 dark:border-slate-900">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Who we are
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Practical solutions for businesses that need to keep moving.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
              Our work sits at the intersection of movement and decision
              making. From logistics coordination to business advisory, we
              focus on understanding what a client actually needs and
              delivering solutions that work in practice.
            </p>

            <div className="mt-8 space-y-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/40">
                    <FaCheck className="text-[10px] text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50/70 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              What we do
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Two capabilities.
              <span className="block text-slate-400 dark:text-slate-600">
                One integrated approach.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:shadow-none"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all group-hover:bg-indigo-600 group-hover:text-white dark:bg-slate-900 dark:text-indigo-400 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  <service.icon />
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <a
                  href="/our-business"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                >
                  Learn more
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual / operations section */}
      <section className="border-t border-slate-200 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2 dark:bg-slate-900">
            <div className="relative min-h-[380px] overflow-hidden p-10 md:p-14">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-transparent to-transparent" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <FaGlobeAfrica className="text-5xl text-indigo-400" />
                  <h3 className="mt-8 max-w-md text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Connecting operations, people and opportunity.
                  </h3>
                </div>

                <div className="mt-12 flex gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    Logistics
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    Advisory
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    Strategy
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white p-10 md:p-14 dark:bg-black">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                Our approach
              </span>

              <h3 className="mt-5 text-3xl font-bold tracking-tight">
                Built around your business.
              </h3>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                We believe good service starts with understanding the
                operation behind the request. That means listening carefully,
                identifying the real constraint and building a solution around
                it.
              </p>

              <a
                href="/contact-us"
                className="mt-8 inline-flex w-fit items-center gap-2 font-semibold"
              >
                Talk to us
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Have a business challenge to solve?
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Let’s discuss how we can support your logistics or business
                objectives.
              </p>
            </div>

            <a
              href="/contact-us"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-950 px-7 py-4 font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              Contact us
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}