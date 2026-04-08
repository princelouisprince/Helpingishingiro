import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        impact: "Impact",
        team: "Team",
        contact: "Contact",
        donate: "Donate",
      },
      hero: {
        title: "Helping Children Build a Better Future",
        subtitle: "We empower children and support families through education, mentorship, and community programs. Every child deserves the chance to thrive.",
        getHelp: "Get Help",
        support: "Support a Child",
        stats: {
          children: "Children Helped",
          families: "Families Supported",
          volunteers: "Volunteers Active"
        }
      },
      about: {
        title: "About Ishingiro Initiatives",
        subtitle: "Founded in 2015 locally, we are dedicated to creating lasting positive change in our community through comprehensive support programs that address the root causes of poverty.",
        missionTitle: "Our Mission",
        missionDesc: "To envision a world where every child has the opportunity to realize their full potential, regardless of their background.",
        visionTitle: "Our Vision",
        visionDesc: "To continuously provide access to quality education, healthcare, and strong mentorship for vulnerable children.",
      },
      services: {
        title: "Our Programs",
        subtitle: "Comprehensive support for children and families",
      },
      impact: {
        title: "Our Impact",
        subtitle: "Real stories of change from our community",
      },
      team: {
        title: "Our Team",
        subtitle: "Meet the dedicated individuals making a difference",
      },
      testimonials: {
        title: "Stories of Hope",
        subtitle: "Hear from those we've helped",
      },
      donate: {
        title: "Make a Difference Today",
        subtitle: "Your support helps us reach more children and families in need.",
        button: "Donate Now",
      },
      contact: {
        title: "Get in Touch",
        subtitle: "We'd love to hear from you. Reach out to learn more or get involved.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message",
        }
      },
      footer: {
        rights: "All rights reserved.",
        description: "Empowering children and families for a brighter future."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        impact: "Impact",
        team: "Équipe",
        contact: "Contact",
        donate: "Faire un don",
      },
      hero: {
        title: "Aider les enfants à bâtir un avenir meilleur",
        subtitle: "Nous autonomisons les enfants et soutenons les familles par l'éducation, le mentorat et les programmes communautaires. Chaque enfant mérite la chance de s'épanouir.",
        getHelp: "Obtenir de l'aide",
        support: "Soutenir un enfant",
        stats: {
          children: "Enfants aidés",
          families: "Familles soutenues",
          volunteers: "Bénévoles actifs"
        }
      },
      about: {
        title: "À propos d'Ishingiro Initiatives",
        subtitle: "Fondés localement en 2015, nous nous engageons à créer un changement positif durable dans notre communauté en proposant des programmes de soutien globaux.",
        missionTitle: "Notre Mission",
        missionDesc: "Envisager un monde où chaque enfant a la possibilité de réaliser son plein potentiel, peu importe ses origines.",
        visionTitle: "Notre Vision",
        visionDesc: "Offrir un accès continu à une éducation de qualité, aux soins de santé et à un mentorat solide pour les enfants vulnérables.",
      },
      services: {
        title: "Nos Programmes",
        subtitle: "Un soutien complet pour les enfants et les familles",
      },
      impact: {
        title: "Notre Impact",
        subtitle: "De vraies histoires de changement dans notre communauté",
      },
      team: {
        title: "Notre Équipe",
        subtitle: "Découvrez les personnes dévouées qui font la différence",
      },
      testimonials: {
        title: "Histoires d'Espoir",
        subtitle: "Écoutez ceux que nous avons aidés",
      },
      donate: {
        title: "Faites la différence aujourd'hui",
        subtitle: "Votre soutien nous aide à toucher plus d'enfants et de familles dans le besoin.",
        button: "Faire un don",
      },
      contact: {
        title: "Contactez-nous",
        subtitle: "Nous serions ravis d'avoir de vos nouvelles. Contactez-nous pour en savoir plus.",
        form: {
          name: "Nom",
          email: "E-mail",
          message: "Message",
          submit: "Envoyer le message",
        }
      },
      footer: {
        rights: "Tous droits réservés.",
        description: "Autonomiser les enfants et les familles pour un avenir meilleur."
      }
    }
  },
  rw: {
    translation: {
      nav: {
        home: "Ahabanza",
        about: "Ibitwerekeye",
        services: "Serivisi",
        impact: "Ingaruka",
        team: "Ikipe Yacu",
        contact: "Twandikire",
        donate: "Tanga Inkunga",
      },
      hero: {
        title: "Gufasha Abana Kubaka Ejo Heza",
        subtitle: "Dufasha abana n'imiryango binyuze mu burezi, inama, na porogaramu z'abaturage. Buri mwana akwiye amahirwe yo gutera imbere.",
        getHelp: "Haba Ubufasha",
        support: "Fasha Umwana",
        stats: {
          children: "Abana bafashijwe",
          families: "Imiryango yafashijwe",
          volunteers: "Abakorerabushake"
        }
      },
      about: {
        title: "Ibyerekeye Ishingiro Initiatives",
        subtitle: "Twashinzwe mu 2015 mu gihugu, twiyemeje kuzana impinduka nziza kandi zirambye mu baturage binyuze muri gahunda zitandukanye.",
        missionTitle: "Intego Yacu",
        missionDesc: "Kurema isi aho buri mwana wese afite amahirwe yo kwagura impano ze neza.",
        visionTitle: "Icyerekezo Cyacu",
        visionDesc: "Gutanga uburezi bufite ireme, ubuvuzi, n'ubujyanama ku bana batishoboye.",
      },
      services: {
        title: "Porogaramu Zacu",
        subtitle: "Ubufasha bwuzuye ku bana n'imiryango",
      },
      impact: {
        title: "Ibyo Tumaze Kugaho",
        subtitle: "Inkuru z'impinduka nziza mu baturage bacu",
      },
      team: {
        title: "Ikipe Yacu",
        subtitle: "Menya abantu biyemeje gukora impinduka",
      },
      testimonials: {
        title: "Inkuru z'Icyizere",
        subtitle: "Umva ibyo abatugezeho bavuga",
      },
      donate: {
        title: "Gira Uruhare Uyu Munsi",
        subtitle: "Inkunga yanyu idufasha kugera ku bana n'imiryango myinshi ibenkeneye.",
        button: "Tanga Inkunga",
      },
      contact: {
        title: "Twandikire",
        subtitle: "Twakwishimira kumva ibitekerezo byawe. Twandikire umenye byinshi.",
        form: {
          name: "Izina",
          email: "Imeri",
          message: "Ubutumwa",
          submit: "Ohereza Ubutumwa",
        }
      },
      footer: {
        rights: "Uburenganzira bwose burabitswe.",
        description: "Dufasha abana n'imiryango kugira ejo heza."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
