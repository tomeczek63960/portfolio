import Angular from "../../../public/svg/angular.svg"
import Adobexd from "../../../public/svg/adobexd.svg"
import Contentful from "../../../public/svg/contentful.svg"
import Css from "../../../public/svg/css.svg"
import Figma from "../../../public/svg/figma.svg"
import Gatsby from "../../../public/svg/gatsby.svg"
import Gsap from "../../../public/svg/gsap.svg"
import Html from "../../../public/svg/html.svg"
import Javascript from "../../../public/svg/javascript.svg"
import NextJs from "../../../public/svg/next.svg"
import Nuxt from "../../../public/svg/nuxt.svg"
import ReactJs from "../../../public/svg/react.svg"
import Redux from "../../../public/svg/redux.svg"
import Sass from "../../../public/svg/sass.svg"
import Strapi from "../../../public/svg/strapi.svg"
import Typescript from "../../../public/svg/typescript.svg"
import Vue from "../../../public/svg/vue.svg"
import StyledComponents from "../../../public/svg/styled-components.svg"
import Php from "../../../public/svg/php.svg"
import Pimcore from "../../../public/svg/pimcore.svg"
import Shopware from "../../../public/svg/shopware.svg"
import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import {StyledSkillsSection} from './style';
import Carousel from 'src/ui/Skills/Carousel';

const Skills: React.FC = () => {
  const jsSkills = [
    {
      icon: Javascript,
      text: {
        heading: 'Javascript',
        text: 'Javascript to nie tylko frameworki ale też wiedza ogólna'
      }
    },
    {
      icon: Typescript,
      text: {
        heading: 'Typescript',
        text: 'Gdy boisz się błędów to Typescript pozwoli Ci ich uniknąć przed ich popełnieniem :O'
      }
    },
    {
      icon: ReactJs,
      text: {
        heading: 'React.js',
        text: 'React.js umożliwia łatwy i przyjemny sposób tworzenia zaawansowanych aplikacji'
      }
    },
    {
      icon: NextJs,
      text: {
        heading: 'NextJs',
        text: 'Next.js to duże możliwości, zarówno dla statycznych stron jak stron z dynamicznymi danymi'
      }
    },
    {
      icon: Gatsby,
      text: {
        heading: 'Gatsby',
        text: '...'
      }
    },
    {
      icon: Redux,
      text: {
        heading: 'Redux',
        text: 'Zarządzanie danymi staje się proste i przyjemne gdy możemy je trzymać w jednym, uporządkowanym miejscu'
      }
    },
    {
      icon: Vue,
      text: {
        heading: 'Vue.js',
        text: 'Gdy masz jakiś problem lub pytania to zgrane community zawsze Ci pomoże'
      }
    },
    {
      icon: Nuxt,
      text: {
        heading: 'Nuxt.js',
        text: 'Nuxt 2 oraz Nuxt 3, options Api oraz Composition Api'
      }
    },
    {
      icon: Angular,
      text: {
        heading: 'Angular',
        text: 'Podstawowa znajomość angulara'
      }
    },
    {
      icon: Gsap,
      text: {
        heading: 'Gsap',
        text: 'Zaawansowane animacje oraz nieograniczona wyobraźnia to klucz do sukcesu'
      }
    },
    {
      icon: StyledComponents,
      text: {
        heading: 'Styled Components',
        text: 'Gdy traktujesz komponenty jako niezależne elementy to Styled Components z pewnością Ci to ułatwi'
      }
    },
  ]
  const skills = [
    {
      icon: Shopware,
      text: {
        heading: 'Shopware',
        text: 'Doświadczenie z Shopware cms w wersjach 5 oraz 6'
      },
      className: 'svg-large'
    },
    {
      icon: Pimcore,
      text: {
        heading: 'Pimcore',
        text: 'Doświadczenie z pimcore cms od wersji 4.6 do 10 (pimcore X)'
      },
      className: 'svg-large'
    },
    {
      icon: Php,
      text: {
        heading: 'PHP',
        text: 'Podstawowa znajomość php umożliwiająca płynne korzystanie templatek php oraz twig'
      }
    },
    {
      icon: Adobexd,
      text: {
        heading: 'Adobe XD',
        text: 'Płynna umiejętność korzystania'
      }
    },
    {
      icon: Figma,
      text: {
        heading: 'Figma',
        text: 'Figma oraz Adobxd to 2 podstawowe narzędzia z których otrzymuję projekty graficzne'
      }
    },
    {
      icon: Contentful,
      text: {
        heading: 'Contentful',
        text: 'Płynność w obsłudze Contentfula nie jest mi obca :)'
      }
    },
    {
      icon: Css,
      text: {
        heading: 'Css',
        text: 'Css'
      }
    },
    {
      icon: Html,
      text: {
        heading: 'Html',
        text: 'Semantyczny html to podstawa'
      }
    },
    {
      icon: Sass,
      text: {
        heading: 'Sass',
        text: 'Pożądek i jakość to jest coś co Sass z dodatkiem BEM pozwala osiągnąć'
      }
    },
    {
      icon: Strapi,
      text: {
        heading: 'Strapi',
        text: 'Gdy potrzebujesz miejsca do trzymania swoich danych do swoich aplikacji to Strapi przchodzi z pomocą'
      }
    },
  ];

  return (
    <StyledSkillsSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Stack technologiczny
      </HeadingComponent>
      <Paragraph>Poniżej przedstawiam swój stack technologiczny, jednak warto też mieć na uwadze że nic co posiada dokumentację nie jest mi straszne 😱</Paragraph>
      <Paragraph>Szybko się uczę oraz jestem otwarty na nowe doświadczenia 🐣</Paragraph>

      <HeadingComponent tagName='h3' color="#7928ca" selectionColor="#6A82FB">
        Umiejętności czysto jsowe
      </HeadingComponent>
      <Carousel items={jsSkills} />

      <HeadingComponent tagName='h3' color="#7928ca" selectionColor="#6A82FB">
        Narzędzia, Cmsy, Headless cmsy oraz wiedzą ogólna
      </HeadingComponent>
      <Carousel items={skills} />
    </StyledSkillsSection>
  );
}

export default Skills;
