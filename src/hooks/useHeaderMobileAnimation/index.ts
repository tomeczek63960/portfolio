import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { colors } from "src/styled/mixins";
import { preventScroll } from "src/helpers/preventScroll";
import { isTruthy } from "src/helpers/checkFalsyType";
import { useRouter } from "next/router";

export const useHeaderMobileAnimation = (): [
  RefObject<GSAPTimeline | undefined>,
  RefObject<HTMLSpanElement>,
  RefObject<HTMLSpanElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLButtonElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>
] => {
  const { pathname, locale, query } = useRouter();
  const refBars = useRef<HTMLButtonElement>(null);
  const refFirstDot = useRef<HTMLSpanElement>(null);
  const refLastDot = useRef<HTMLSpanElement>(null);
  const refMobileNav = useRef<HTMLDivElement>(null);
  const refHeaderBar = useRef<HTMLDivElement>(null);
  const refMobileNavContainer = useRef<HTMLDivElement>(null);
  const refSocialMedia = useRef<HTMLDivElement>(null);
  const refPrevScrollPosition = useRef(0);
  const refCurrentScrollPos = useRef(0);
  const refAnimateDots = useRef(true);
  const refTimeline = useRef<GSAPTimeline>();
  const callDotsAnimation = (): void => {
    const barsChildren = isTruthy(refBars.current)
      ? refBars.current.children
      : [];
    gsap.to(barsChildren, {
      duration: 0.3,
      scale: 2,
      stagger: 0.1,
      delay: 0.4,
    });
    gsap.to(barsChildren, {
      duration: 0.3,
      scale: 1,
      stagger: 0.1,
      delay: 0.6,
    });
  };

  const handleScroll = (): void => {
    refCurrentScrollPos.current = window.pageYOffset;
    const headerHeight = `-${
      isTruthy(refHeaderBar.current) ? refHeaderBar.current.offsetHeight : ""
    }px`;
    const isTop = refCurrentScrollPos.current === 0;

    const moreThan80 = refCurrentScrollPos.current >= 80;
    const isPrevPositionLarger =
      refPrevScrollPosition.current >= refCurrentScrollPos.current;

    if (isTop) callDotsAnimation();
    gsap.to(refHeaderBar.current, {
      duration: 0.3,
      boxShadow: `0 0.7rem 2rem ${isTop ? "transparent" : colors.darken}`,
    });

    if (moreThan80 && isPrevPositionLarger && refAnimateDots.current) {
      callDotsAnimation();
    }
    refAnimateDots.current = !isPrevPositionLarger;

    gsap.to(refHeaderBar.current, {
      duration: 0.8,
      y: moreThan80 && !isPrevPositionLarger ? headerHeight : 0,
    });

    refPrevScrollPosition.current = refCurrentScrollPos.current;
  };
  const handleDotsTransform = (): void => {
    if (window.innerWidth < 768) return;
    const barsChildren = isTruthy(refBars.current)
      ? refBars.current.children
      : [];
    gsap.set(barsChildren, {
      y: "-50%",
    });
  };
  useIsomorphicLayoutEffect(() => {
    refTimeline.current = gsap.timeline({ paused: true });
    refPrevScrollPosition.current = window.pageYOffset;

    const barsChildren = isTruthy(refBars.current)
      ? refBars.current.children
      : [];

    refTimeline.current.to(
      barsChildren,
      {
        duration: 0.3,
        scale: 2,
        stagger: 0.1,
      },
      "load-dot"
    );
    refTimeline.current.to(
      barsChildren,
      {
        duration: 0.3,
        scale: 1,
        stagger: 0.1,
        delay: 0.2,
      },
      "load-dot"
    );
    refTimeline.current.to(
      refFirstDot.current,
      {
        duration: 0.3,
        rotate: "-45deg",
        left: "50%",
      },
      "join-dots"
    );
    refTimeline.current.to(
      refLastDot.current,
      {
        duration: 0.3,
        rotate: "45deg",
        left: "50%",
      },
      "join-dots"
    );
    refTimeline.current.to(
      refFirstDot.current,
      {
        duration: 0.5,
        height: "3rem",
      },
      "rotate-dots"
    );
    refTimeline.current.to(
      refLastDot.current,
      {
        duration: 0.5,
        height: "3rem",
      },
      "rotate-dots"
    );
    refTimeline.current.to(
      refMobileNav.current,
      {
        duration: 0.5,
        height: "calc(100vh - 8rem)",
        ease: "power2.out",
      },
      "rotate-dots"
    );
    refTimeline.current.to(
      [
        ...Array.from(
          refSocialMedia.current != null ? refSocialMedia.current.children : []
        ),
        ...Array.from(
          refMobileNavContainer.current != null
            ? refMobileNavContainer.current.children
            : []
        ),
      ],
      {
        duration: 0.3,
        delay: 0.2,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        stagger: 0.1,
      }
    );
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    handleDotsTransform();
    return () => {
      refTimeline.current?.clear().kill();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    return () => {
      setTimeout(() => {
        refTimeline.current?.pause().seek(0);
        preventScroll();
      }, 1000);
    };
  }, [locale, pathname, query]);

  return [
    refTimeline,
    refFirstDot,
    refLastDot,
    refMobileNav,
    refHeaderBar,
    refBars,
    refMobileNavContainer,
    refSocialMedia,
  ];
};
