import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="flex items-center gap-2 font-heading text-xl text-primary-foreground mb-3">
              <img src="/favicon.png" alt="Logo" className="w-6 h-6 object-contain" />
              Ishingiro Initiatives
            </a>
            <p className="text-sm text-primary-foreground/60">{t("footer.description")}</p>
          </div>
          <div>
            <p className="font-semibold text-primary-foreground mb-3">Quick Links</p>
            <div className="space-y-2">
              {[
                { label: t("nav.about"), href: "about" },
                { label: t("nav.services"), href: "services" },
                { label: t("nav.impact"), href: "impact" },
                { label: t("nav.donate"), href: "donate" },
                { label: t("nav.contact"), href: "contact" }
              ].map((l) => (
                <a key={l.href} href={`#${l.href}`} className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-primary-foreground mb-3">Newsletter</p>
            <p className="text-sm text-primary-foreground/60 mb-3">Stay updated on our programs and impact.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-md px-3 py-2 text-sm bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 border border-primary-foreground/20 focus:outline-none focus:border-accent" />
              <button className="rounded-md px-4 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/40">© 2026 Ishingiro Initiatives. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
