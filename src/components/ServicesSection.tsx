import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  { icon: Heart, titleKey: "Child Support Programs", descKey: "Comprehensive care including nutrition, healthcare, and emotional support for children in need." },
  { icon: Users, titleKey: "Parent Counseling", descKey: "Professional guidance and support groups for parents navigating challenges in raising their children." },
  { icon: GraduationCap, titleKey: "Education Assistance", descKey: "Tutoring, school supplies, scholarships, and after-school programs to keep children learning." },
  { icon: BookOpen, titleKey: "Mentorship", descKey: "Pairing children with caring mentors who provide guidance, encouragement, and a positive role model." },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground">{t("services.subtitle")}</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.titleKey} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center group border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading text-foreground mb-3">{s.titleKey}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.descKey}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
