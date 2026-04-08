import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
  { text: "Ishingiro Initiatives gave my daughter the support she needed when I couldn't do it alone. The counselors and mentors truly care about every child.", author: "Maria G.", role: "Parent" },
  { text: "As a single father, I was overwhelmed. The parent counseling program helped me become the dad my kids deserve. I'm forever grateful.", author: "David T.", role: "Guardian" },
  { text: "My son went from struggling in school to earning honor roll. The tutoring and mentorship changed his life — and mine.", author: "Linda K.", role: "Parent" },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">{t("testimonials.title")}</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-sm relative border border-border">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
