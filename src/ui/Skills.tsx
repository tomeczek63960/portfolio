import styled from 'styled-components'
import { useEffect, useRef, useState } from "react";
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
import { useCircleCarousel } from 'src/hooks/useCircleCarousel';

const StyledCircleCarousel = styled.div`
  position: relative;
	padding-top: 100%;
  svg {
    width: 50px;
  }
`
const StyledSlidesText = styled.div`
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    background: rgba(red,.3);
    &.active {
      z-index: 1;
      opacity: 1;
    }
  }
  h5 {
    font-size: 20px;
    line-height: 1;
    font-weight: 700;
    color: orange;
  }
  p {
    color: #cacaca;
  }
`
const StyledPagination = styled.div`
/* to jest pagination */
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
  /* // transition-timing-function: cubic-bezier(.5,-.5,.5,1.5); */
  pointer-events: none;
  user-select: none;
  /* svg ma być wyszarzone */
  svg {
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
      transform: translate(-50%, -50%) scale(1.05);
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
      filter: grayscale(0%);
    }
  }
`
const StyledCircleCarouselIcon = styled.div`
`

function Skills() {
  const [skills, setSkills] = useState([
    {
      icon: Angular,
      text: {
        heading: 'angular',
        text: 'Podstawowa znajomość angulara'
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
      icon: Gatsby,
      text: {
        heading: 'Gatsby',
        text: '...'
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
      icon: Html,
      text: {
        heading: 'Html',
        text: 'Semantyczny html to podstawa'
      }
    },
    {
      icon: Javascript,
      text: {
        heading: 'Javascript',
        text: 'Javascript to nie tylko frameworki ale też wiedza ogólna'
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
      icon: Nuxt,
      text: {
        heading: 'Nuxt.js',
        text: 'Nuxt.js to duże możliwości, zarówno dla statycznych stron jak stron z dynamicznymi danymi'
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
      icon: Redux,
      text: {
        heading: 'Redux',
        text: 'Zarządzanie danymi staje się proste i przyjemne gdy możemy je trzymać w jednym, uporządkowanym miejscu'
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
    {
      icon: Typescript,
      text: {
        heading: 'Typescript',
        text: 'Gdy boisz się błędów to Typescript pozwoli Ci ich uniknąć przed ich popełnieniem :O'
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
      icon: StyledComponents,
      text: {
        heading: 'Styled Components',
        text: 'Gdy traktujesz komponenty jako niezależne elementy to Styled Components z pewnością Ci to ułatwi'
      }
    },
  ]);
  const [carousel, initCarousel] = useCircleCarousel();
  const circleCarousel = useRef<any>();
  const carouselPagination = useRef<any>();
  const carouselText = useRef<any>();
  const isInited = useRef<boolean>(false);

  useEffect(() => {
    if (!isInited.current){
      initCarousel({
        node: circleCarousel.current,
        pagination: carouselPagination.current,
        slides: carouselText.current,
        speed: circleCarousel.current.getAttribute( 'data-speed' ),
        autoplay: circleCarousel.current.getAttribute( 'data-autoplay' )
      });
      isInited.current = true;
    }
  }, [])

  return (
    <>
      {/* Karuzela ze skilsami gdzie na samej górze jest jedna ikonka powiększona z opisem (idą w kolejności w jedną stronę
        + opis  (ikonka szara i schowany text) po najechaniu na ikonkę robi się kolorowa a gdy klikniemy lub zmieni się na aktywny
        to pokazuje się tekst z krótkim opisem umiejętności
      ) */}
      <StyledCircleCarousel ref={ circleCarousel } className='circle-carousel' data-speed='800' data-autoplay='6500'>
        <StyledSlidesText ref={ carouselText } className='slides'>
          { skills.map((skill) => {
            return (
              <div className="slide" key={`text-${skill.text.heading}`}>
                <h5>{ skill.text.heading }</h5>
                <p>{ skill.text.text }</p>
              </div>
            )
        })}
        </StyledSlidesText>
        <StyledPagination ref={ carouselPagination } className='pagination'>
          { skills.map((skill) => {
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
    </>
  );
}

export default Skills;
