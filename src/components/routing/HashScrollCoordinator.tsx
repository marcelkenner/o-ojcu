"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HashScrollManager } from "@/lib/scroll/HashScrollManager";

export default function HashScrollCoordinator() {
  const pathname = usePathname();
  const manager = useMemo(() => new HashScrollManager(), []);

  useEffect(() => {
    manager.scrollToCurrentHashWithRetry();
  }, [manager, pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      manager.scrollToCurrentHashWithRetry();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [manager]);

  return null;
}

