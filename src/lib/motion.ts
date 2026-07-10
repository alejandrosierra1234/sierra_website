/**
 * Framer Motion easing constants. Framer needs a JS curve, not a CSS
 * variable, so this mirrors --ease-precise / --ease-exit from
 * globals.css exactly. If one changes, change both in the same commit.
 */
export const EASE_PRECISE = [0.2, 0, 0, 1] as const;
export const EASE_EXIT = [0.4, 0, 1, 1] as const;
