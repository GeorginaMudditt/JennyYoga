import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1) => {
        const rect = h1.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          h1.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
