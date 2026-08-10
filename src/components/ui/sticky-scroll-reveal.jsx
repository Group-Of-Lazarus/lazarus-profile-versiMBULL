import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * StickyScroll — adaptasi "Sticky Scroll Reveal" dari Aceternity UI.
 * Beda dari versi aslinya:
 *  - Import dari "framer-motion" (bukan "motion/react") biar konsisten
 *    sama seluruh project ini (lihat package.json & komponen lain).
 *  - `cn` diimport relatif dari src/lib/utils, bukan alias "@/lib/utils".
 *  - Warna background & gradient bisa di-custom lewat props (default-nya
 *    dipakein palet brand biru project ini, bukan warna generik demo).
 *  - Panel sticky dibikin lebih besar (h-80 w-96) + rounded-3xl biar
 *    konsisten sama radius card lain di project.
 *
 * Props:
 *   content: [{ title, description, content?: JSX, extra?: JSX }]
 *   backgroundColors?: string[]  — warna solid background container, di-cycle per index
 *   gradients?: string[]         — CSS gradient buat panel sticky (fallback kalau content kosong)
 *   contentClassName?: string    — tambahan class buat panel sticky
 */
export const StickyScroll = ({ content, contentClassName, backgroundColors, gradients }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  // Default on-brand: navy gelap (senada --color-blue-950/900 di index.css)
  // dan gradient aksen biru — dipakai kalau item content-nya tidak
  // menyediakan gambar/JSX sendiri.
  const defaultBackgrounds = ["#0c1530", "#14224c", "#0f172a", "#1c3069", "#111827", "#0b1220"];
  const defaultGradients = [
    "linear-gradient(135deg, #2D4FA5, #5580c8)",
    "linear-gradient(135deg, #0891b2, #2D4FA5)",
    "linear-gradient(135deg, #4c1d95, #2D4FA5)",
    "linear-gradient(135deg, #0f766e, #2D4FA5)",
    "linear-gradient(135deg, #1e3a8a, #3730a3)",
    "linear-gradient(135deg, #2D4FA5, #0c1530)",
  ];
  const bgList = backgroundColors?.length ? backgroundColors : defaultBackgrounds;
  const gradientList = gradients?.length ? gradients : defaultGradients;

  const [backgroundGradient, setBackgroundGradient] = useState(gradientList[0]);

  useEffect(() => {
    setBackgroundGradient(gradientList[activeCard % gradientList.length]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <motion.div
      animate={{ backgroundColor: bgList[activeCard % bgList.length] }}
      transition={{ duration: 0.4 }}
      className="relative flex h-[36rem] justify-center gap-10 overflow-y-auto rounded-3xl p-6 md:p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-1 md:px-4">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 first:mt-2 md:my-20 md:first:mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className="mb-3 text-xs font-semibold tracking-wider text-white/50"
              >
                {String(index + 1).padStart(2, "0")} / {String(cardLength).padStart(2, "0")}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className="font-display text-2xl font-bold text-white md:text-3xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 md:text-base"
              >
                {item.description}
              </motion.p>
              {item.extra && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  {item.extra}
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-24 md:h-32" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-6 hidden h-80 w-96 shrink-0 overflow-hidden rounded-3xl shadow-2xl transition-[background] duration-500 lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
