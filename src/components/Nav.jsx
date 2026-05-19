export default function Nav() {
    const links = [
      ["what", "What"],
      ["why", "Why"],
      ["how", "How"],
      ["media", "Media"],
      ["timeline", "Timeline"],
      ["contact", "Contact"],
    ];
  
    return (
      <header className="topbar">
        <div className="brand">
          <span className="dot" />
          <span>COMPOSED</span>
        </div>
  
        <nav className="nav">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </header>
    );
  }
  