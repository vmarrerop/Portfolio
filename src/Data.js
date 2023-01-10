import { FaNodeJs, FaReact, FaSass, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin } from "react-icons/fa";
import { DiJavascript1, DiResponsive } from "react-icons/di";
import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";
import work1 from "./assets/work1.mp4";
import work2 from "./assets/work2.mp4";
import work3 from "./assets/work3.mp4";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaLinkedin />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "José Vicente"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+57 3222827733"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "vmarrerop@gmail.com"
  }
]

export const icons = [<DiJavascript1 />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <SiMysql/>, <SiMongodb/>, <DiResponsive/>]

export const experiences = [
  {
    id: 1,
    year: "2021",
    position: "Associate Web Developer",
    company: "Universidad Distrital Francisco José de Caldas"
  },
  {
    di: 2,
    year: "2020",
    position: "Junior Web Developer",
    company: "Orbis Geoscripting"
  },
  {
    id: 3,
    year: "2020",
    position: "Bilingual customer service agent",
    company: "Teleperformance"
  }
]
export const finishes = [
  {
    id: 1,
    number: 'ReactJs',
    itemName: "2+ experience years"
  },
  {
    id: 2,
    number: "NodeJs",
    itemName: "2+ experience years"
  },
  {
    id: 3,
    number: "Databases",
    itemName: "2+ experience years"
  },
  {
    id: 4,
    number: "Coding",
    itemName: "3+ years experience"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
  infoText: "Chapinero Alto, Bogotá D.C | CO"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "vmarrerop@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+57 3222827733"
  }
]
