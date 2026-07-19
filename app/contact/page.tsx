import CTA from "components/about/CTA";
import { ArrowRight, Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F7F8FC] to-white py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
              Contact Us
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Let&apos;s Build Something Great Together
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you&apos;re looking for professional cybersecurity
              consulting, digital solutions, or training, our team is ready to
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Contact Information
                </h2>

                <p className="mt-3 text-slate-600">
                  Reach out using any of the methods below or send us a message.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@tacsolutions.biz",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (703) 688-3038",
                  },
                  {
                    icon: MapPin,
                    title: "Locations",
                    content: (
                      <>
                        <p>Washington, DC, USA</p>
                        <p>Greensboro, NC, USA</p>
                      </>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: (
                      <>
                        <p>Monday – Friday</p>
                        <p>9:00 AM – 6:00 PM</p>
                      </>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <item.icon size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <div className="mt-1 text-slate-600">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:col-span-3">
              <h2 className="text-3xl font-bold text-slate-900">
                Send Us a Message
              </h2>

              <p className="mt-3 text-slate-600">
                Fill out the form below and we&apos;ll get back to you within
                one business day.
              </p>

              <form className="mt-10 space-y-6">
                {/* Name & Email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-xl border  bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400  transition-all duration-200  ring-1 ring-violet-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border  bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400  transition-all duration-200  ring-1 ring-violet-100"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      className="w-full rounded-xl border  bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400  transition-all duration-200  ring-1 ring-violet-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full rounded-xl border  bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400  transition-all duration-200  ring-1 ring-violet-100"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Service Interested In
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-xl border  bg-white px-5 py-4 text-slate-900  transition-all duration-200  ring-1 ring-violet-100"
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>

                    <option>Cybersecurity Consulting</option>
                    <option>Fractional CISO</option>
                    <option>Compliance</option>
                    <option>Training</option>
                    <option>Risk Assessment</option>
                    <option>Cloud Security</option>
                    <option>Security Awareness</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Details <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    rows={6}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border  bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400  transition-all duration-200  ring-1 ring-violet-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-violet-500/30"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
