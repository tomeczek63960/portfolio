import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import {
  StyledWelcomeBoxSection,
  StyledWelcomeBox,
  StyledWelcomeBoxHead,
  StyledWelcomeBoxHeadHeading,
  StyledWelcomeBoxHeadParagraph,
  StyledWelcomeBoxHeadInfo,
  StyledWelcomeBoxImage,
  StyledWelcomeBoxConversation,
  StyledWelcomeBoxMessage,
  StyledWelcomeBoxMessageImage,
  StyledWelcomeBoxMessageText,
  StyledWelcomeBoxOptions,
  StyledWelcomeBoxOptionsList,
} from './style';
import {useTimeline} from 'src/hooks/useTimeline';
 
const WelcomeBoxComponent: React.FC = () => {
  const [activeMessages, setActiveMessages] = useState<any>([
    {
      id: 1,
      type: 'admin',
      image: '/tk.jpeg',
      message: 'Cześć <br/> Miło jest Ciebie tu widzieć',
    },
    {
      id: 1,
      type: 'admin',
      image: '',
      message: 'Co chciałbyś się o mnie dowiedzieć?',
    },
  ]);
  const [messages, setMessages] = useState<any>([
    {
      id: 222,
      toggler: 'Doświadczenie'
    },
    {
      id: 333,
      toggler: 'Kontakt'
    },
    {
      id: 444,
      toggler: 'Czy jestem otwarty na oferty'
    },
  ]);
  const [newMessages, setNewMessages] = useState<any>([
    {
      id: 2,
      toggler: 'Doświadczenie',
      type: 'user',
      image: '/user.png',
      message: 'Cześć <br/> Mógłbyś powiedzieć coś o swoim doświadczeniu jako programista?'
    },
    {
      id: 3,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '/tk.jpeg',
      message: 'Jasne'
    },
    {
      id: 4,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '',
      message: 'Naukę programowania rozpocząłem w okresie kwietnia/maja 2019 roku.<br/> Od tamtej pory nieustannie powiększam swoją wiedzę na temat programowania.'
    },
    {
      id: 5,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '',
      message: 'W ciągu tego czasu udało mi się zdobyć 2 lata komercyjnego doświadczenia<br/>  Na stronie case study możesz znaleźć projekty które stworzyłem przed zdobyciem komercyjnego doświadczenia (oznaczone jako legacy code) oraz te które wykonałem specjalnie do tego portfolio (oznaczone jako new code)'
    },
    {
      id: 6,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '',
      message: 'Dostęp do repozytorium tych projektów umożliwia łatwe porównanie oraz wyciągnięcie wniosków na temat mojego progresu'
    },
    {
      id: 7,
      toggler: 'Kontakt',
      type: 'user',
      image: '/user.png',
      message: 'Jak się można z Tobą skontaktować?'
    },
    {
      id: 8,
      toggler: 'Kontakt',
      type: 'admin',
      image: '/tk.jpeg',
      message: 'To bardzo proste',
    },
    {
      id: 9,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'Jezeli jesteś rekruterem i szukasz talentów',
    },
    {
      id: 10,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'Jezeli spodobały Ci się moje projekty',
    },
    {
      id: 11,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'lub chcesz się tylko przywitać',
    },
    {
      id: 12,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'zapraszam na mój profil na Linkedin z chęcią odpowiem na wszystkie pytania :)',
    },
    {
      id: 13,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'jezeli z jakichś powodów nie mozesz skontaktować się ze mną za pomocą linkedin mozesz zostawić wiadomość używając formularza kontaktowego',
    },
    {
      id: 14,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'user',
      image: '/user.png',
      message: 'Czy jesteś otwarty na oferty pracy?',
    },
    {
      id: 15,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'admin',
      image: '/tk.jpeg',
      message: 'Tak',
    },
    {
      id: 16,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'admin',
      image: '',
      message: 'Jestem otwarty na oferty pracy w której będę mógł rozwijać swoje umiejętności oraz zdobywać ⛰',
    },
    {
      id: 17,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'admin',
      image: '',
      message: 'Najbardziej zainteresowany jestem technologiami React/Gatsby/Next jednak rozważę też propozycje w vue/Nuxt',
    },
  ]);
  const [messagesQueue, setMessagesQueue] = useState<any>([]);
  const writeAnimationWelcomeBox = useRef<HTMLDivElement>(null);
  const writeAnimationWelcomeBoxImage = useRef<HTMLDivElement>(null);
  const writeAnimationElement = useRef<HTMLDivElement>(null);
  const welcomeBoxConversation = useRef<HTMLDivElement>(null);
  const welcomeBoxOptions = useRef<HTMLDivElement>(null);
  const headInfo = {
    image: '/tk.jpeg',
    name: 'Tomasz Kardel',
    position: 'Front-end Developer'
  }

  const tlCallback = (timeline: GSAPTimeline) => {
    timeline.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 1,
      })
    );
    timeline.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 1
      })
    );
    timeline.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 0,
        delay: 2.5
      })
    );
    timeline.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 0,
      })
    );
  }
  const [tl] = useTimeline(tlCallback);

  const writeMessage = (event: React.MouseEvent<HTMLElement>, message: any) => {
    if (!welcomeBoxConversation.current) return;
    const togglerMessages = newMessages.filter((msg: any) => msg.toggler === message.toggler);
    const isInConversation = welcomeBoxConversation.current.querySelector(`[data-scroll-to="${message.toggler}"]`) as HTMLDivElement;
    if (!isInConversation) {
      setMessagesQueue((prev: any) => ([
        ...prev,
        ...togglerMessages
      ]));
    } else {
      welcomeBoxConversation.current.scrollTo(0, isInConversation.offsetTop - welcomeBoxConversation.current.offsetTop);
    }
  }
  useEffect(() => {
    // cały blok ze stylami do przerobienia na gsap lub klasy
    if (!welcomeBoxOptions.current 
      || !writeAnimationWelcomeBox.current
      || !writeAnimationWelcomeBoxImage.current
      || !writeAnimationElement.current
    ) return;
    welcomeBoxOptions.current.style.pointerEvents = 'all';
    if (messagesQueue.length) {
      welcomeBoxOptions.current.style.pointerEvents = 'none';
      if (messagesQueue[0].type === 'admin') {
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-start';
        writeAnimationElement.current.style.borderTopLeftRadius = '0';
        writeAnimationElement.current.style.borderTopRightRadius = '4px';
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-start';
        writeAnimationWelcomeBoxImage.current.style.order = '-1';
        writeAnimationWelcomeBox.current.style.padding = '0 60px 0 0';
      } else {
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-end';
        writeAnimationElement.current.style.borderTopLeftRadius = '4px';
        writeAnimationElement.current.style.borderTopRightRadius = '0';
        writeAnimationWelcomeBoxImage.current.style.order = '1';
        writeAnimationWelcomeBox.current.style.padding = '0 0 0 60px';
      }
      tl?.play().then(() => {
        tl.seek(0).pause();
        const firstEll = messagesQueue.shift();
        setActiveMessages((prev: any) => ([
          ...prev,
          firstEll
        ]));

      });
    }
  }, [messagesQueue, activeMessages]);
  useEffect(() => {
    if (!welcomeBoxConversation.current) return;
    welcomeBoxConversation.current.scrollTo(0, welcomeBoxConversation.current.scrollHeight);
  }, [activeMessages])

  return (
    <StyledWelcomeBoxSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        About Me
      </HeadingComponent>
      <Paragraph>Co chcesz się o mnie dowiedzieć?</Paragraph>
      <StyledWelcomeBox>
        <StyledWelcomeBoxHead>
          <StyledWelcomeBoxImage>
            <Image src={headInfo.image} width="100%" height="100%" />
          </StyledWelcomeBoxImage>
          <StyledWelcomeBoxHeadInfo>
            <StyledWelcomeBoxHeadHeading>{headInfo.name}</StyledWelcomeBoxHeadHeading>
            <StyledWelcomeBoxHeadParagraph>{headInfo.position}</StyledWelcomeBoxHeadParagraph>
          </StyledWelcomeBoxHeadInfo>
        </StyledWelcomeBoxHead>

        <StyledWelcomeBoxConversation ref={welcomeBoxConversation}>
          {
            activeMessages.map((message: any) => 
              <StyledWelcomeBoxMessage key={Math.random() * 100000} position={message.type === 'user' ? 'right' : 'left'} data-scroll-to={message.toggler}>
                <div>
                  <StyledWelcomeBoxMessageText
                      position={message.type === 'user' ? 'right' : 'left'}
                      dangerouslySetInnerHTML={{ __html: message.message }}
                    ></StyledWelcomeBoxMessageText>
                </div>
                <StyledWelcomeBoxMessageImage type={message.type}>
                  {message.image && <Image src={message.image} width="100%" height="100%" />}
                </StyledWelcomeBoxMessageImage>
              </StyledWelcomeBoxMessage>
            )
          }

          <StyledWelcomeBoxMessage ref={writeAnimationWelcomeBox}>
            <StyledWelcomeBoxMessageImage ref={writeAnimationWelcomeBoxImage}></StyledWelcomeBoxMessageImage>
            <div>
              <StyledWelcomeBoxMessageText ref={writeAnimationElement} writingAnimation={true} visible={true}>
                <span></span>
                <span></span>
                <span></span>
              </StyledWelcomeBoxMessageText>
            </div>
          </StyledWelcomeBoxMessage> 

        </StyledWelcomeBoxConversation>
          { messages.length && <StyledWelcomeBoxOptions>
            <h4>Wybierz co Ciebie interesuje</h4>
            <StyledWelcomeBoxOptionsList ref={welcomeBoxOptions}>
              { 
                messages.map((message: any) => <button key={message.toggler} onClick={(e) => writeMessage(e, message)}>{ message.toggler }</button>)
              }
            </StyledWelcomeBoxOptionsList>
          </StyledWelcomeBoxOptions>
          }
      </StyledWelcomeBox>
    </StyledWelcomeBoxSection>
  )
}

export default WelcomeBoxComponent;
