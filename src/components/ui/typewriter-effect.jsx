import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { cn } from "../../lib/utils";

// Typewriter Effect ala Aceternity UI, disesuaikan: pakai framer-motion
// (bukan package "motion" terpisah) dan token warna project ini
// (--text-primary, --brand) supaya otomatis ikut light/dark mode.

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block mr-2">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(
                "text-[var(--text-primary)] opacity-0 hidden",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-[var(--brand)]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block mr-2">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("text-[var(--text-primary)]", word.className)}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      >
        <div
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-extrabold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px] h-6 sm:h-8 md:h-10 lg:h-12 bg-[var(--brand)]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
