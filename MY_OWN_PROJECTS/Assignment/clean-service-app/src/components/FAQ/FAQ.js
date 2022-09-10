import "./FAQ.css";
import cleanContext from "../../store/clean-context";
import { useContext, useRef } from "react";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

const FAQ = () => {
  const ctx = useContext(cleanContext);
  const { faq } = ctx;
  return (
    <div className="faq">
      <h2>FAQ's Before Home Cleaning Services In Delhi NCR</h2>
      <div className="accordion-wrapper">
        {faq.map((q, idx) => {
          return (
            <div className="accordion" key={idx}>
              <input type="radio" name="radio-a" id={`check${idx}`} />
              <label className="accordion-label" htmlFor={`check${idx}`}>
                {q.question}
              </label>
              <div className="accordion-content">
                <p>{q.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
