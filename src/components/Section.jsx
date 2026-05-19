export default function Section({ id, title, paragraphs }) {
    return (
      <section id={id} className="section">
        <h2>{title}</h2>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </section>
    );
  }
  