import {useCircleCarousel} from 'src/hooks/useCircleCarousel';
import {
  StyledCarousel,
  StyledCarouselText,
  StyledPagination,
  StyledCarouselTextItem,
  StyledPaginationItem,
  StyledPaginationItemDot,
} from './style';

// TODO: dodać typ zgodny z tym co zwróci Strapi
interface SkillsProps {
  items: any;
}

const Skills: React.FC<SkillsProps> = ({items}) => {
  const [carouselRef, carouselPaginationRef, carouselTextRef, startAutoplay, stopAutoplay, setSlide] = useCircleCarousel();
  
  return (
    <StyledCarousel
      ref={carouselRef}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <StyledCarouselText ref={carouselTextRef}>
        {items.map((skill: any) => {
          return (
            <StyledCarouselTextItem key={`text-${skill.text.heading}`}>
              <h5>{skill.text.heading}</h5>
              <p>{skill.text.text}</p>
            </StyledCarouselTextItem>
          )
      })}
      </StyledCarouselText>
      <StyledPagination
        ref={carouselPaginationRef}
      >
        {items.map((skill: any) => {
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
          )
        })}
      </StyledPagination>
    </StyledCarousel>
  );
}

export default Skills;
