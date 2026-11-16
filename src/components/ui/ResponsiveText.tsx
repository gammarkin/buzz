type ResponsiveTextProps = {
  mobile: string;
  desktop: string;
  /** Breakpoint where the desktop copy takes over, matching where the section's layout changes. */
  from: "md" | "lg";
  /** Language of the mobile copy when it differs from the page language. */
  mobileLang?: string;
};

const visibility = {
  md: { mobile: "md:hidden", desktop: "hidden md:inline" },
  lg: { mobile: "lg:hidden", desktop: "hidden lg:inline" },
} as const;

/**
 * Renders the copy of the mobile or desktop frame when the design uses different text for each.
 * The hidden variant uses display: none, so screen readers only announce the visible one.
 */
export function ResponsiveText({ mobile, desktop, from, mobileLang }: ResponsiveTextProps) {
  if (mobile === desktop) return desktop;

  return (
    <>
      <span lang={mobileLang} className={visibility[from].mobile}>
        {mobile}
      </span>
      <span className={visibility[from].desktop}>{desktop}</span>
    </>
  );
}
