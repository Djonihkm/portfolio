"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * framer-motion's useReducedMotion() reads matchMedia synchronously on the
 * client but always resolves false on the server, which fails hydration for
 * any real visitor whose OS has reduced motion enabled. useSyncExternalStore
 * is the SSR-safe way to read this kind of client-only value: it renders the
 * server snapshot on the first client pass, then swaps in the real value
 * afterwards without a hydration mismatch.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
