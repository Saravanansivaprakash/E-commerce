import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const roolElement = window.document.documentElement;
    roolElement.classList.remove(nextTheme);
    roolElement.classList.add(theme);
  }, [theme, nextTheme]);

  return [nextTheme, setTheme];
};

export default useTheme;
