import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import {StyledIntroductionSection} from 'src/ui/Introduction/style';
import ChartComponent from 'src/ui/Introduction/Svg/Chart';

const IntroductionComponent: React.FC = () => {
  return (
    <>
      {/* spróbować dodać animacje na np. wykres który będzie się rysował, kwiatek który będzie rosnął itp. */}
      <StyledIntroductionSection>
        <HeadingComponent tagName='h1' hoverColor="#6A82FB">
          Hi 👋<br/> 
          I’m Tomek 😊<br/> 
          Nice to see You
        </HeadingComponent>
        {/* <OfficeEmployee ref={svg} /> */}
        <ChartComponent />
        <Paragraph>
          Jezeli jesteś gotowy wypłynąć na nieznane wody 🐟, zapraszam na okręt 🚣🏻, Dziś będę twoim przewodnikiem
        </Paragraph>
        <Paragraph>
          Zapraszam do zapoznania się z moją pracą w która została stworzona z pasją 💜
        </Paragraph>
      </StyledIntroductionSection>
    </>
  )
}

export default IntroductionComponent
