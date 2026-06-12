import { useState } from "react";

export default function MediaCarousel({
  groupTitle,
  description,
  items,
  onOpen,
  reverse = false,
}) {
  const [index, setIndex] = useState(0);

  if (!items?.length) return null;

  const current = items[index];

  const prev = () => {
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  };

  return (
    <section className={`mediaSplit ${reverse ? "reverse" : ""}`}>
      <div className="mediaVisual">
        <button
          className="mediaImageButton"
          onClick={() => onOpen(current)}
          type="button"
        >
          <img
            src={current.src}
            alt={current.title}
            className="mediaSplitImg"
          />
        </button>

        {items.length > 1 && (
          <div className="mediaControls">
            <button onClick={prev} type="button">
              ←
            </button>

            <span>
              {index + 1} / {items.length}
            </span>

            <button onClick={next} type="button">
              →
            </button>
          </div>
        )}
      </div>

      <div className="mediaInfo">
      <div className="mediaType">
        {current.type}
      </div>

      <h3>{current.title}</h3>

      {current.note && (
        <p className="mediaItemDescription">
          {current.note}
        </p>
      )}

      <div className="mediaGroupBlock">
        <div className="mediaEyebrow">
          {groupTitle}
        </div>

        <p className="mediaGroupDescription">
          {description}
        </p>
      </div>

        <button
          className="viewBtn"
          onClick={() => onOpen(current)}
          type="button"
        >
          View Full Image
        </button>
      </div>
    </section>
  );
}