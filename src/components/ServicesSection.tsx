import { motion } from "framer-motion";
import { 
  GraduationCap, Building2, BrainCircuit, Shield, Drill, 
  HardHat, Package, Leaf, Pipette, Wrench, Trash2, 
  FileCheck, Factory, Droplets, FileText, Flame
} from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Specialized Oil & Gas Training", desc: "Comprehensive industry training programs including metal fabrication and pipe fitting." },
  { icon: Building2, title: "Facility Management", desc: "End-to-end facility management for oil and gas installations." },
  { icon: BrainCircuit, title: "Oil & Gas Consulting", desc: "Strategic consulting services to optimize operations and maximize output." },
  { icon: Shield, title: "Industrial Safety Management", desc: "General industrial safety management ensuring HSE compliance." },
  { icon: Drill, title: "Drilling & Well Engineering", desc: "Full lifecycle drilling and well engineering solutions." },
  { icon: HardHat, title: "Construction Services", desc: "Industrial construction services for the energy sector." },
  { icon: Package, title: "Procurement & Supplies", desc: "Procurement and supply of oil and gas equipment and materials." },
  { icon: Leaf, title: "Environmental Management", desc: "Environmental management studies and sustainable solutions." },
  { icon: Pipette, title: "Pipeline Installation", desc: "Off-site pipe rack steel structure installation, onshore and offshore." },
  { icon: Wrench, title: "Offshore Maintenance", desc: "Offshore facilities maintenance, painting, and revamp projects." },
  { icon: Trash2, title: "Waste Management", desc: "Comprehensive waste management services for industrial operations." },
  { icon: FileCheck, title: "Inspection & Calibration", desc: "EPCI crude oil pipeline inspection, integrity test, and calibration." },
  { icon: Factory, title: "Fabrication & FPSO", desc: "Fabrication and maintenance contract services for FPSO vessels." },
  { icon: Droplets, title: "Tank Dewatering", desc: "Crude oil tank dewatering and tank farm revamp projects." },
  { icon: FileText, title: "Audit & Documentation", desc: "Comprehensive audit and documentation services." },
  { icon: Flame, title: "Gas Pipeline Projects", desc: "Gas pipeline projects for onshore and offshore facilities." },
];

interface ServicesSectionProps {
  limit?: number;
  showTitle?: boolean;
}

const ServicesSection = ({ limit, showTitle = true }: ServicesSectionProps) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary text-secondary-foreground font-heading font-medium text-xs mb-4 tracking-wider uppercase">
              What We Do
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Comprehensive oil and gas solutions spanning the full value chain, from upstream exploration to midstream operations.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayedServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-xl bg-card-gradient border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-sm text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
