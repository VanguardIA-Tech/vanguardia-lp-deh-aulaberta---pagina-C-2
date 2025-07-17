import { useEffect, useState, useCallback } from "react";

const ScrollDownArrow = () => {
  const [show, setShow] = useState(true);
  const [bottomOffset, setBottomOffset] = useState(32);

  useEffect(() => {
    // A seta aparece sempre, exceto quando próxima do rodapé, sobrepondo botões ou no final da página
    const adjustOffset = () => {
      let offset = 32;
      let visible = true;
      const btn = document.querySelector("button, .main-action-btn");
      const footer = document.querySelector("footer");
      const windowHeight = window.innerHeight;
      const scrollBottom = window.scrollY + windowHeight;
      const pageHeight = document.documentElement.scrollHeight;
      // Oculta se estiver próximo do final da página
      if (pageHeight - scrollBottom < 80) {
        visible = false;
      }
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < windowHeight && rect.top > windowHeight - 120) {
          offset = windowHeight - rect.top + 32;
          visible = false;
        }
      } else if (btn) {
        const rect = btn.getBoundingClientRect();
        if (rect.top < windowHeight && rect.top > windowHeight - 120) {
          offset = windowHeight - rect.top + 32;
          visible = false;
        }
      }
      setBottomOffset(offset);
      setShow(visible);
    };
    window.addEventListener("resize", adjustOffset);
    window.addEventListener("scroll", adjustOffset);
    adjustOffset();
    return () => {
      window.removeEventListener("resize", adjustOffset);
      window.removeEventListener("scroll", adjustOffset);
    };
  }, []);

  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={handleScroll}
      aria-label="Descer para ver mais"
      className="fixed right-8 bottom-8 z-50 flex flex-col items-center group"
      style={{ background: "none", border: "none", bottom: bottomOffset, transition: 'bottom 0.2s' }}
    >
      <svg
        width={36}
        height={36}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-bounce"
      >
        <path
          d="M28 44L28 12"
          stroke="#BFFF1A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M16 32L28 44L40 32"
          stroke="#BFFF1A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="sr-only">Descer para ver mais</span>
    </button>
  );
};

export default ScrollDownArrow;
