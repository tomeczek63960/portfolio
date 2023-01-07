import React, { FC } from "react";
import { useCircleCarousel } from "src/hooks/useCircleCarousel";
import {
  StyledCarousel,
  StyledCarouselText,
  StyledPagination,
  StyledCarouselTextItem,
  StyledPaginationItem,
  StyledPaginationItemDot,
} from "./style";

import { PropsSkillsCarousel } from "./types";
import { IStrapiSkill } from "../types";

import {
  Angular,
  Adobexd,
  Contentful,
  Css,
  Figma,
  Gatsby,
  Gsap,
  Html,
  Javascript,
  NextJs,
  Nuxt,
  ReactJs,
  Redux,
  Sass,
  Strapi,
  Typescript,
  Vue,
  StyledComponents,
  Php,
  Pimcore,
  Shopware,
  BuilderIo,
  Hygraph,
  PrismicIo,
} from "src/Svg";

const ComponentSkillsCarousel: FC<PropsSkillsCarousel> = ({ carousel }) => {
  const [
    refCarousel,
    refCarouselPagination,
    refCarouselText,
    startAutoplay,
    stopAutoplay,
    setSlide,
  ] = useCircleCarousel();
  const icons = {
    Angular,
    Adobexd,
    Contentful,
    Css,
    Figma,
    Gatsby,
    Gsap,
    Html,
    Javascript,
    NextJs,
    Nuxt,
    ReactJs,
    Redux,
    Sass,
    Strapi,
    Typescript,
    Vue,
    StyledComponents,
    Php,
    Pimcore,
    Shopware,
    BuilderIo,
    Hygraph,
    PrismicIo,
  };
  return (
    <StyledCarousel
      ref={refCarousel}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <StyledCarouselText ref={refCarouselText}>
        {carousel.Skill.map((skill: IStrapiSkill) => (
          <StyledCarouselTextItem key={`text-${skill.id}`}>
            <h5>{skill.Title}</h5>
            <p>{skill.Text}</p>
          </StyledCarouselTextItem>
        ))}
      </StyledCarouselText>
      <StyledPagination ref={refCarouselPagination}>
        {carousel.Skill.map((skill: IStrapiSkill) => {
          const Icon = icons[skill.Icon];
          return (
            <StyledPaginationItem
              data-carousel-item="true"
              key={`icon-${skill.id}`}
              onClick={setSlide}
            >
              <StyledPaginationItemDot>
                <Icon />
              </StyledPaginationItemDot>
            </StyledPaginationItem>
          );
        })}
      </StyledPagination>
    </StyledCarousel>
  );
};

export default ComponentSkillsCarousel;
