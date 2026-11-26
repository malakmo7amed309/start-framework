import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PRESETS } from "../../lib/theme";

const KEY = "sf-theme";
const Ctx = createContext(null);
const initial = () => {
  try { const t = JSON.parse(localStorage.getItem(KEY)); if (t && t.primary) return t; } catch { /* ignore */ }
  return { ...PRESETS[0], radius: 8 };
};
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initial);
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--sf-primary", theme.primary);
    r.setProperty("--sf-dark", theme.dark);
    r.setProperty("--sf-radius", theme.radius + "px");
    try { localStorage.setItem(KEY, JSON.stringify(theme)); } catch { /* private mode */ }
  }, [theme]);
  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(Ctx);
ThemeProvider.propTypes = { children: PropTypes.node };
