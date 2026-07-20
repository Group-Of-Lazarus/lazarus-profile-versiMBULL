import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * MagneticButton — bungkus tombol/link, nanti dikit ketarik ke arah
 * kursor pas di-hover deket, balik ke posisi normal pas kursor menjauh.
 * Prop `as` nentuin elemen HTML-nya: "a" (default), "button", dll.
 */
export default function MagneticButton({ children, className = "", strength = 0.35, as = "a", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = motion[as] || motion.a;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
