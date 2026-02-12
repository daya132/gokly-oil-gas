import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/hero-oil-rig.jpg";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "By Okaka Rd, New Road, Yenagoa 560212, Bayelsa State, Nigeria", href: undefined },
  { icon: Phone, label: "Phone", value: "+234 XXX XXX XXXX", href: "tel:+234XXXXXXXX" },
  { icon: Mail, label: "Email", value: "info@goklyoilandgas.com", href: "mailto:info@goklyoilandgas.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri: 8:00 AM - 5:00 PM (WAT)", href: undefined },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
      });
      if (error) throw error;
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Oil and gas team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gokly-dark/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-foreground font-heading font-medium text-xs mb-4 tracking-wider uppercase border border-primary-foreground/20">
              Contact Us
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-primary-foreground">
              Get in Touch
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-16 relative z-10">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="text-primary font-body text-sm leading-relaxed hover:underline transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground font-body mb-8">Fill in the form below and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-heading font-medium text-sm text-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30 transition"
                  />
                </div>
                <div>
                  <label className="block font-heading font-medium text-sm text-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30 transition"
                  />
                </div>
                <div>
                  <label className="block font-heading font-medium text-sm text-foreground mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-full hover:opacity-90 transition-opacity shadow-soft disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Our Location</h2>
              <p className="text-muted-foreground font-body mb-8">Visit us at our office in Yenagoa, Bayelsa State.</p>
              <div className="rounded-2xl overflow-hidden shadow-card border border-border h-[420px]">
                <iframe
                  title="Gokly Oil and Gas Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5!2d6.2636!3d4.9267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a02!2sGokly+Oil+and+Gas+Services+Limited!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng&q=By+Okaka+Rd,+new+road,+Yenagoa+560212,+Bayelsa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
