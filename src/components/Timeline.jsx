import { useState } from "react";

export default function Timeline({ quarters }) {
  const [tab, setTab] = useState("winter");
  const items = tab === "winter" ? quarters.winter : quarters.spring;

  return (
    <section id="timeline" className="section">
      <div className="timelineHead">
        <h2 className="timelineTitle">Timeline</h2>

        <div className="tabs" role="tablist" aria-label="Timeline quarters">
          <button
            className={`tab ${tab === "winter" ? "active" : ""}`}
            onClick={() => setTab("winter")}
            role="tab"
            aria-selected={tab === "winter"}
          >
            Winter Quarter
          </button>
          <button
            className={`tab ${tab === "spring" ? "active" : ""}`}
            onClick={() => setTab("spring")}
            role="tab"
            aria-selected={tab === "spring"}
          >
            Spring Quarter
          </button>
        </div>
      </div>

      <div className="timeline" style={{ marginTop: 14 }}>
        {items.map((it, idx) => (
          <div className="tl" key={idx}>
            <b>{it.week}</b>
            <div>{it.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
