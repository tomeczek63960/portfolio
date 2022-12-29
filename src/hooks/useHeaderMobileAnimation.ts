import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useTimeline } from "src/hooks/useTimeline";
import { colors } from "src/styled/mixins";
import { preventScroll } from "src/helpers/preventScroll";
import { isTruthy } from "src/helpers/checkFalsyType";

export const useHeaderMobileAnimation = (
  locale: string,
  pathname: string
): [
  GSAPTimeline,
  RefObject<HTMLSpanElement>,
  RefObject<HTMLSpanElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLButtonElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>
] => {
  const bars = useRef<HTMLButtonElement>(null);
  const firstDot = useRef<HTMLSpanElement>(null);
  const lastDot = useRef<HTMLSpanElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const headerBar = useRef<HTMLDivElement>(null);
  const mobileNavContainer = useRef<HTMLDivElement>(null);
  const socialMediaRef = useRef<HTMLDivElement>(null);
  const prevScrollPosition = useRef(0);
  const currentScrollPos = useRef(0);
  const animateDots = useRef(true);
  const runDotsAnimation = (): void => {
    const barsChildren = isTruthy(bars.current) ? bars.current.children : [];
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
    currentScrollPos.current = window.pageYOffset;
    const headerHeight = `-${
      // isTruthy(headerBar.current) ? headerBar.current.offsetHeight : ""
      isTruthy(headerBar.current) ? headerBar.current.offsetHeight : ""
    }px`;
    const isTop = currentScrollPos.current === 0;

    const moreThan80 = currentScrollPos.current >= 80;
    const isPrevPositionLarger =
      prevScrollPosition.current >= currentScrollPos.current;

    if (isTop) runDotsAnimation();
    gsap.to(headerBar.current, {
      duration: 0.3,
      boxShadow: `0 0.7rem 2rem ${isTop ? "transparent" : colors.darken}`,
    });

    if (moreThan80 && isPrevPositionLarger && animateDots.current) {
      runDotsAnimation();
    }
    animateDots.current = !isPrevPositionLarger;

    gsap.to(headerBar.current, {
      duration: 0.4,
      y: moreThan80 && !isPrevPositionLarger ? headerHeight : 0,
    });

    prevScrollPosition.current = currentScrollPos.current;
  };
  const tlCallback = (timeline: GSAPTimeline): void => {
    prevScrollPosition.current = window.pageYOffset;
    isTruthy(bars.current) &&
      timeline.to(
        bars.current.children,
        {
          duration: 0.3,
          scale: 2,
          stagger: 0.1,
        },
        "load-dot"
      );
    isTruthy(bars.current) &&
      timeline.to(
        bars.current.children,
        {
          duration: 0.3,
          scale: 1,
          stagger: 0.1,
          delay: 0.2,
        },
        "load-dot"
      );
    timeline.to(
      firstDot.current,
      {
        duration: 0.3,
        rotate: "-45deg",
        left: "50%",
      },
      "join-dots"
    );
    timeline.to(
      lastDot.current,
      {
        duration: 0.3,
        rotate: "45deg",
        left: "50%",
      },
      "join-dots"
    );
    timeline.to(
      firstDot.current,
      {
        duration: 0.5,
        height: "30px",
      },
      "rotate-dots"
    );
    timeline.to(
      lastDot.current,
      {
        duration: 0.5,
        height: "30px",
      },
      "rotate-dots"
    );
    timeline.to(
      mobileNav.current,
      {
        duration: 0.5,
        height: "calc(100vh - 80px)",
        ease: "power2.out",
      },
      "rotate-dots"
    );
    timeline.to(
      [
        ...Array.from(
          socialMediaRef.current != null ? socialMediaRef.current.children : []
        ),
        ...Array.from(
          mobileNavContainer.current != null
            ? mobileNavContainer.current.children
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
  };
  const [tl] = useTimeline(tlCallback);

  useIsomorphicLayoutEffect(() => {
    return () => {
      setTimeout(() => {
        tl.pause();
        tl.seek(0);
        preventScroll();
      }, 1000);
    };
  }, [locale, pathname]);

  return [
    tl,
    firstDot,
    lastDot,
    mobileNav,
    headerBar,
    bars,
    mobileNavContainer,
    socialMediaRef,
  ];
};
