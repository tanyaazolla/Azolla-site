import { useState, useEffect } from 'react';

export const useFindVisibleElements = (elementRefs: any) => {
  const [visibleElementIds, setVisibleElementIds] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleElementIds: any[] = [];

      elementRefs.current &&
        elementRefs.current.forEach((elementRef: any) => {
          if (elementRef && elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const isInViewport =
              rect.top < window.innerHeight / 2 && rect.top > 0;

            if (isInViewport) {
              newVisibleElementIds.push(elementRef.current.id);
            }
          }
        });

      setVisibleElementIds(newVisibleElementIds);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRefs]);

  return visibleElementIds;
};
