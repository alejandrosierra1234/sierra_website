/**
 * Framer Motion easing constants. Framer needs a JS curve, not a CSS
 * variable, so this mirrors --ease-precise / --ease-exit from
 * globals.css exactly. If one changes, change both in the same commit.
 */
export const EASE_PRECISE = [0.2, 0, 0, 1] as const;
export const EASE_EXIT = [0.4, 0, 1, 1] as const;

/**
 * Autoplay duration for the homepage hero's story-style progress bar
 * (`story-progress` keyframe in globals.css). One constant, read by both
 * the JS timer and the CSS animation, so they can never drift apart.
 */
export const HERO_SLIDE_DURATION_MS = 6000;
