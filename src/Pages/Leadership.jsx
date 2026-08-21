import { motion } from "framer-motion";
import { FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const leaders = [
  {
    name: "Victor Mugo",
    role: "Leadership Title",
    initials: "VM",
    bio: "A brief professional biography and overview of Victor's role and experience will appear here.",
    linkedin: "#",
  },
  {
    name: "Collins Murimi",
    role: "Leadership Title",
    initials: "CM",
    bio: "A brief professional biography and overview of Collins' role and experience will appear here.",
    linkedin: "#",
  },
  {
    name: "James Mutugi",
    role: "Leadership Title",
    initials: "JM",
    bio: "A brief professional biography and overview of James' role and experience will appear here.",
    linkedin: "#",
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 dark:border-slate-900">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="absolute right-[15%] top-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.07] blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:pb-28 lg:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-10 bg-indigo-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                Leadership
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-slate-950 md:text-7xl dark:text-white">
              The people
              <span className="block text-indigo-600">
                moving us forward.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
              Meet the leadership team guiding our business and shaping its
              future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Our team
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-white">
            Leadership with a shared vision.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/[0.05] dark:border-slate-800 dark:bg-black dark:hover:border-slate-700 dark:hover:shadow-none"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/[0.03] blur-3xl transition-all duration-300 group-hover:bg-indigo-500/[0.07]" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-2xl font-bold text-slate-500 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white dark:bg-slate-900 dark:text-slate-500 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  {leader.initials}
                </div>

                <span className="text-sm font-bold text-slate-200 dark:text-slate-800">
                  0{index + 1}
                </span>
              </div>

              <div className="relative">
                <h3 className="mt-10 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {leader.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-indigo-600">
                  {leader.role}
                </p>

                <p className="mt-5 min-h-[72px] text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {leader.bio}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Profile
                  </span>

                  <a
                    href={leader.linkedin}
                    aria-label={`${leader.name} LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/10"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-900 dark:bg-slate-950/60">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[100px]" />

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
                Work with us
              </span>

              <div className="h-px w-8 bg-indigo-500" />
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 md:text-5xl dark:text-white">
              Let's build something
              <span className="block text-indigo-600">
                meaningful together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-600 dark:text-slate-400">
              Whether you need logistics support or strategic guidance, our
              team is ready to understand your needs and find the right way
              forward.
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