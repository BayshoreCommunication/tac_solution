"use client";

import { useState } from "react";
import CTA from "components/about/CTA";
import { ArrowRight, Mail, MapPin, Phone, Clock, Send, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if emailjs keys are configured. If not, log a warning and use mock response for preview.
    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        "EmailJS environment variables (NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) are not set. Simulating submission in development mode."
      );
      
      // Simulate API call
      setTimeout(() => {
        setSubmitStatus("success");
      }, 1500);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Failed to send email:", error);
      setErrorMessage(error?.text || "An unexpected error occurred. Please try again.");
      setSubmitStatus("error");
    }
  };

  const isEmailJSConfigured = !!(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );

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
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-emerald-100 scale-150 blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
                      <CheckCircle2 size={40} className="animate-bounce" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Message Sent!
                  </h3>

                  <p className="mx-auto mt-4 max-w-md text-slate-600">
                    Thank you for reaching out. We have received your inquiry
                    and will get back to you within one business day.
                  </p>

                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-violet-500/30"
                  >
                    Send Another Message
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Send Us a Message
                  </h2>

                  <p className="mt-3 text-slate-600">
                    Fill out the form below and we&apos;ll get back to you within
                    one business day.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    {!isEmailJSConfigured && (
                      <div className="flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
                        <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-600" />
                        <div>
                          <h4 className="font-semibold text-amber-900">Running in Simulation Mode</h4>
                          <p className="mt-1 text-sm text-amber-700">
                            EmailJS environment variables are not loaded. Submissions will simulate success but will not send a real email. Please restart your Next.js development server after configuring <code>.env.local</code>.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-start gap-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                        <AlertTriangle size={20} className="mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold">Submission Failed</h4>
                          <p className="mt-1 text-sm text-red-700">
                            {errorMessage || "Failed to send message. Please verify your internet connection and try again."}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Name & Email */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full rounded-xl border bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all duration-200 ring-1 ring-violet-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full rounded-xl border bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all duration-200 ring-1 ring-violet-100"
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
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (000) 000-0000"
                          className="w-full rounded-xl border bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all duration-200 ring-1 ring-violet-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Company Name
                        </label>

                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full rounded-xl border bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all duration-200 ring-1 ring-violet-100"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Service Interested In
                      </label>

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border bg-white px-5 py-4 text-slate-900 transition-all duration-200 ring-1 ring-violet-100"
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
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full resize-none rounded-xl border bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all duration-200 ring-1 ring-violet-100"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="inline-flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-violet-500/30 disabled:pointer-events-none disabled:opacity-60"
                    >
                      {submitStatus === "submitting" ? (
                        <>
                          Sending...
                          <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
