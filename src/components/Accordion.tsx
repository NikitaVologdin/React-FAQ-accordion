import { useState, useRef } from "react";

interface props {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: props) {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLParagraphElement>(null);
  const icon = isVisible
    ? "/assets/images/icon-minus.svg"
    : "/assets/images/icon-plus.svg";
  function toggleAccordion() {
    setIsVisible(!isVisible);
    if (contentRef.current) {
      setHeight(isVisible ? "0px" : `${contentRef.current.scrollHeight}px`);
    }
  }

  return (
    <article className="question">
      <header className="question__header">
        <h2 className="question__title">{title}</h2>
        <button onClick={toggleAccordion} className="question__button">
          <img src={icon} alt="" width={24.38} height={24.38} />
        </button>
      </header>
      <p
        className="question__answer"
        style={{ maxHeight: height }}
        ref={contentRef}
      >
        {content}
      </p>
    </article>
  );
}
