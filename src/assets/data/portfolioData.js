import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import AllOperation from "../images/resize-17068148211253021813allopeartion.png";
import ardeElKhalije from "../images/arde-el-khalige .jpg";
import comptabilit from "../images/comptabilit.jpg";
import centrederadiologie from "../images/centre-de-radiologie.jpg";
import arbredezoetravaux from "../images/arbre-de-zoe-travaux.jpg";
import enaraI from "../images/enara.jpg";
import garetI from "../images/garet.png";
import tropical from "../images/tropical-plante.jpg";
import UiUx from "../images/resize-1706826948237646646UIUXSITE.png";
import PasswordGenerator from "../images/resize-17068269281467972998passwordgenerater.png";
import crudImage from "../images/resize-17068283771794255777home.png";

const portfolios = [
  {
    id: "01",
    imgUrl: AllOperation,
    category: "Front-End",
    title: "AllOperation",
    description: " Vitrine website that show all startup project,services....",
    technologies: ["React", "Nextjs", "Tailwind css", "Hygraphe"],
    siteUrl: "https://www.alloperations.ma/",
  },
  {
    id: "02",
    imgUrl: ardeElKhalije,
    category: "Wordpress",
    title: "Ardelkhaleej",
    description:
      " Creation of an e-commerce website with certain specificities.",
    technologies: ["Wordpress"],
    siteUrl: "https://ardelkhaleej.com/",
  },
  {
    id: "03",
    imgUrl: comptabilit,
    category: "Wordpress",
    title: "comptabilit",
    description:
      "Creation of a website respecting a certain number of criteria imposed by the client.",
    technologies: ["Wordpress"],
    siteUrl: "https://comptabilit.ca/",
  },
  {
    id: "04",
    imgUrl: arbredezoetravaux,
    category: "Front-End",
    title: "arbredezoetravaux",
    description: " Vitrine website that show all startup project,services....",
    technologies: ["React", "Tailwind css", "Nextjs"],
    siteUrl: "https://www.arbredezoetravaux.com/",
  },
  {
    id: "05",
    imgUrl: centrederadiologie,
    category: "Wordpress",
    title: " Radiologie-ouladhriz",
    description:
      "Creation of a website respecting a certain number of criteria imposed by the client.",
    technologies: ["Wordpress"],
    siteUrl: "https://radiologie-ouladhriz.ma/",
  },
  {
    id: "06",
    imgUrl: enaraI,
    category: "Wordpress",
    title: "Enara",
    description:
      "Creation of a website respecting a certain number of criteria imposed by the client.",
    technologies: ["Wordpress"],
    siteUrl: "https://enara.ma/",
  },
  {
    id: "07",
    imgUrl: garetI,
    category: "Front-End",
    title: "Garet",
    description: " Vitrine website that show all startup project,services....",
    technologies: ["React", "Tailwind css", "Hygraphe"],
    siteUrl: "https://www.garetmining.com/en",
  },

  {
    id: "08",
    imgUrl: tropical,
    category: "Front-End",
    title: "Tropical Plante",
    description: " Vitrine website that show all startup project,services....",
    technologies: ["React", "Tailwind css", "Hygraphe"],
    siteUrl: "https://tropicalplant.ma/",
  },
  {
    id: "09",
    imgUrl: UiUx,
    category: "Front-End",
    title: "UI-UX",
    description: "A simple UI-UX website for practicing Tailwin css",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://ui-ux-travel-project-m.vercel.app/",
  },
  {
    id: "10",
    imgUrl: PasswordGenerator,
    category: "Front-End",
    title: "password-generator",
    description:
      " this website for password generation help me understanding the work of state in reactjs  ",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://password-generator-puce-nine.vercel.app/",
  },
  {
    id: "11",
    imgUrl: crudImage,
    category: "Back-End",
    title: "CRUD Webiste",
    description:
      "While exploring this website, I've deepened my grasp of key web development concepts. The rich content has honed my skills, covering crucial areas like building RESTful APIs with JSON Web Tokens (JWT),Authorization,CRUD operation...",
    technologies: ["React", "Tailwind css", "Nodejs", "Expressjs"],
    siteUrl: "https://github.com/MOUAD-EL01/Mern-app/blob/main/README.md",
  },
];

export default portfolios;
