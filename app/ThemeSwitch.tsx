"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <SunIcon />
      </button>
    );
  } else {
    return (
      <button onClick={() => setTheme("dark")}>
        <MoonIcon />
      </button>
    );
  }
};

export default ThemeSwitch;
