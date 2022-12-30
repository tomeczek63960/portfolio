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

import { IItem, PropsSkills } from "./types";
// TODO: dodać typ zgodny z tym co zwróci Strapi
const ComponentSkillsCarousel: FC<PropsSkills> = ({ items }) => {
  const [
    refCarousel,
    refCarouselPagination,
    refCarouselText,
    startAutoplay,
    stopAutoplay,
    setSlide,
  ] = useCircleCarousel();

  return (
    <StyledCarousel
      ref={refCarousel}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <StyledCarouselText ref={refCarouselText}>
        {items.map((skill: IItem) => {
          return (
            <StyledCarouselTextItem key={`text-${skill.text.heading}`}>
              <h5>{skill.text.heading}</h5>
              <p>{skill.text.text}</p>
            </StyledCarouselTextItem>
          );
        })}
      </StyledCarouselText>
      <StyledPagination ref={refCarouselPagination}>
        {items.map((skill: IItem) => {
          return (
            <StyledPaginationItem
              data-carousel-item="true"
              key={`icon-${skill.text.heading}`}
              onClick={setSlide}
            >
              <StyledPaginationItemDot>
                <skill.icon />
              </StyledPaginationItemDot>
            </StyledPaginationItem>
          );
        })}
      </StyledPagination>
    </StyledCarousel>
  );
};

export default ComponentSkillsCarousel;
