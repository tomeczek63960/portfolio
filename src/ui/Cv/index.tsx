import type { NextPage } from 'next'
import HeadingComponent from 'src/ui/Heading';
import styled from 'styled-components';
import { variables, colors } from 'src/styled/mixins';
import Paragraph from 'src/ui/Paragraph';
import Pdf from '../../../public/svg/pdf.svg';
import Download from '../../../public/svg/download.svg';

const StyledCvSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
const StyledCvCardWrapper = styled.section.attrs((props: {position: string}) => props)`
  padding-block: ${variables.sectionVerticalPadding};
	padding-left: 15px;
  transform: ${({ position }) => position === 'left' ? 'skewY(-5deg)' : 'skewY(5deg)'};
`;
const StyedCvCard = styled.div.attrs((props: {position: string}) => props)`
  margin: 40px 0;
  position: relative;
  max-width: 300px;
  min-height: 400px;
  background: #fff;
  transition: 0.5s;
  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    background: #6A82FB;
    filter: brightness(90%); // make color darker
    transform-origin: bottom;
    transform: ${({ position }) => position === 'left' ? 'skewX(45deg)' : 'skewX(-45deg)'};
    transition: 0.5s;
  }
  &:after {
    content: '';
    position: absolute;
    top: ${({ position }) => position === 'left' ? '-15px' : '0'};
    left: ${({ position }) => position === 'left' ? '-15px' : 'unset'};
    right: ${({ position }) => position === 'left' ? 'unset' : '-15px'};
    width: 15px;
    height: 100%;
    background: #6A82FB;
    filter: brightness(80%); // make color darker
    /* border-bottom: 200px solid #fff; */
    transform-origin: left;
     transform: ${({ position }) => position === 'left' ? 'skewY(45deg)' : 'skewY(-45deg)'};
    transition: 0.5s;
  }
  .imgbx {
    position: relative;
    max-width: 300px;
    height: 200px;
    background: #6A82FB;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .imgbx img {
    max-width: 100px;
  }
  .imgbx svg {
    max-width: 100px;
    max-height: 100px;
  }
  a svg {
    width: 15px;
    height: 15px;
  }
  .imgbx h3 {
    position: relative;
    color: white;
    margin-top: 20px;
  }
  .content {
    position: relative;
    width: 100%;
    min-height: 200px;
    padding: 25px 25px;
    background: #fff;
    text-align: center;
    li {
      color: #999;
			position: relative;
			& + li {
				margin-top: 10px;
			}
			strong {
				color: ${colors.blue}
			}
    }
		&::before {
			content: '';
			position: absolute;
			top: -15px;
			left: -15px;
			width: 15px;
			height: 100%;
			background: #fff;;
			filter: brightness(80%); // make color darker
			transform-origin: left;
			transform: ${({ position }) => position === 'left' ? 'skewY(45deg)' : 'skewY(-45deg)'};
			z-index: 10;
		}
  }
  .content:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 400px;
    background: linear-gradient(transparent,transparent,rgba(160,160,160,.2));
    transform-origin: bottom;
    transform: ${({ position }) => position === 'left' ? 'skewX(45deg)' : 'skewX(-45deg)'};
    transition: 0.5s;
    pointer-events: none;
    z-index: -1;
    filter: blur(2px);
    opacity: 0.8;
  }
  &:hover .content:after{
    filter: blur(5px);
  }
`;

const CvComponent: React.FC = () => {
  return (
    <>
      <StyledCvSection>
        <HeadingComponent tagName='h2' color="#6A82FB">
          Moje CV
        </HeadingComponent>
				<Paragraph>
					Doświadczenie zawodowe, moje aktualne umiejętności, opis komercyjnych projektów w których miałem okazję uczestniczyć oraz opis prywatnych projektów wraz z linkami do live demo i kodu źródłowego, to wszystko zawarte jest w moim cv.
				</Paragraph>
        <StyledCvCardWrapper position="left">
            <StyedCvCard position="left">
                <div className="imgbx">
                    <Pdf className="pdf"/>
                    <h3><a href="/cv.pdf" download>Download Pdf <Download /></a></h3>
                </div>
                <div className="content">
									<ul>
										<li>Spodobały Ci się moje projekty</li>
										<li>Mój stack technologiczny pasuje do twojej firmy/ogłoszenia</li>
										<li>Oraz moje doświadczenie jest tym czego szukasz?</li>
										<li><strong>kliknij w link powyżej żeby pobrać moje Cv 😊.</strong></li>
									</ul>
                </div>
            </StyedCvCard>
        </StyledCvCardWrapper>
      </StyledCvSection>
    </>
  )
}

export default CvComponent
