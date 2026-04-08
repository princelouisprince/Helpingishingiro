import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { useTranslation } from "react-i18next";
import { DonateDialog } from "./DonateDialog";
import heroImg from "@/assets/hero-planting.jpg";

const StatCounter = ({ label, end }: { label: string; end: number }) => {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center p-4">
      <p className="text-3xl md:text-4xl font-heading text-primary-foreground">{count.toLocaleString()}</p>
      <p className="text-sm text-primary-foreground/80">{label}</p>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("hero.stats.children"), end: 2 },
    { label: t("hero.stats.families"), end: 1 },
    { label: t("hero.stats.volunteers"), end: 4 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Hands planting a seedling"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-secondary/80 dark:bg-black/60 mix-blend-multiply" />
      <div className="container relative z-10 py-32 mt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-heading text-primary-foreground leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-4 font-body">
            {t("hero.subtitle")}
          </p>
          <p className="text-base text-primary-foreground/80 mb-8 max-w-2xl">
            Our goal is to help 50 students, and so far 2 have been helped.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#contact">{t("hero.getHelp")}</a>
            </Button>
            <DonateDialog>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer">
                {t("hero.support")}
              </Button>
            </DonateDialog>
          </div>
          <p className="text-sm text-primary-foreground/80 mt-4 max-w-2xl">
            Join 4 volunteers as we work toward helping 50 children — 2 supported so far.
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-lg">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
