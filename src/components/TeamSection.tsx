import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import team1 from "@/assets/hirwa-franklin.jpg";
import team2 from "@/assets/niyirera-prince-louis.png";

const team = [
  { name: "Hirwa Franklin", role: "Founder & Director", img: team1 },
  { name: "Niyirera Prince Louis", role: "Volunteer Coordinator", img: team2 },
];

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-24 bg-muted">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Our People</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">{t("team.title")}</h2>
          <p className="text-muted-foreground">{t("team.subtitle")}</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {team.map((person, i) => (
            <motion.div key={person.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center group">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <img src={person.img} alt={person.name} width={512} height={512} loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-heading text-xl text-foreground mt-4">{person.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
