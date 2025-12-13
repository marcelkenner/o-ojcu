"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    };

    const handleScroll = () => window.requestAnimationFrame(calculate);

    calculate();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", calculate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
