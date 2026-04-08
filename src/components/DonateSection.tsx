import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Home, Utensils } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DonateDialog } from "./DonateDialog";

const uses = [
  { icon: BookOpen, label: "Education", pct: "40%" },
  { icon: Heart, label: "Healthcare", pct: "25%" },
  { icon: Home, label: "Housing", pct: "20%" },
  { icon: Utensils, label: "Nutrition", pct: "15%" },
];

const DonateSection = () => {
  const { t } = useTranslation();

  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-2">Make a Difference</p>
          <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">{t("donate.title")}</h2>
          <p className="text-primary-foreground/90">{t("donate.subtitle")}</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          {uses.map((u, i) => (
            <motion.div key={u.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center rounded-lg p-6 hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3">
                <u.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-2xl font-heading text-primary-foreground">{u.pct}</p>
              <p className="text-sm text-primary-foreground/80">{u.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <DonateDialog>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-10 text-lg hover:scale-105 transition-transform cursor-pointer">
              {t("donate.button")}
            </Button>
          </DonateDialog>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
