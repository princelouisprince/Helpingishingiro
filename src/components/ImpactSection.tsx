import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useTranslation } from "react-i18next";

const ProgressBar = () => {
  const { count, ref } = useCountUp(2, 2000);
  const goal = 50;
  const pct = Math.min((count / goal) * 100, 100);
  return (
    <div ref={ref} className="bg-card rounded-lg p-8 shadow-sm border border-border">
      <div className="flex justify-between items-end mb-3">
        <div>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Goal</p>
          <p className="text-2xl font-heading text-foreground">We are willing to help 50 children</p>
        </div>
        <p className="text-lg font-heading text-primary">{pct.toFixed(0)}%</p>
      </div>
      <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} />
      </div>
      <p className="text-sm text-muted-foreground mt-2">{count.toLocaleString()} of {goal} children reached</p>
    </div>
  );
};

const stories = [
  { name: "Gad's Story", text: "At 8 years old, Gad was falling behind in school. Through our mentorship program, he gained confidence, improved his grades, and now dreams of becoming a doctor." },
  { name: "The Gad Family", text: "After losing their home, the Gad family found support through our parent counseling and housing assistance program. Today, they're thriving in a stable environment." },
];

const ImpactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">{t("impact.title")}</h2>
          <p className="text-muted-foreground">{t("impact.subtitle")}</p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto mb-16">
          <ProgressBar />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="bg-warm rounded-lg p-8 border border-border">
              <h3 className="text-xl font-heading text-foreground mb-3">{s.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
