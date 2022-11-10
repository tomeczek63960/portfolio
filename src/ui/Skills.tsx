import styled from 'styled-components'

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

const StyledIconsCarousel = styled.div`
  svg {
    width: 70px;
  }
`
const StyledIconsCarouselItem = styled.div`
`

const StyledIconsCarouselItemText = styled.div`
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
function Skills() {
  return (
    <>
      {/* Karuzela ze skilsami gdzie na samej górze jest jedna ikonka powiększona z opisem (idą w kolejności w jedną stronę
        + opis  (ikonka szara i schowany text) po najechaniu na ikonkę robi się kolorowa a gdy klikniemy lub zmieni się na aktywny
        to pokazuje się tekst z krótkim opisem umiejętności
      ) */}
      <StyledIconsCarousel>
        <StyledIconsCarouselItem>
          <Angular />
          <StyledIconsCarouselItemText>
            <h5>Angular</h5>
            <p>Podstawowa znajomość angulara</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Adobexd />
          <StyledIconsCarouselItemText>
            <h5>Adobe XD</h5>
            <p>Płynna umiejętność korzystania</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Figma />
          <StyledIconsCarouselItemText>
            <h5>Figma</h5>
            <p>Figma oraz Adobxd to 2 podstawowe narzędzia z których otrzymuję projekty graficzne</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Contentful />
          <StyledIconsCarouselItemText>
            <h5>Contentful</h5>
            <p>Płynność w obsłudze Contentfula nie jest mi obca :)</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Css />
          <StyledIconsCarouselItemText>
            <h5>Css</h5>
            <p>Css</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Gatsby />
          <StyledIconsCarouselItemText>
            <h5>Gatsby</h5>
            <p>...</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Gsap />
          <StyledIconsCarouselItemText>
            <h5>Gsap</h5>
            <p>Zaawansowane animacje oraz nieograniczona wyobraźnia to klucz do sukcesu</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Html />
          <StyledIconsCarouselItemText>
            <h5>Html</h5>
            <p>Semantyczny html to podstawa</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Javascript />
          <StyledIconsCarouselItemText>
            <h5>Javascript</h5>
            <p>Javascript to nie tylko frameworki ale też wiedza ogólna</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <NextJs className="fill-dark" />
          <StyledIconsCarouselItemText>
            <h5>Next.js</h5>
            <p>Next.js to duże możliwości, zarówno dla statycznych stron jak stron z dynamicznymi danymi</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Nuxt />
          <StyledIconsCarouselItemText>
            <h5>Nuxt.js</h5>
            <p>Nuxt.js to duże możliwości, zarówno dla statycznych stron jak stron z dynamicznymi danymi</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <ReactJs />
          <StyledIconsCarouselItemText>
            <h5>React.js</h5>
            <p>React.js umożliwia łatwy i przyjemny sposób tworzenia zaawansowanych aplikacji</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Redux />
          <StyledIconsCarouselItemText>
            <h5>Redux</h5>
            <p>Zarządzanie danymi staje się proste i przyjemne gdy możemy je trzymać w jednym, uporządkowanym miejscu</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Sass />
          <StyledIconsCarouselItemText>
            <h5>Sass</h5>
            <p>Pożądek i jakość to jest coś co Sass z dodatkiem BEM pozwala osiągnąć</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Strapi />
          <StyledIconsCarouselItemText>
            <h5>Strapi</h5>
            <p>Gdy potrzebujesz miejsca do trzymania swoich danych do swoich aplikacji to Strapi przchodzi z pomocą</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Typescript />
          <StyledIconsCarouselItemText>
            <h5>Typescript</h5>
            <p>Gdy boisz się błędów to Typescript pozwoli Ci ich uniknąć przed ich popełnieniem :O</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <Vue />
          <StyledIconsCarouselItemText>
            <h5>Vue</h5>
            <p>Gdy masz jakiś problem lub pytania to zgrane community zawsze Ci pomoże</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
        <StyledIconsCarouselItem>
          <StyledComponents /> 
          <StyledIconsCarouselItemText>
            <h5>Styled Components</h5>
            <p>Gdy traktujesz komponenty jako niezależne elementy to Styled Components z pewnością Ci to ułatwi</p>
          </StyledIconsCarouselItemText>
        </StyledIconsCarouselItem>
      </StyledIconsCarousel>
    </>
  );
}

export default Skills;
