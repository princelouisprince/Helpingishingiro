import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { VolunteerDialog } from "./VolunteerDialog";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground">{t("contact.subtitle")}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onSubmit={handleSubmit} className="space-y-5">
            <Input placeholder={t("contact.form.name")} required maxLength={100} />
            <Input type="email" placeholder={t("contact.form.email")} required maxLength={255} />
            <Input placeholder="Subject" required maxLength={200} />
            <Textarea placeholder={t("contact.form.message")} rows={5} required maxLength={1000} className="resize-none" />
            <Button type="submit" size="lg" disabled={loading} className="w-full">
              {loading ? "Sending..." : t("contact.form.submit")}
            </Button>
          </motion.form>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">ishingiroinitiative@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Instagram</p>
                <a href="https://www.instagram.com/ishingiroinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-foreground transition-colors">
                  @ishingiroinitiative
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">0796688646</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-muted-foreground">Gisenyi, Rwanda</p>
              </div>
            </div>
            <div className="bg-warm rounded-lg p-6 border border-border mt-8">
              <p className="font-heading text-lg text-foreground mb-2">Volunteer With Us</p>
              <p className="text-sm text-muted-foreground mb-4">Join our team of dedicated volunteers and help make a real impact in children's lives. Your signup will be reviewed and approved quickly.</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                <li>Help children get access to education, mentorship, and care.</li>
                <li>Support families with practical guidance and community resources.</li>
                <li>Be part of a team that is building a brighter future for youth.</li>
              </ul>
              <VolunteerDialog>
                <Button size="sm" variant="secondary" className="cursor-pointer">Sign Up to Volunteer</Button>
              </VolunteerDialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
