import { useState } from "react";
import { motion } from "framer-motion";

/**
 * PhotoStack — tumpukan foto yang bisa diklik.
 * Klik foto paling depan → dia pindah ke belakang tumpukan, foto berikutnya jadi depan.
 * Props:
 *   images: [{ src, alt }]
 *   size:   lebar/tinggi tumpukan dalam px (default 280)
 */
export default function PhotoStack({ images, size = 280 }) {
  const [order, setOrder] = useState(images.map((_, i) => i));

  const sendToBack = (imgIndex) => {
    setOrder((prev) => [...prev.filter((i) => i !== imgIndex), imgIndex]);
  };

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      {order.map((imgIndex, pos) => {
        const img = images[imgIndex];
        const isFront = pos === 0;
        const offset = pos * 14;
        const tilt = imgIndex % 2 === 0 ? 1 : -1;

        return (
          <motion.div
            key={imgIndex}
            onClick={() => isFront && sendToBack(imgIndex)}
            className={`absolute inset-0 rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-xl ${
              isFront ? "cursor-pointer" : ""
            }`}
            style={{ zIndex: images.length - pos }}
            animate={{
              x: offset,
              y: -offset,
              rotate: pos === 0 ? 0 : tilt * (pos * 3),
              scale: 1 - pos * 0.05,
            }}
            whileHover={isFront ? { scale: 1.02 } : {}}
            whileTap={isFront ? { scale: 0.97 } : {}}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              draggable={false}
              className="w-full h-full object-cover pointer-events-none select-none"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
