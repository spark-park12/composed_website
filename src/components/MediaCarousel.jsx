import { useRef } from "react";

export default function MediaCarousel({ groupTitle, items, onOpen }) {
  const trackRef = useRef(null);

  const scrollBy = (dx) => {
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <div className="mediaGroup">
      <div className="mediaGroupHead">
        <h3 className="mediaGroupTitle">{groupTitle}</h3>

        <div className="mediaGroupBtns">
          <button className="mediaBtn" onClick={() => scrollBy(-420)} type="button">←</button>
          <button className="mediaBtn" onClick={() => scrollBy(420)} type="button">→</button>
        </div>
      </div>

      <div className="mediaTrack" ref={trackRef}>
        {items.map((m, idx) => (
          <button
            key={idx}
            className="mediaCard"
            onClick={() => onOpen(m)}
            type="button"
          >
            <div
              className="mediaImg"
              style={{ backgroundImage: `url(${m.src})` }}
            />
            <div className="mediaCap">
              <div className="mediaType">{m.type}</div>
              <div className="mediaName">{m.title}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
