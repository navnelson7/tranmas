import { useRef, useEffect } from "react";

export const useInfiniteScroll = ({ element, fetch }) => {
  const loader = useRef(fetch);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 0.5 }
    )
  );

  useEffect(() => {
    loader.current = fetch;
  }, [fetch]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
};
