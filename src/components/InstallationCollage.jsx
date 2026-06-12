import { useState } from "react";

export default function InstallationCollage({ items, onOpen }) {
  const [start, setStart] = useState(0);

  if (!items?.length) return null;

  const visibleItems = Array.from({ length: 4 }, (_, i) => {
    return items[(start + i) % items.length];
  });

  const next = () => {
    setStart((i) => (i + 1) % items.length);
  };

  const prev = () => {
    setStart((i) => (i - 1 + items.length) % items.length);
  };

  return (
    <div className="installationFeature">
      <div className="installationCollage">
        {visibleItems.map((item, idx) => (
          <button
            key={`${item.title}-${idx}`}
            className={`collageItem collageItem${idx + 1}`}
            onClick={() => onOpen(item)}
            type="button"
          >
            <img src={item.src} alt={item.title} />
          </button>
        ))}
      </div>

      <div className="installationContent">
        <div>
          <div className="mediaType">Exhibition Documentation</div>
          <h3>COMPOSED Installation</h3>
          <p>
          COMPOSED is an interactive installation that explores identity through scent. 
          Participants journey through Top, Middle, and Base Note stages, gradually building 
          a personalized scent profile. The experience extends beyond the screen through 
          physical interaction, illuminated scent displays, and fragrance sampling, 
          allowing participants to encounter their generated scent identity in both 
          digital and physical form.
          </p>
        </div>

        <div className="installationControls">
          <button onClick={prev} type="button">←</button>
          <span>
            {start + 1} / {items.length}
          </span>
          <button onClick={next} type="button">→</button>
        </div>
      </div>
    </div>
  );
}