import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

/**
 * TiltCard — bungkus card apapun di dalamnya, nanti miring dikit 3D
 * ngikutin posisi kursor pas di-hover, balik rata pas kursor keluar.
 */
export default function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), {
    stiffness: 300,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
