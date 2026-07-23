"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO_SLIDE_DURATION_MS } from "@/lib/motion";
import { cn } from "@/lib/cn";

export type HeroSlide = {
  eyebrow: string;
  title: string;
  lede: string;
  cta?: { label: string; href: string };
};

/**
 * The homepage's opening statement — a WhatsApp/Instagram-status-style
 * carousel: a discreet segmented progress line advances one slide, then
 * the next, on its own. Segments are also buttons (jump directly, like
 * tapping a status ring) and the whole thing pauses on hover/focus so a
 * reader who stops to read isn't cut off mid-sentence.
 *
 * Reduced motion turns autoplay off entirely rather than just zeroing the
 * animation duration — a silently-instant fill would otherwise fire
 * `onAnimationEnd` immediately and machine-gun through every slide.
 */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const uid = useId();
  const liveRegionId = `${uid}-live`;

  const slide = slides[index];
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const t = setTimeout(next, HERO_SLIDE_DURATION_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, reduceMotion]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-900 text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!sectionRef.current?.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      onKeyDown={onKeyDown}
    >
      {/* Tap zones: left third steps back, right steps forward — the same
          gesture a WhatsApp status uses, offered for pointer users too. */}
      <button type="button" aria-label="Previous slide" onClick={prev} className="absolute inset-y-0 left-0 z-0 w-1/3 lg:w-1/4" />
      <button type="button" aria-label="Next slide" onClick={next} className="absolute inset-y-0 right-0 z-0 w-1/3 lg:w-1/4" />

      <div className="relative z-10">
        <div className="container-page pt-8 lg:pt-10">
          <div className="flex gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Go to slide ${i + 1} of ${slides.length}: ${s.title}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15"
              >
                <span
                  className={cn(
                    "block h-full rounded-full bg-teal-500",
                    i < index && "w-full",
                    i > index && "w-0",
                  )}
                  style={
                    i === index
                      ? reduceMotion
                        ? { width: "100%" }
                        : {
                            width: "100%",
                            animation: `story-progress ${HERO_SLIDE_DURATION_MS}ms linear forwards`,
                            animationPlayState: paused ? "paused" : "running",
                          }
                      : undefined
                  }
                  onAnimationEnd={i === index ? next : undefined}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="container-page py-16 lg:py-24">
          <div key={index} className="max-w-2xl animate-fade-up">
            <p className="eyebrow text-neutral-400">{slide.eyebrow}</p>
            <h1 className="mt-4 text-display font-semibold tracking-tight text-balance">{slide.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300 lg:text-xl">{slide.lede}</p>
            {slide.cta && (
              <div className="mt-8">
                <Button href={slide.cta.href} variant="inverse" size="lg">
                  {slide.cta.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <p id={liveRegionId} role="status" aria-live="polite" className="sr-only">
        {slide.eyebrow}: {slide.title}
      </p>
    </section>
  );
}
