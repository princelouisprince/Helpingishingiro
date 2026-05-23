import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getMembers, MEMBERS_UPDATED_EVENT, Member } from "@/lib/membersStore";

const TeamSection = () => {
  const { t } = useTranslation();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    // Initial load
    setMembers(getMembers());

    // Listen to updates from admin panel
    const handleUpdate = () => {
      setMembers(getMembers());
    };

    window.addEventListener(MEMBERS_UPDATED_EVENT, handleUpdate);
    return () => {
      window.removeEventListener(MEMBERS_UPDATED_EVENT, handleUpdate);
    };
  }, []);

  // Separate members by category
  const orgMembers = members.filter((m) => m.category === "Organization");
  const familyMembers = members.filter((m) => m.category === "Family");
  const otherMembers = members.filter((m) => m.category !== "Organization" && m.category !== "Family");

  return (
    <section id="team" className="py-24 bg-muted/40 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-3 inline-block">
            {t("team.tagline", "Our People")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight mt-2">
            {t("team.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t("team.subtitle")}
          </p>
        </motion.div>

        {/* Organization Team Subsection */}
        {orgMembers.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-primary/30"></span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-wide text-center uppercase">
                {t("team.organization", "Organization Team")}
              </h3>
              <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-primary/30"></span>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto justify-center">
              {orgMembers.map((person, i) => (
                <motion.div 
                  key={person.id || person.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="text-center group bg-card hover:bg-card/80 p-6 rounded-2xl border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden shadow-inner border-4 border-background group-hover:border-primary/10 transition-colors bg-muted flex items-center justify-center relative">
                    {person.img ? (
                      <img src={person.img} alt={person.name} width={512} height={512} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-bold text-3xl font-heading">
                        {person.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
                    {t("team.category.organization", "Staff & Leaders")}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-foreground tracking-tight">{person.name}</h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Family & Household Members Subsection */}
        {familyMembers.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-secondary/30"></span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-wide text-center uppercase">
                {t("team.family", "Family & Community")}
              </h3>
              <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-secondary/30"></span>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto justify-center">
              {familyMembers.map((person, i) => (
                <motion.div 
                  key={person.id || person.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="text-center group bg-card hover:bg-card/80 p-6 rounded-2xl border border-border/50 hover:border-secondary/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden shadow-inner border-4 border-background group-hover:border-secondary/10 transition-colors bg-muted flex items-center justify-center relative">
                    {person.img ? (
                      <img src={person.img} alt={person.name} width={512} height={512} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center text-secondary font-bold text-3xl font-heading">
                        {person.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20 mb-3">
                    {t("team.category.family", "Family / Member")}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-foreground tracking-tight">{person.name}</h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Members Subsection if any */}
        {otherMembers.length > 0 && (
          <div>
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-muted-foreground/30"></span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-wide text-center uppercase">
                {t("team.other", "Other Support")}
              </h3>
              <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-muted-foreground/30"></span>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto justify-center">
              {otherMembers.map((person, i) => (
                <motion.div 
                  key={person.id || person.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="text-center group bg-card hover:bg-card/80 p-6 rounded-2xl border border-border/50 hover:border-muted-foreground/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden shadow-inner border-4 border-background group-hover:border-muted-foreground/10 transition-colors bg-muted flex items-center justify-center relative">
                    {person.img ? (
                      <img src={person.img} alt={person.name} width={512} height={512} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center text-muted-foreground font-bold text-3xl font-heading">
                        {person.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-muted text-muted-foreground border border-muted-foreground/20 mb-3">
                    {person.category}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-foreground tracking-tight">{person.name}</h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TeamSection;
