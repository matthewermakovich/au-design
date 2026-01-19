import React, { useLayoutEffect, useRef, useCallback } from "react";

import type { ReactNode } from "react";

import "./index.css";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 0,
  itemScale = 0,
  itemStackDistance = 100,
  stackPosition = "20%",
  scaleEndPosition = "0%",
  baseScale = 1,
  scaleDuration = 0,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(
    new Map<
      number,
      {
        translateY: number;
        scale: number;
        rotation: number;
        blur: number;
      }
    >(),
  );
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) {
        return 0;
      }

      if (scrollTop > end) {
        return 1;
      }

      return (scrollTop - start) / (end - start);
    },
    [],
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }

      return parseFloat(value as string);
    },
    [],
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    }

    const scroller = scrollerRef.current;

    return {
      scrollTop: scroller!.scrollTop,
      containerHeight: scroller!.clientHeight,
      scrollContainer: scroller!,
    };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();

        return rect.top + window.scrollY;
      }

      return element.offsetTop;
    },
    [useWindowScroll],
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);

    const endElement = useWindowScroll
      ? (document.querySelector(".scroll-stack-end") as HTMLElement)
      : (scrollerRef.current?.querySelector(
          ".scroll-stack-end",
        ) as HTMLElement);

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const cardRect = card.getBoundingClientRect();

      const stickyTop = stackPositionPx;

      const pinStart = cardTop - stickyTop;

      const pinEnd = endElementTop - containerHeight;

      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      const scaleStart = pinStart;
      const scaleEnd = pinStart + cardRect.height * scaleDuration;
      const scaleProgress = calculateProgress(scrollTop, scaleStart, scaleEnd);

      const targetScale = baseScale + i * itemScale;
      const scale = isPinned
        ? Math.max(targetScale, 1 - scaleProgress * (1 - targetScale))
        : 1;

      const rotation =
        rotationAmount && isPinned
          ? i * rotationAmount * Math.min(scaleProgress, 1)
          : 0;

      let blur = 0;

      if (blurAmount && isPinned) {
        let topCardIndex = i;

        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jStickyTop = stackPositionPx;
          const jPinStart = jCardTop - jStickyTop;

          if (scrollTop >= jPinStart && scrollTop <= pinEnd) {
            topCardIndex = Math.max(topCardIndex, j);
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;

          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      const newTransform = {
        translateY: 0,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter =
          newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;
        card.style.zIndex = String(i + 1);

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        if (isPinned && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isPinned && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return null;
    }

    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.addEventListener("scroll", handleScroll, { passive: true });
    }

    return null;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller.querySelectorAll(".scroll-stack-card"),
    ) as HTMLElement[];

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    const { containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }

      const stickyTop = stackPositionPx;

      card.style.top = `${stickyTop}px`;
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
      card.style.perspective = "1000px";
      card.style.webkitPerspective = "1000px";
    });

    setupLenis();

    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const scroller = scrollerRef.current;

      if (scroller) {
        scroller.removeEventListener("scroll", handleScroll);
      }

      if (useWindowScroll) {
        window.removeEventListener("scroll", handleScroll);
      }

      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    getScrollData,
    parsePercentage,
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
