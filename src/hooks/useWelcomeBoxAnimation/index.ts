import { gsap } from "gsap";
import { useRef, useState, MouseEvent, RefObject } from "react";
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { ReturnTypes } from "./types";
import {
  IStrapiWelcomeboxMessage,
  IStrapiWelcomeboxToggler,
} from "src/ui/WelcomeBox/types";
import { useErrorHandler } from "../useErrorHandler";

export const useWelcomeBoxAnimation = (
  newMessages: IStrapiWelcomeboxMessage[],
  refWelcomeBoxConversation: RefObject<HTMLDivElement>,
  activeMessages: IStrapiWelcomeboxMessage[],
  setActiveMessages: Function
): ReturnTypes => {
  const [messagesQueue, setMessagesQueue] = useState<any>([]);
  const refWriteAnimationWelcomeBox = useRef<HTMLDivElement>(null);
  const refWriteAnimationWelcomeBoxImage = useRef<HTMLDivElement>(null);
  const refWriteAnimationElement = useRef<HTMLDivElement>(null);
  const refWelcomeBoxOptions = useRef<HTMLDivElement>(null);
  const refTimeline = useRef<GSAPTimeline>();
  const [setError] = useErrorHandler();
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
    message: IStrapiWelcomeboxToggler
  ): void => {
    if (isFalsy(refWelcomeBoxConversation.current)) return;
    const togglerMessages = newMessages.filter(
      (msg: IStrapiWelcomeboxMessage) => msg.Toggler === message.Toggler
    );
    const selector = `[data-scroll-to="${
      isTruthy(message.Toggler) ? message.Toggler : ""
    }"]`;
    const isInConversation = refWelcomeBoxConversation.current.querySelector(
      selector
    ) as HTMLDivElement;
    if (isFalsy(isInConversation)) {
      setMessagesQueue((prev: IStrapiWelcomeboxMessage[]) => [
        ...prev,
        ...togglerMessages,
      ]);
    } else {
      refWelcomeBoxConversation.current.scrollTo(0, isInConversation.offsetTop);
    }
  };
  useIsomorphicLayoutEffect(() => {
    gsap.set(refWelcomeBoxOptions.current, {
      pointerEvents: isTruthy(messagesQueue.length) ? "none" : "all",
    });
    if (isTruthy(messagesQueue.length)) {
      const isAdmin = messagesQueue[0].Type === "admin";
      gsap.set(refWriteAnimationWelcomeBox.current, {
        justifyContent: isAdmin ? "flex-start" : "flex-end",
      });
      gsap.set(refWriteAnimationElement.current, {
        borderTopLeftRadius: isAdmin ? 0 : "0.4rem",
        borderTopRightRadius: isAdmin ? "0.4rem" : 0,
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
        .catch(() => {
          setError();
        });
    }
  }, [messagesQueue, activeMessages]);
  useIsomorphicLayoutEffect(() => {
    if (isFalsy(refWelcomeBoxConversation.current)) return;
    refWelcomeBoxConversation.current.scrollTo(
      0,
      refWelcomeBoxConversation.current.scrollHeight
    );
  }, [activeMessages]);

  return {
    refWriteAnimationWelcomeBox,
    refWriteAnimationWelcomeBoxImage,
    refWriteAnimationElement,
    refWelcomeBoxOptions,
    writeMessage,
  };
};
