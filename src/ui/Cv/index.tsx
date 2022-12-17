import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import Pdf from '../../../public/svg/pdf.svg';
import { useScrollTrigger } from 'src/hooks/useScrollTrigger';
import {
  StyledCvSection,
  StyledCvCardWrapper,
  StyedCvCard,
  StyledCvCardHead,
  StyledDownloadCvIcon,
  StyledDownloadCvLink,
  StyedCvCardContent,
  StyledCardListItem,
} from './style';

const CvComponent: React.FC = () => {
  const [ul] = useScrollTrigger(0.5, 'children') as [React.RefObject<HTMLUListElement>];
  const [box] = useScrollTrigger(0.5, 'children') as [React.RefObject<HTMLDivElement>];

  return (
    <StyledCvSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Moje CV
      </HeadingComponent>
      <Paragraph>
        Doświadczenie zawodowe, moje aktualne umiejętności, opis komercyjnych projektów w których miałem okazję uczestniczyć oraz opis prywatnych projektów wraz z linkami do live demo i kodu źródłowego, to wszystko zawarte jest w moim cv.
      </Paragraph>
      <StyledCvCardWrapper position="left">
        <StyedCvCard position="left">
          <StyledCvCardHead className="imgbx" ref={box}>
            <StyledDownloadCvIcon className="icon" href="/cv.pdf"><Pdf className="pdf"/></StyledDownloadCvIcon>
            <StyledDownloadCvLink href="/cv.pdf" download>Download CV</StyledDownloadCvLink>
          </StyledCvCardHead>
          <StyedCvCardContent position="left" ref={ul}>
              <StyledCardListItem>Spodobały Ci się moje projekty</StyledCardListItem>
              <StyledCardListItem>Mój stack technologiczny pasuje do twojej firmy/ogłoszenia</StyledCardListItem>
              <StyledCardListItem>Oraz moje doświadczenie jest tym czego szukasz?</StyledCardListItem>
              <StyledCardListItem>kliknij w link powyżej żeby pobrać moje Cv 😊.</StyledCardListItem>
          </StyedCvCardContent>
        </StyedCvCard>
      </StyledCvCardWrapper>
    </StyledCvSection>
  )
}

export default CvComponent
