import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import policy from "./privacyPolicy.content.json";
import "../../privacy.scss";

const SectionBlock = ({ title, children, isOpen, onToggle }) => (
  <section className="pp-section">
    <button
      className="pp-accordion-header"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <h2 className="pp-h2">{title}</h2>
      <span className={`pp-icon ${isOpen ? "open" : ""}`}>▼</span>
    </button>
    {isOpen && <div className="pp-accordion-body">{children}</div>}
  </section>
);

const SectionContent = ({
  paragraphs = [],
  bullets = [],
  subsections = [],
  groups = [],
  table,
  subnote,
  notes = [],
}) => (
  <>
    {paragraphs.map((p, i) => (
      <p key={i} className="pp-text">
        {p}
      </p>
    ))}

    {bullets.length > 0 && (
      <ul className="pp-list">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}

    {groups.length > 0 &&
      groups.map((g, i) => (
        <div key={i} className="pp-group">
          <h3 className="pp-h3">{g.label}</h3>
          <ul className="pp-list">
            {g.bullets.map((b, bi) => (
              <li key={bi}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

    {subsections &&
      subsections.map((s, i) => (
        <div key={i} className="pp-subsection">
          {s.subtitle && <h3 className="pp-h3">{s.subtitle}</h3>}
          {s.paragraphs &&
            s.paragraphs.map((p, pi) => (
              <p key={pi} className="pp-text">
                {p}
              </p>
            ))}
          {s.bullets && (
            <ul className="pp-list">
              {s.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
          )}
          {s.table && (
            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Data Type</th>
                    <th>Retention Duration</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {s.table.map((row, ri) => (
                    <tr key={ri}>
                      <td>{row.dataType}</td>
                      <td>{row.duration}</td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {s.notes && s.notes.map((n, ni) => <p key={ni} className="pp-note">{n}</p>)}
        </div>
      ))}

    {table && (
      <div className="pp-table-wrap">
        <table className="pp-table">
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Retention Duration</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, ri) => (
              <tr key={ri}>
                <td>{row.dataType}</td>
                <td>{row.duration}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {subnote && <p className="pp-note">{subnote}</p>}
    {notes.length > 0 && notes.map((n, ni) => <p key={ni} className="pp-note">{n}</p>)}
  </>
);

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="privacy-page">
      <Header />
      <main className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">Last Updated: {policy.lastUpdated}</p>

        {policy.sections.map((s, i) => (
          <SectionBlock
            key={i}
            title={s.title}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <SectionContent {...s} />
          </SectionBlock>
        ))}
      </main>
      <Footer />
    </div>
  );
}
