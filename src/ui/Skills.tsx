import styled from 'styled-components'
import { useRef } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useCircleCarousel } from 'src/hooks/useCircleCarousel';
import Angular from "../../public/svg/angular.svg"
import Adobexd from "../../public/svg/adobexd.svg"
import Contentful from "../../public/svg/contentful.svg"
import Css from "../../public/svg/css.svg"
import Figma from "../../public/svg/figma.svg"
import Gatsby from "../../public/svg/gatsby.svg"
import Gsap from "../../public/svg/gsap.svg"
import Html from "../../public/svg/html.svg"
import Javascript from "../../public/svg/javascript.svg"
import NextJs from "../../public/svg/next.svg"
import Nuxt from "../../public/svg/nuxt.svg"
import ReactJs from "../../public/svg/react.svg"
import Redux from "../../public/svg/redux.svg"
import Sass from "../../public/svg/sass.svg"
import Strapi from "../../public/svg/strapi.svg"
import Typescript from "../../public/svg/typescript.svg"
import Vue from "../../public/svg/vue.svg"
import StyledComponents from "../../public/svg/styled-components.svg"
import Php from "../../public/svg/php.svg"
import Pimcore from "../../public/svg/pimcore.svg"
import Shopware from "../../public/svg/shopware.svg"

const StyledCircleCarousel = styled.div`
  position: relative;
	padding-top: 100%;
  svg {
    width: 30px;
    @media screen and (min-width: 768px) {
      width: 35px;
    }
    @media screen and (min-width: 1024px) {
      width: 45px;
    }
    @media screen and (min-width: 1920px) {
      width: 80px;
    }
    &.svg-large {
      transform: scale(2);
    }
  }
`
const StyledSlidesText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 45px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: rgba(red,.3);
    @media screen and (min-width: 1920px) {
      padding: 180px 90px 80px;
    }
    h5, p {
      transform: translateY(-40%);
      opacity: 0;
      pointer-events: none;
    }
    h5 {
      line-height: 1;
      font-weight: 700;
      color: orange;
      text-align: center;
      font-size: 14px;
      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 24px;
      }
    }
    p {
      margin-top: 10px;
      color: #cacaca;
      font-size: 12px;
      line-height: 15px;
      min-height: 60px;
      max-width: 230px;
      @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 19px;
        min-height: 80px;
      }
      @media screen and (min-width: 1024px) {
        margin-top: 30px;
        font-size: 16px;
        line-height: 20px;
        max-width: 270px;
      }
    }
  }
`
const StyledPagination = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  transition-property: transform;
  transition-timing-function: ease-out;
  pointer-events: none;
  user-select: none;
  svg {
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
  }

  .dot {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    pointer-events: auto;
    transition: .3s;
    &:hover {
      transform: translate(-50%, -50%);
      cursor: pointer;
      svg {
        filter: grayscale(0%);
      }
      /* svg ma mieć kolor */
    }
  }
  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .item.active {
    // svg ma mieć kolor
    svg {
      transform: scale(1.5);
      filter: grayscale(0%);
      &.svg-large {
        transform: scale(2.5);
      }
    }
  }
`
const StyledCircleCarouselIcon = styled.div`
`

function Skills() {
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
  const [carousel, setCarousel] = useCircleCarousel();
  const [carousel1, setCarousel1] = useCircleCarousel();
  const technicalCarousel = useRef<any>();
  const technicalCarouselPagination = useRef<any>();
  const technicalCarouselText = useRef<any>();
  const isInited = useRef<boolean>(false);
  const isInited1 = useRef<boolean>(false);

  const jsTechnicalCarousel = useRef<any>();
  const jsTechnicalCarouselPagination = useRef<any>();
  const jsTechnicalCarouselText = useRef<any>();

  useIsomorphicLayoutEffect(() => {
    if (!isInited.current){
      setCarousel({
        node: technicalCarousel.current,
        pagination: technicalCarouselPagination.current,
        slides: technicalCarouselText.current,
        speed: technicalCarousel.current.getAttribute('data-speed'),
        autoplay: technicalCarousel.current.getAttribute('data-autoplay')
      });
      isInited.current = true;
    }
    if (!isInited1.current) {
      setCarousel1({
        node: jsTechnicalCarousel.current,
        pagination: jsTechnicalCarouselPagination.current,
        slides: jsTechnicalCarouselText.current,
        speed: jsTechnicalCarousel.current.getAttribute('data-speed'),
        autoplay: jsTechnicalCarousel.current.getAttribute('data-autoplay')
      });
      isInited1.current = true;
    }
  }, [])

  return (
    <>
      <h2>Umiejętności czysto jsowe</h2>
      <StyledCircleCarousel ref={ technicalCarousel } className='circle-carousel' data-speed='800' data-autoplay='4500'>
        <StyledSlidesText ref={ technicalCarouselText } className='slides'>
          { jsSkills.map((skill) => {
            return (
              <div className="slide" key={`text-${skill.text.heading}`}>
                <h5>{ skill.text.heading }</h5>
                <p>{ skill.text.text }</p>
              </div>
            )
        })}
        </StyledSlidesText>
        <StyledPagination ref={ technicalCarouselPagination } className='pagination'>
          { jsSkills.map((skill) => {
            return (
              <div className="item" key={`icon-${skill.text.heading}`}>
                <div className="dot">
                    <skill.icon />
                </div>
              </div>
            )
          })}
        </StyledPagination>
      </StyledCircleCarousel>

      <h2>Narzędzia, Cmsy, Headless cmsy oraz wiedzą ogólna</h2>
      <StyledCircleCarousel ref={ jsTechnicalCarousel } className='circle-carousel' data-speed='800' data-autoplay='4500'>
        <StyledSlidesText ref={ jsTechnicalCarouselText } className='slides'>
          { skills.map((skill) => {
            return (
              <div className="slide" key={`text-${skill.text.heading}`}>
                <h5>{ skill.text.heading }</h5>
                <p>{ skill.text.text }</p>
              </div>
            )
        })}
        </StyledSlidesText>
        <StyledPagination ref={ jsTechnicalCarouselPagination } className='pagination'>
          { skills.map((skill) => {
            return (
              <div className="item" key={`icon-${skill.text.heading}`}>
                <div className="dot">
                    <skill.icon className={skill.className} />
                </div>
              </div>
            )
          })}
        </StyledPagination>
      </StyledCircleCarousel>
    </>
  );
}

export default Skills;
