"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, Dispatch, SetStateAction } from "react";

type Scroll01Item = {
  title: string;
  description: string;
  media: string;
};

export interface Scroll01Props {
  items: Scroll01Item[];
}

function ScrollItem({
  item,
  index,
  setActive,
}: {
  item: Scroll01Item;
  index: number;
  setActive: Dispatch<SetStateAction<number>>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 15%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const opacityValues = index === 0 ? [1, 0.7, 1, 0] : [0, 0.7, 1, 0];
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    opacityValues,
  );

  const isActive = useTransform(scrollYProgress, (v) => v > 0.4 && v < 0.6);

  useMotionValueEvent(isActive, "change", (v) => {
    if (v) {
      setActive((prev) => (prev === index ? prev : index));
    }
  });

  return (
    <motion.article
      ref={ref}
      style={{ opacity, y }}
      className="flex flex-col items-center"
    >
      <div className="text-center p-8 md:p-12 bg-[rgba(255,255,255,0.85)] border border-divider backdrop-blur-md rounded-2xl shadow-xl">
        <h3 className="mb-6 font-display text-4xl text-primary opacity-80">{item.title}</h3>
        <p className="font-sans font-light text-heading text-xl leading-relaxed">{item.description}</p>
      </div>
    </motion.article>
  );
}

export function Scroll01({ items }: Readonly<Scroll01Props>) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      {/* Mobile Layout */}
      <div className="space-y-16 md:hidden">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="flex flex-col items-center space-y-6 text-center bg-[rgba(255,255,255,0.85)] border border-divider rounded-2xl p-6 shadow-lg"
          >
            <div className="space-y-4">
              <h3 className="font-display text-3xl text-primary opacity-80">{item.title}</h3>
              <p className="font-sans font-light text-heading text-lg leading-relaxed">{item.description}</p>
            </div>
            <img
              src={item.media}
              alt={item.title}
              className="h-72 w-full rounded-2xl object-cover"
            />
          </article>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden gap-12 md:grid md:grid-cols-2 relative h-[300vh]">
        
        {/* Sticky Images side */}
        <div className="sticky top-24 max-h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
          {items.map((item, index) => (
            <motion.img
              key={`${item.title}-${index}`}
              src={item.media}
              alt={item.title}
              className="absolute inset-0 aspect-4/3 h-full w-full object-cover"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                willChange: "opacity",
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Scrolling Content side */}
        <div className="py-[15vh]">
          <div className="space-y-[45vh]">
            {items.map((item, index) => (
              <ScrollItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                setActive={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
