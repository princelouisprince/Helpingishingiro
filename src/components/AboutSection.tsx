import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutImg from "@/assets/about-story-new.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">{t("about.title")}</h2>
          <p className="text-muted-foreground">{t("about.subtitle")}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={aboutImg} alt="Children playing together" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg w-full h-[400px] object-cover object-center" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-2xl font-heading text-foreground">{t("about.missionTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.missionDesc")}
            </p>
            <h3 className="text-2xl font-heading text-foreground">{t("about.visionTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.visionDesc")}
            </p>
            <div className="flex gap-8 pt-4 border-t border-border mt-6">
              <div>
                <p className="text-2xl font-heading text-primary">2025</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div>
                <p className="text-2xl font-heading text-primary">2</p>
                <p className="text-sm text-muted-foreground">Helped</p>
              </div>
              <div>
                <p className="text-2xl font-heading text-primary">10</p>
                <p className="text-sm text-muted-foreground">Impact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
