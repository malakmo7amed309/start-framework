import { useState } from "react";
import { Link } from "react-router-dom";
import avatars from "../../Assets/Images/avataaars.svg";
import { PRESETS, cssVars, isHex, textOn } from "../../lib/theme";
import { useTheme } from "../Theme/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const set = (patch) => setTheme({ ...theme, ...patch });
  const on = textOn(theme.primary);
  const copy = async () => {
    try { await navigator.clipboard.writeText(cssVars(theme)); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* blocked */ }
  };
  return (
    <>
      <header className="home d-flex justify-content-center align-items-center p-5" style={{ background: "var(--sf-primary)", color: on }}>
        <div className="text-center">
          <img src={avatars} alt="" width="220" />
          <h1 className="text-uppercase mt-3 mb-2 fs-1 fw-bolder">Start Framework</h1>
          <p className="fs-5 mb-4">A tiny React and Bootstrap starter. Pick a colour, see it, copy the CSS.</p>
          <Link to="/portfolio" className="btn btn-lg me-2" style={{ background: "var(--sf-dark)", color: "#fff", borderRadius: "var(--sf-radius)" }}>See examples</Link>
          <a href="#playground" className="btn btn-lg btn-outline-light" style={{ borderRadius: "var(--sf-radius)", color: on, borderColor: on }}>Try the playground</a>
        </div>
      </header>
      <section id="playground" className="container py-5">
        <h2 className="text-center fw-bolder text-uppercase mb-4">Theme playground</h2>
        <div className="row g-4">
          <div className="col-lg-5">
            <p className="fw-bold mb-2">Presets</p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {PRESETS.map((p) => (
                <button key={p.name} className="btn btn-sm border" aria-pressed={theme.primary === p.primary} onClick={() => set({ primary: p.primary, dark: p.dark })} style={{ borderRadius: "var(--sf-radius)", outline: theme.primary === p.primary ? "3px solid var(--sf-primary)" : "none" }}>
                  <span className="d-inline-block me-2 align-middle" style={{ width: 14, height: 14, borderRadius: 7, background: p.primary }}></span>{p.name}
                </button>
              ))}
            </div>
            <label className="d-block mb-3 fw-bold">Primary colour
              <input type="color" className="form-control form-control-color d-block mt-1" value={theme.primary} onChange={(e) => isHex(e.target.value) && set({ primary: e.target.value })} />
            </label>
            <label className="d-block mb-3 fw-bold">Corner radius: {theme.radius}px
              <input type="range" className="form-range" min="0" max="28" value={theme.radius} onChange={(e) => set({ radius: Number(e.target.value) })} />
            </label>
            <pre className="p-3 bg-dark text-light small" style={{ borderRadius: "var(--sf-radius)" }}>{cssVars(theme)}</pre>
            <button className="btn" onClick={copy} style={{ background: "var(--sf-primary)", color: on, borderRadius: "var(--sf-radius)" }}>{copied ? "Copied" : "Copy CSS"}</button>
            <button className="btn btn-link" onClick={() => setTheme({ ...PRESETS[0], radius: 8 })}>Reset</button>
          </div>
          <div className="col-lg-7">
            <div className="p-4 border" style={{ borderRadius: "var(--sf-radius)" }} aria-label="Live preview">
              <p className="text-uppercase small fw-bold text-secondary">Live preview</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <button className="btn" style={{ background: "var(--sf-primary)", color: on, borderRadius: "var(--sf-radius)" }}>Primary</button>
                <button className="btn" style={{ background: "var(--sf-dark)", color: "#fff", borderRadius: "var(--sf-radius)" }}>Dark</button>
                <button className="btn" style={{ border: "2px solid var(--sf-primary)", borderRadius: "var(--sf-radius)" }}>Outline</button>
              </div>
              <div className="card mb-3" style={{ borderRadius: "var(--sf-radius)", overflow: "hidden" }}>
                <div className="card-header fw-bold" style={{ background: "var(--sf-dark)", color: "#fff" }}>Card title</div>
                <div className="card-body"><p className="mb-2">Cards, buttons and inputs follow your colour and radius.</p><span className="badge" style={{ background: "var(--sf-primary)", color: on }}>New</span></div>
              </div>
              <input className="form-control" placeholder="An input" style={{ borderRadius: "var(--sf-radius)" }} aria-label="Sample input" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
