import {useRef} from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import {useCircleCarousel} from 'src/hooks/useCircleCarousel';
import {StyledCircleCarousel, StyledSlidesText, StyledPagination} from './style';

interface SkillsProps {
  items: any;
}

const Skills: React.FC<SkillsProps> = ({items}) => {
  const [carousel, setCarousel] = useCircleCarousel();
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselPaginationRef = useRef<HTMLDivElement>(null);
  const carouselTextRef = useRef<HTMLDivElement>(null);
  
  useIsomorphicLayoutEffect(() => {
    !carousel && setCarousel({
      node: carouselRef.current,
      pagination: carouselPaginationRef.current,
      slides: carouselTextRef.current,
      speed: 800,
      autoplay: 4500
    });
  }, []);

  return (
    <StyledCircleCarousel ref={carouselRef} className='circle-carousel'>
      <StyledSlidesText ref={carouselTextRef} className='slides'>
        {items.map((skill: any) => {
          return (
            <div className="slide" key={`text-${skill.text.heading}`}>
              <h5>{skill.text.heading }</h5>
              <p>{skill.text.text }</p>
            </div>
          )
      })}
      </StyledSlidesText>
      <StyledPagination ref={carouselPaginationRef} className='pagination'>
        {items.map((skill: any) => {
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
  );
}

export default Skills;
