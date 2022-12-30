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
  refWriteAnimationWelcomeBox: RefObject<HTMLDivElement>;
  refWriteAnimationWelcomeBoxImage: RefObject<HTMLDivElement>;
  refWriteAnimationElement: RefObject<HTMLDivElement>;
  refWelcomeBoxConversation: RefObject<HTMLDivElement>;
  refWelcomeBoxOptions: RefObject<HTMLDivElement>;
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
  const refWriteAnimationWelcomeBox = useRef<HTMLDivElement>(null);
  const refWriteAnimationWelcomeBoxImage = useRef<HTMLDivElement>(null);
  const refWriteAnimationElement = useRef<HTMLDivElement>(null);
  const refWelcomeBoxConversation = useRef<HTMLDivElement>(null);
  const refWelcomeBoxOptions = useRef<HTMLDivElement>(null);
  const refTimeline = useRef<GSAPTimeline>();

  useIsomorphicLayoutEffect(() => {
    refTimeline.current = gsap.timeline({ paused: true });
    refTimeline.current.add(
      gsap.to(refWriteAnimationElement.current, {
        duration: 0,
        scale: 1,
      })
    );
    refTimeline.current.add(
      gsap.to(refWriteAnimationElement.current, {
        duration: 0.3,
        opacity: 1,
      })
    );
    refTimeline.current.add(
      gsap.to(refWriteAnimationElement.current, {
        duration: 0.3,
        opacity: 0,
        delay: 2.5,
      })
    );
    refTimeline.current.add(
      gsap.to(refWriteAnimationElement.current, {
        duration: 0,
        scale: 0,
      })
    );
    return () => {
      refTimeline.current?.clear().kill();
    };
  }, []);

  const writeMessage = (
    event: MouseEvent<HTMLElement>,
    message: IMessage
  ): void => {
    if (isFalsy(refWelcomeBoxConversation.current)) return;
    const togglerMessages = newMessages.filter(
      (msg: IMessage) => msg.toggler === message.toggler
    );
    const selector = `[data-scroll-to="${
      isTruthy(message?.toggler) ? message.toggler : ""
    }"]`;
    const isInConversation = refWelcomeBoxConversation.current.querySelector(
      selector
    ) as HTMLDivElement;
    if (isFalsy(isInConversation)) {
      setMessagesQueue((prev: any) => [...prev, ...togglerMessages]);
    } else {
      refWelcomeBoxConversation.current.scrollTo(
        0,
        isInConversation.offsetTop - refWelcomeBoxConversation.current.offsetTop
      );
    }
  };
  useIsomorphicLayoutEffect(() => {
    // TODO: add transition fro appear new message
    gsap.set(refWelcomeBoxOptions.current, {
      pointerEvents: isTruthy(messagesQueue.length) ? "none" : "all",
    });
    if (isTruthy(messagesQueue.length)) {
      const isAdmin = messagesQueue[0].type === "admin";
      gsap.set(refWriteAnimationWelcomeBox.current, {
        justifyContent: isAdmin ? "flex-start" : "flex-end",
      });
      gsap.set(refWriteAnimationElement.current, {
        borderTopLeftRadius: isAdmin ? 0 : "4px",
        borderTopRightRadius: isAdmin ? "4px" : 0,
      });
      gsap.set(refWriteAnimationWelcomeBoxImage.current, {
        order: isAdmin ? -1 : 1,
      });

      refTimeline.current
        ?.play()
        .then(() => {
          refTimeline.current?.seek(0).pause();
          const firstEll = messagesQueue.shift();
          setActiveMessages((prev: any) => [...prev, firstEll]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [messagesQueue, activeMessages]);
  useIsomorphicLayoutEffect(() => {
    if (refWelcomeBoxConversation.current == null) return;
    refWelcomeBoxConversation.current.scrollTo(
      0,
      refWelcomeBoxConversation.current.scrollHeight
    );
  }, [activeMessages]);

  return {
    activeMessages,
    refWriteAnimationWelcomeBox,
    refWriteAnimationWelcomeBoxImage,
    refWriteAnimationElement,
    refWelcomeBoxConversation,
    refWelcomeBoxOptions,
    writeMessage,
  };
};
