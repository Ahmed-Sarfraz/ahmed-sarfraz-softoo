import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import useDevice from "./useDevice";
import { LAZYCOUNT } from "src/utils/configs";

type LazyLoadOptions = {
  threshold?: number;
  rootMargin?: string;
};

type UseLazyLoadListReturn<T> = {
  visibleItems: T[];
  loaderRef: React.RefObject<HTMLDivElement>;
};

const config: LazyLoadOptions = {
  threshold: 1.0,
  rootMargin: "0px",
};
const useLazyCountConfig = () => {
  const screenSize = useDevice();
  const { initialCount, incrementCount } = useMemo(() => {
    if (screenSize.isMobile) return LAZYCOUNT.MOBILE;
    if (screenSize.isTablet) return LAZYCOUNT.TABLET;
    return LAZYCOUNT.DESKTOP;
  }, [screenSize]);
  return { initialCount, incrementCount };
};
// The generic type T represents the type of the items in the list
const useLazyLoadList = <T>(items: T[]): UseLazyLoadListReturn<T> => {
  const { initialCount, incrementCount } = useLazyCountConfig();
  const [visibleItems, setVisibleItems] = useState<T[]>(
    items.slice(0, initialCount)
  ); // Initialize with the initial count of items
  const [currentCount, setCurrentCount] = useState(initialCount);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Callback function to call when in threshold
  const callBackFunctionWhenThresholdInViewPort = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && visibleItems.length !== items.length) {
        const nextCount = Math.min(currentCount + incrementCount, items.length); // Determine the next count of items
        setVisibleItems(items.slice(0, nextCount)); // Update visible items
        setCurrentCount(nextCount); // Update the current count
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentCount, incrementCount, items.length, visibleItems]
  );

  // Update visibleItems and currentCount whenever items or initialCount changes
  useEffect(() => {
    setVisibleItems(items.slice(0, initialCount));
    setCurrentCount(initialCount);
  }, [items, initialCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      callBackFunctionWhenThresholdInViewPort,
      config
    );
    const edgeElementToObserve = loaderRef.current;
    if (edgeElementToObserve) {
      observer.observe(edgeElementToObserve);
    }

    return () => {
      if (observer && edgeElementToObserve) {
        observer.unobserve(edgeElementToObserve);
      }
    };
  }, [callBackFunctionWhenThresholdInViewPort]);

  return { visibleItems, loaderRef };
};

export default useLazyLoadList;
