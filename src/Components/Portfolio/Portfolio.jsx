import { useEffect, useState } from "react";
import p1 from "../../Assets/Images/poert1.png";
import p2 from "../../Assets/Images/port2.png";
import p3 from "../../Assets/Images/port3.png";
import "../Portfolio/Prtofolio.css";
import Star from "../Star/Star";
import { filterExamples } from "../../lib/theme";

const IMG = { 1: p1, 2: p2, 3: p3, 4: p1, 5: p2, 6: p3 };
export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const list = filterExamples(cat);
  useEffect(() => {
    if (open == null) return;
    const k = (e) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const item = list.find((e) => e.id === open);
  return (
    <div className="mb-4 p-5">
      <div className="pt-4 text-center"><h1 className="text-uppercase mb-3 fs-1 fw-bolder">Examples</h1><Star color="black" />
        <div className="d-flex justify-content-center gap-2 mb-4" role="group" aria-label="Filter examples">
          {["All", "Web", "Brand"].map((c) => <button key={c} className="btn btn-sm" aria-pressed={cat === c} onClick={() => setCat(c)} style={{ borderRadius: "var(--sf-radius)", background: cat === c ? "var(--sf-primary)" : "transparent", border: "2px solid var(--sf-primary)" }}>{c}</button>)}
        </div>
      </div>
      <div className="container"><div className="row g-5">
        {list.map((e) => (
          <div className="col-lg-4 col-md-6" key={e.id}>
            <button className="p-0 border-0 bg-transparent w-100 text-start" onClick={() => setOpen(e.id)} aria-label={`Open ${e.title}`}>
              <div className="overflow-hidden position-relative" style={{ borderRadius: "var(--sf-radius)" }}>
                <img alt={`${e.title}: ${e.text}`} className="w-100" src={IMG[e.id]} />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><span className="text-white fw-bold fs-4">{e.title}</span></div>
              </div>
            </button>
          </div>
        ))}
      </div></div>
      {item && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ background: "rgba(0,0,0,.7)", zIndex: 2000 }} role="dialog" aria-modal="true" aria-label={item.title} onClick={() => setOpen(null)}>
          <div className="bg-white p-3" style={{ maxWidth: 520, borderRadius: "var(--sf-radius)" }} onClick={(e) => e.stopPropagation()}>
            <img src={IMG[item.id]} alt="" className="w-100 mb-3" style={{ borderRadius: "var(--sf-radius)" }} />
            <h2 className="h4">{item.title} <small className="text-secondary fs-6">{item.cat}</small></h2><p>{item.text}</p>
            <button className="btn" autoFocus onClick={() => setOpen(null)} style={{ background: "var(--sf-primary)", borderRadius: "var(--sf-radius)" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
