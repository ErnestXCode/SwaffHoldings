import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: FaPhone,
    title: "Call us",
    value: "+254 XXX XXX XXX",
  },
  {
    icon: FaEnvelope,
    title: "Email us",
    value: "info@companyname.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit us",
    value: "Nairobi, Kenya",
  },
  {
    icon: FaClock,
    title: "Business hours",
    value: "Monday – Friday, 8:00 AM – 5:00 PM",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-black">
      <section className="relative isolate overflow-hidden border-b border-slate-200 dark:border-slate-900">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="absolute left-[20%] top-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.08] blur-[120px]" />

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
                Contact Us
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-slate-950 md:text-7xl dark:text-white">
              Let&apos;s start
              <span className="block text-indigo-600">a conversation.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
              Whether you need logistics support or strategic business advice,
              our team is ready to discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Contact details
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Reach us directly.
            </h2>

            <div className="mt-10 space-y-7">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10">
                    <detail.icon />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                      {detail.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                What happens next?
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "We review your inquiry.",
                  "The right member of our team gets in touch.",
                  "We discuss your requirements and next steps.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-sm font-bold text-indigo-600">
                      0{index + 1}
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/[0.04] md:p-10 dark:border-slate-800 dark:bg-black dark:shadow-none">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[480px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10">
                    <FaCheckCircle className="text-4xl" />
                  </div>

                  <h3 className="mt-7 text-3xl font-bold text-slate-950 dark:text-white">
                    Message received.
                  </h3>

                  <p className="mt-3 max-w-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Thank you for getting in touch. A member of our team will
                    review your inquiry and respond shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                      Tell us how we can help.
                    </h2>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Complete the form and we&apos;ll get back to you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-800 dark:bg-black dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Email
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-800 dark:bg-black dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        What can we help with?
                      </label>

                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none transition-colors focus:border-indigo-400 dark:border-slate-800 dark:bg-black dark:text-white dark:focus:border-indigo-500"
                      >
                        <option value="">Select an option</option>
                        <option value="Logistics">
                          Logistics solutions
                        </option>
                        <option value="Consulting">
                          Business consulting
                        </option>
                        <option value="Partnership">
                          Partnership opportunity
                        </option>
                        <option value="General">
                          General inquiry
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Message
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Tell us about your requirements..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-800 dark:bg-black dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-500"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    >
                      Send inquiry
                      <FaPaperPlane className="text-sm transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}