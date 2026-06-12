import { useState } from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Timeline from "./components/Timeline";
import MediaCarousel from "./components/MediaCarousel";
import { site, mediaGroups, installationImages } from "./data";
import InstallationCollage from "./components/InstallationCollage";

function MediaModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modalBack" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalTop">
          <div className="muted">
            {item.type} · {item.title}
          </div>
          <button className="x" onClick={onClose}>
            Close
          </button>
        </div>

        <img
          src={item.src}
          alt={item.title}
          style={{
            width: "100%",
            display: "block",
            background: "rgba(255,255,255,.04)",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="modalBody">{item.note}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Nav />

      <main className="container">
        <section className="hero">
          <div className="heroInner">
            <div className="kicker">
              {site.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <h1>{site.title}</h1>
            <p className="subtitle">{site.subtitle}</p>

            <div className="ctaRow">
              <a className="cta" href="#what">
                Explore project
              </a>
              <a className="cta secondary" href="#timeline">
                View timeline
              </a>
            </div>
          </div>

          <div className="grid">
            <div className="card">
              <div className="cardTitle">Core idea</div>
              <div className="cardText">
                Identity as perfume structure: impression → personality → memory.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Midterm goal</div>
              <div className="cardText">
                Website + playable Stage 1–2 draft with wall test documentation.
              </div>
            </div>
          </div>
        </section>

        <section className="threeSections">
          <Section id="what" title="What" paragraphs={site.what} />
          <Section id="why" title="Why" paragraphs={site.why} />
          <Section id="how" title="How" paragraphs={site.how} />
        </section>

        <section id="media" className="mediaSection">
          <div className="mediaSectionHead">
            <h2>Development Process</h2>
            <p>{site.mediaNote}</p>
          </div>

          {mediaGroups.map((g, idx) => (
            <MediaCarousel
              key={idx}
              groupTitle={g.title}
              description={g.description}
              items={g.items}
              onOpen={(item) => setOpen(item)}
              reverse={idx % 2 === 1}
            />
          ))}
        </section>

        <section id="installation" className="installationSection">
          <div className="mediaSectionHead">
            <h2>Final Installation</h2>
            <p>
              Documentation of the completed installation, exhibition setup, and audience interaction.
            </p>
          </div>

          <InstallationCollage
            items={installationImages}
            onOpen={(item) => setOpen(item)}
          />
        </section>

        <Timeline quarters={site.timeline} />

        <section id="contact" className="contactHighlight">
          <div>
            <div className="mediaType">Contact</div>
            <h2>Let’s Connect</h2>
            <p>
              For questions, collaboration, or project inquiries, contact me at{" "}
              <span className="spamproof">{site.contact}</span>.
            </p>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} COMPOSED
        </footer>
      </main>

      <MediaModal item={open} onClose={() => setOpen(null)} />
    </>
  );
}