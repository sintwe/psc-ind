import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Check if the window object is available (for SSR)
    if (typeof window === "undefined") {
      return;
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Set the initial state based on the media query match
    setIsMobile(mql.matches);

    // Define the event listener using the mql.matches property
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the listener
    mql.addEventListener("change", handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => {
      mql.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
}