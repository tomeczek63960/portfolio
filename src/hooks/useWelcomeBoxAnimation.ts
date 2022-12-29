import { gsap } from "gsap";
import { useRef, useState, MouseEvent, RefObject } from "react";
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
interface IMessage {
  id: number;
  type: string;
  image: string;
  message: string;
  toggler?: string;
}
interface ReturnTypes {
  activeMessages: IMessage[];
  writeAnimationWelcomeBox: RefObject<HTMLDivElement>;
  writeAnimationWelcomeBoxImage: RefObject<HTMLDivElement>;
  writeAnimationElement: RefObject<HTMLDivElement>;
  welcomeBoxConversation: RefObject<HTMLDivElement>;
  welcomeBoxOptions: RefObject<HTMLDivElement>;
  writeMessage: Function;
}

export const useWelcomeBoxAnimation = (
  newMessages: IMessage[]
): ReturnTypes => {
  const [activeMessages, setActiveMessages] = useState<IMessage[]>([
    {
      id: 1,
      type: "admin",
      image: "/tk.jpeg",
      message: "Cześć <br/> Miło jest Ciebie tu widzieć",
    },
    {
      id: 1,
      type: "admin",
      image: "",
      message: "Co chciałbyś się o mnie dowiedzieć?",
    },
  ]);

  const [messagesQueue, setMessagesQueue] = useState<any>([]);
  const writeAnimationWelcomeBox = useRef<HTMLDivElement>(null);
  const writeAnimationWelcomeBoxImage = useRef<HTMLDivElement>(null);
  const writeAnimationElement = useRef<HTMLDivElement>(null);
  const welcomeBoxConversation = useRef<HTMLDivElement>(null);
  const welcomeBoxOptions = useRef<HTMLDivElement>(null);

  const timeline = useRef<GSAPTimeline>();
  useIsomorphicLayoutEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 1,
      })
    );
    timeline.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 1,
      })
    );
    timeline.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 0,
        delay: 2.5,
      })
    );
    timeline.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 0,
      })
    );
  }, []);

  const writeMessage = (
    event: MouseEvent<HTMLElement>,
    message: IMessage
  ): void => {
    if (isFalsy(welcomeBoxConversation.current)) return;
    const togglerMessages = newMessages.filter(
      (msg: IMessage) => msg.toggler === message.toggler
    );
    const selector = `[data-scroll-to="${
      isTruthy(message?.toggler) ? message.toggler : ""
    }"]`;
    const isInConversation = welcomeBoxConversation.current.querySelector(
      selector
    ) as HTMLDivElement;
    if (isFalsy(isInConversation)) {
      setMessagesQueue((prev: any) => [...prev, ...togglerMessages]);
    } else {
      welcomeBoxConversation.current.scrollTo(
        0,
        isInConversation.offsetTop - welcomeBoxConversation.current.offsetTop
      );
    }
  };
  useIsomorphicLayoutEffect(() => {
    // TODO: add transition fro appear new message
    gsap.set(welcomeBoxOptions.current, {
      pointerEvents: isTruthy(messagesQueue.length) ? "none" : "all",
    });
    if (isTruthy(messagesQueue.length)) {
      const isAdmin = messagesQueue[0].type === "admin";
      gsap.set(writeAnimationWelcomeBox.current, {
        justifyContent: isAdmin ? "flex-start" : "flex-end",
      });
      gsap.set(writeAnimationElement.current, {
        borderTopLeftRadius: isAdmin ? 0 : "4px",
        borderTopRightRadius: isAdmin ? "4px" : 0,
      });
      gsap.set(writeAnimationWelcomeBoxImage.current, {
        order: isAdmin ? -1 : 1,
      });

      timeline.current
        ?.play()
        .then(() => {
          timeline.current?.seek(0).pause();
          const firstEll = messagesQueue.shift();
          setActiveMessages((prev: any) => [...prev, firstEll]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [messagesQueue, activeMessages]);
  useIsomorphicLayoutEffect(() => {
    if (welcomeBoxConversation.current == null) return;
    welcomeBoxConversation.current.scrollTo(
      0,
      welcomeBoxConversation.current.scrollHeight
    );
  }, [activeMessages]);

  return {
    activeMessages,
    writeAnimationWelcomeBox,
    writeAnimationWelcomeBoxImage,
    writeAnimationElement,
    welcomeBoxConversation,
    welcomeBoxOptions,
    writeMessage,
  };
};
