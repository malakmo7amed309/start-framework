import Star from "../Star/Star";
const items = [
  ["Routes", "Home, About, Examples and Contact share one layout with React Router."],
  ["Theme tokens", "Colour and radius live in CSS variables, so one change updates every part."],
  ["Bootstrap 5", "Grid, forms and cards come from Bootstrap. You write the parts that are yours."],
  ["Small and tested", "The theme and form logic is plain functions with unit tests."],
];
export default function About() {
  return (
    <section className="about d-flex align-items-center p-5" style={{ background: "var(--sf-dark)", color: "#fff", minHeight: "100vh" }}>
      <div className="container">
        <div className="text-center pt-4"><h1 className="text-uppercase mb-3 fs-1 fw-bolder">About</h1><Star color="white" /></div>
        <p className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>Start Framework is a starting point for small React sites: a layout, a few pages and a theme you can change in seconds. It began as a Bootstrap exercise and is now a small, working template.</p>
        <div className="row g-4">
          {items.map(([t, d]) => (
            <div key={t} className="col-md-6 col-lg-3"><div className="p-4 h-100" style={{ background: "rgba(255,255,255,.08)", borderRadius: "var(--sf-radius)" }}><h2 className="h5 fw-bold" style={{ color: "var(--sf-primary)" }}>{t}</h2><p className="mb-0">{d}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
