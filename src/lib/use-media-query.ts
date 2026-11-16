import { useCallback, useSyncExternalStore } from "react";

/** The lg breakpoint, where the page switches to the desktop frame's layout. */
export const DESKTOP_QUERY = "(min-width: 64rem)";

/**
 * Tracks a media query. The server snapshot assumes the desktop layout,
 * so the first paint on small screens can briefly show desktop values.
 */
export function useMediaQuery(query: string, serverValue = true) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}
