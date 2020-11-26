export default function useInfiniteScroll({elementObserver,fetch}){
  const [loading, setloading] = useState(false);

  const load = () => {
    setloading(true);
    setTimeout(() => {
      fetch()
      setloading(false);
    }, 300);
  };

  const loader = React.useRef(load);

  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );
  //REFRESH TO REFERENCE
  React.useEffect(() => {
    loader.current = load;
  }, [load]);

  React.useEffect(() => {
    const currentElement = elementObserver;
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

  return {
      loading
  }
}