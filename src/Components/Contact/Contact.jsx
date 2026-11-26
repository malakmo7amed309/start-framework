import { useState } from "react";
import Star from "../Star/Star";
import { validateMessage } from "../../lib/theme";

const KEY = "sf-messages";
const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});
  const [list, setList] = useState(read);
  const save = (l) => { setList(l); try { localStorage.setItem(KEY, JSON.stringify(l)); } catch { /* private mode */ } };
  const submit = (e) => {
    e.preventDefault();
    const er = validateMessage(f); setErr(er);
    if (Object.keys(er).length) return;
    save([{ id: Date.now(), ...f, at: new Date().toLocaleString("en-GB") }, ...list].slice(0, 20));
    setF({ name: "", email: "", message: "" });
  };
  const field = (k, label, type = "text") => (
    <div className="mb-3">
      <label htmlFor={k} className="form-label fw-bold">{label}</label>
      {k === "message" ? <textarea id={k} rows="4" className="form-control" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!err[k]} style={{ borderRadius: "var(--sf-radius)" }} />
        : <input id={k} type={type} className="form-control" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!err[k]} style={{ borderRadius: "var(--sf-radius)" }} />}
      {err[k] && <div role="alert" className="text-danger small fw-bold">{err[k]}</div>}
    </div>
  );
  return (
    <div className="mb-4 p-5"><div className="pt-3 container">
      <div className="text-center pt-4"><h1 className="text-uppercase mb-3 fs-1 fw-bolder">Contact</h1><Star color="black" /></div>
      <div className="row g-5 mt-1">
        <form className="col-md-6" onSubmit={submit} noValidate>
          {field("name", "Name")}{field("email", "Email", "email")}{field("message", "Message")}
          <button className="btn" type="submit" style={{ background: "var(--sf-primary)", borderRadius: "var(--sf-radius)" }}>Send message</button>
          <p className="small text-secondary mt-2">Demo: messages are saved in this browser only.</p>
        </form>
        <div className="col-md-6">
          <h2 className="h5 fw-bold">Your sent messages</h2>
          {list.length === 0 ? <p className="text-secondary">Nothing sent yet.</p> : (
            <>
              <ul className="list-unstyled">{list.map((m) => <li key={m.id} className="border-bottom py-2"><b>{m.name}</b> <small className="text-secondary">{m.at}</small><div>{m.message}</div></li>)}</ul>
              <button className="btn btn-link p-0" onClick={() => save([])}>Clear messages</button>
            </>
          )}
        </div>
      </div>
    </div></div>
  );
}
