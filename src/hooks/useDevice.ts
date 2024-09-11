import { useEffect, useState } from "react";

type ScreenSize = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const useDevice = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 767 && !screenSize.isMobile) {
        setScreenSize({ isMobile: true, isTablet: false, isDesktop: false });
      } else if (width > 767 && width <= 1024 && !screenSize.isTablet) {
        setScreenSize({ isMobile: false, isTablet: true, isDesktop: false });
      } else if (width > 1024 && !screenSize.isDesktop) {
        setScreenSize({ isMobile: false, isTablet: false, isDesktop: true });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return screenSize;
};

export default useDevice;
