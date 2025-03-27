import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="faq">
      <Container>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <Accordion activeKey={activeKey}>
          {[
            { question: "What services do you offer?", answer: "We offer web and mobile app development, digital strategy consulting, and more." },
            { question: "How can I get started?", answer: "Contact us for a free consultation, and we’ll guide you through the process." }
          ].map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={index} className="faq-item">
              <Accordion.Header onClick={() => toggleAccordion(String(index))} className="faq-header">
                <span className={`faq-question ${activeKey === String(index) ? "active" : ""}`}>
                  {item.question}
                </span>
                <span className="faq-icon">{activeKey === String(index) ? "−" : "+"}</span>
              </Accordion.Header>
              <Accordion.Body className="faq-answer">{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
