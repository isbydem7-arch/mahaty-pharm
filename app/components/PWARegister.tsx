"use client";

import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const isLocalhost = ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);
    if (process.env.NODE_ENV !== "production") {
      if (!isLocalhost) return;

      navigator.serviceWorker.getRegistrations().then((registrations) =>
        Promise.all(
          registrations
            .filter((registration) => {
              const worker = registration.active ?? registration.waiting ?? registration.installing;
              return registration.scope.startsWith(window.location.origin) && worker?.scriptURL.endsWith("/sw.js");
            })
            .map((registration) => registration.unregister()),
        ),
      ).catch(() => undefined);

      if ("caches" in window) {
        caches.keys().then((names) =>
          Promise.all(
            names
              .filter((name) => name.startsWith("mahaty-pwa-"))
              .map((name) => caches.delete(name)),
          ),
        ).catch(() => undefined);
      }
      return;
    }

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    };

    if (document.readyState === "complete") {
      register();
      return;
    }

    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
