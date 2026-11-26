export const PRESETS = [
  { name: 'Teal', primary: '#1abc9c', dark: '#2c3e50' },
  { name: 'Violet', primary: '#7c4dff', dark: '#1f1b3a' },
  { name: 'Coral', primary: '#ff6b57', dark: '#3a1f1b' },
  { name: 'Ocean', primary: '#1e88e5', dark: '#0d2740' },
]
export const isHex = (s) => /^#[0-9a-f]{6}$/i.test(String(s).trim())
const chan = (h, i) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16)
export function luminance(hex) {
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 }
  return 0.2126 * f(chan(hex, 0)) + 0.7152 * f(chan(hex, 1)) + 0.0722 * f(chan(hex, 2))
}
export function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}
/** White or near-black text, whichever reads better on the colour. */
export const textOn = (hex) => (contrast(hex, '#ffffff') >= contrast(hex, '#111111') ? '#ffffff' : '#111111')
export function cssVars(t) {
  return `:root {\n  --sf-primary: ${t.primary};\n  --sf-on-primary: ${textOn(t.primary)};\n  --sf-dark: ${t.dark};\n  --sf-radius: ${t.radius}px;\n}`
}
export function validateMessage(f) {
  const e = {}
  if (!f.name || f.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(f.email || '').trim())) e.email = 'Enter a valid email.'
  if (!f.message || f.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}
export const EXAMPLES = [
  { id: 1, cat: 'Web', title: 'Cabin', text: 'A booking page for a mountain cabin, built with a hero, a gallery and a form.' },
  { id: 2, cat: 'Brand', title: 'Cake', text: 'Packaging and a one-page site for a home bakery.' },
  { id: 3, cat: 'Web', title: 'Circus', text: 'An event page with a countdown and a ticket table.' },
  { id: 4, cat: 'Brand', title: 'Game', text: 'Logo and store art for a small puzzle game.' },
  { id: 5, cat: 'Web', title: 'Safe', text: 'A banking landing page with a clear sign-up flow.' },
  { id: 6, cat: 'Brand', title: 'Submarine', text: 'Poster and identity for a diving club.' },
]
export const filterExamples = (cat) => (cat === 'All' ? EXAMPLES : EXAMPLES.filter((e) => e.cat === cat))
