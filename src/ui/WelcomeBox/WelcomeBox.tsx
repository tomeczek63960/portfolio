import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import HeadingComponent from 'src/ui/Heading/Heading';
import Paragraph from 'src/ui/Paragraph/Paragraph';
import {
  WelcomeBoxSection,
  WelcomeBox,
  WelcomeBoxHead,
  WelcomeBoxHeadHeading,
  WelcomeBoxHeadParagraph,
  WelcomeBoxHeadInfo,
  WelcomeBoxImage,
  WelcomeBoxConversation,
  WelcomeBoxMessage,
  WelcomeBoxMessageImage,
  WelcomeBoxMessageText,
  WelcomeBoxOptions,
  WelcomeBoxOptionsList,
} from './style';
 
const WelcomeBoxComponent = () => {
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
  const writeAnimationWelcomeBox = useRef<any>();
  const writeAnimationWelcomeBoxImage = useRef<any>();
  const writeAnimationElement = useRef<any>();
  const writingAnimationTl = useRef<any>();
  const welcomeBoxConversation = useRef<any>();
  const welcomeBoxOptions = useRef<any>();
  let isFirst = true;
  const headInfo = {
    image: '/tk.jpeg',
    name: 'Tomasz Kardel',
    position: 'Front-end Developer'
  }
  const writeMessage = (event: React.MouseEvent<HTMLElement>, message: any) => {
    const togglerMessages = newMessages.filter((msg: any) => msg.toggler === message.toggler);
    // const target = event.target as HTMLInputElement;
    // target.setAttribute('disabled', 'true');
    const isInConversation = welcomeBoxConversation.current.querySelector(`[data-scroll-to="${message.toggler}"]`)
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
    welcomeBoxOptions.current.style.pointerEvents = 'all';
    if (messagesQueue.length) {
      welcomeBoxOptions.current.style.pointerEvents = 'none';
      if (messagesQueue[0].type === 'admin') {
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-start';
        writeAnimationElement.current.style.borderTopLeftRadius = '0';
        writeAnimationElement.current.style.borderTopRightRadius = '4px';
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-start';
        writeAnimationWelcomeBoxImage.current.style.order = -1;
        writeAnimationWelcomeBox.current.style.padding = '0 60px 0 0';
      } else {
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-end';
        writeAnimationElement.current.style.borderTopLeftRadius = '4px';
        writeAnimationElement.current.style.borderTopRightRadius = '0';
        writeAnimationWelcomeBoxImage.current.style.order = 1;
        writeAnimationWelcomeBox.current.style.padding = '0 0 0 60px';
      }
      writingAnimationTl.current?.play().then(() => {
        writingAnimationTl.current.seek(0).pause();
        const firstEll = messagesQueue.shift();
        setActiveMessages((prev: any) => ([
          ...prev,
          firstEll
        ]));

      });
    }
  }, [messagesQueue, activeMessages]);
  useEffect(() => {
    welcomeBoxConversation.current.scrollTo(0, welcomeBoxConversation.current.scrollHeight);
  }, [activeMessages])

  useEffect(() => {
    if (!isFirst) return;
    isFirst = false;
    writingAnimationTl.current = gsap.timeline({ paused: true });
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 1,
      })
    );
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 1
      })
    );
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 0,
        delay: 2.5
      })
    );
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 0,
      })
    );
  }, []);
  return (
    <WelcomeBoxSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        About Me
      </HeadingComponent>
      <Paragraph>Co chcesz się o mnie dowiedzieć?</Paragraph>
      <WelcomeBox>
        <WelcomeBoxHead>
          <WelcomeBoxImage>
            <Image src={headInfo.image} width="100%" height="100%" />
          </WelcomeBoxImage>
          <WelcomeBoxHeadInfo>
            <WelcomeBoxHeadHeading>{headInfo.name}</WelcomeBoxHeadHeading>
            <WelcomeBoxHeadParagraph>{headInfo.position}</WelcomeBoxHeadParagraph>
          </WelcomeBoxHeadInfo>
        </WelcomeBoxHead>

        <WelcomeBoxConversation ref={welcomeBoxConversation}>
          {
            activeMessages.map((message: any) => 
              <WelcomeBoxMessage position={message.type === 'user' ? 'right' : 'left'} data-scroll-to={message.toggler}>
                <div>
                  <WelcomeBoxMessageText
                      position={message.type === 'user' ? 'right' : 'left'}
                      dangerouslySetInnerHTML={{ __html: message.message }}
                    ></WelcomeBoxMessageText>
                </div>
                <WelcomeBoxMessageImage type={message.type}>
                  {message.image && <Image src={message.image} width="100%" height="100%" />}
                </WelcomeBoxMessageImage>
              </WelcomeBoxMessage>
            )
          }

          <WelcomeBoxMessage ref={writeAnimationWelcomeBox}>
            <WelcomeBoxMessageImage ref={writeAnimationWelcomeBoxImage}></WelcomeBoxMessageImage>
            <div>
              <WelcomeBoxMessageText ref={writeAnimationElement} writingAnimation={true} visible={true}>
                <span></span>
                <span></span>
                <span></span>
              </WelcomeBoxMessageText>
            </div>
          </WelcomeBoxMessage> 

        </WelcomeBoxConversation>
          { messages.length && <WelcomeBoxOptions>
            <h4>Wybierz co Ciebie interesuje</h4>
            <WelcomeBoxOptionsList ref={welcomeBoxOptions}>
              { 
                messages.map((message: any) => <button key={message.toggler} onClick={(e) => writeMessage(e, message)}>{ message.toggler }</button>)
              }
            </WelcomeBoxOptionsList>
          </WelcomeBoxOptions>
          }
      </WelcomeBox>
    </WelcomeBoxSection>
  )
}

export default WelcomeBoxComponent;
