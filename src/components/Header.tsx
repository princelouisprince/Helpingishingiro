import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { DonateDialog } from "./DonateDialog";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.impact"), href: "#impact" },
    { label: t("nav.team"), href: "#team" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-heading text-xl text-primary">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8 object-contain" />
          Ishingiro Initiatives
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <select 
            onChange={handleLanguageChange} 
            value={i18n.language}
            className="bg-transparent text-foreground border border-border rounded-md text-sm outline-none px-2 py-1 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="rw">Kinyarwanda</option>
          </select>
          <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 -mt-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
          </button>
          <DonateDialog>
            <Button size="sm" className="cursor-pointer">
              {t("nav.donate")}
            </Button>
          </DonateDialog>
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 -mt-[1.2rem]" />
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-card border-b border-border px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <select 
            onChange={handleLanguageChange} 
            value={i18n.language}
            className="bg-muted text-foreground border border-border rounded-md text-sm outline-none px-2 py-2 w-full text-center"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="rw">Kinyarwanda</option>
          </select>
          <DonateDialog>
            <Button size="sm" className="w-full" onClick={() => setOpen(false)}>
              {t("nav.donate")}
            </Button>
          </DonateDialog>
        </nav>
      )}
    </header>
  );
};

export default Header;
