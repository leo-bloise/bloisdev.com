import { useEffect, useState } from "react";

type TColors = {
  background: string;
  foreground: string;
}

export default function useColors() {
  const [colors, setColors] = useState<TColors>({
    background: '',
    foreground: ''
  });

  useEffect(() => {
    if (!getComputedStyle) throw new Error("getComputedStyle not defined.");
    const computedStyle = getComputedStyle(document.documentElement);

    const bg = computedStyle.getPropertyValue("--background").trim();
    const fg = computedStyle.getPropertyValue('--foreground').trim();

    setColors({
      background: bg,
      foreground: fg
    })
  }, []);

  return colors;
}
