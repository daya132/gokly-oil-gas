import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Award, Users, Shield, Lightbulb } from "lucide-react";
import teamImg from "@/assets/team-engineers.jpg";
import engineerImg from "@/assets/engineer-pipeline.jpg";
import drillingImg from "@/assets/drilling-engineers.jpg";

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in every operation and relationship." },
  { icon: Award, title: "Excellence", desc: "We strive for outstanding quality in every service we deliver." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace new technologies and methods to stay ahead of industry needs." },
  { icon: Users, title: "Collaboration", desc: "We believe in meaningful partnerships with all stakeholders." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={drillingImg} alt="Engineers at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gokly-dark/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-foreground font-heading font-medium text-xs mb-4 tracking-wider uppercase border border-primary-foreground/20">
              About Us
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-primary-foreground">
              Who We Are
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                A Leading Provider of Comprehensive Oil & Gas Solutions
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">
                Gokly Oil and Gas Services Limited is a leading provider of comprehensive solutions to the oil and gas industry. Our mission is to deliver exceptional services that enhance operational efficiency, safety, sustainability, and stakeholders' collaboration.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">
                At Gokly Oil and Gas Services Limited, we believe in integrity, excellence, and innovation. Our track record speaks for itself, with a history of successful projects and satisfied clients. We understand the intricacies of the oil and gas industry, and our team is always ready to collaborate with you to achieve your goals.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Operating across Nigeria's midstream and upstream sectors, we bring decades of combined experience to every project, ensuring world-class outcomes for our clients and communities.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src={teamImg} alt="Gokly team" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
              <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-card">
                <p className="font-heading font-bold text-2xl">10+</p>
                <p className="font-body text-sm opacity-80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To deliver exceptional oil and gas services that enhance operational efficiency, safety, sustainability, and stakeholders' collaboration, while maintaining the highest standards of integrity and professionalism.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To be the foremost oil and gas service company in Nigeria and Africa, recognized for our innovation, reliability, and commitment to sustainable energy solutions that power the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">The principles that guide everything we do at Gokly.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
              <motion.div key={val.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-xl bg-card-gradient border border-border hover:shadow-card transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <val.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{val.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Our Expert Team</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">Experienced professionals dedicated to delivering world-class oil and gas services.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <img src={engineerImg} alt="Gokly engineer inspecting equipment" className="w-full max-w-4xl mx-auto h-96 object-cover rounded-2xl shadow-elevated" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
