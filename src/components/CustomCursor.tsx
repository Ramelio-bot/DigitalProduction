"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHoveringProject, setIsHoveringProject] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = (e: MouseEvent) => {
      setIsHovered(true);
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='view']")) {
        setIsHoveringProject(true);
      }
    };
    const handleHoverEnd = () => {
      setIsHovered(false);
      setIsHoveringProject(false);
    };

    window.addEventListener("mousemove", moveCursor);
    
    const interactables = document.querySelectorAll('a, button, [role="button"], .interactable') as NodeListOf<HTMLElement>;
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart as EventListener);
      el.addEventListener("mouseleave", handleHoverEnd as EventListener);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart as EventListener);
        el.removeEventListener("mouseleave", handleHoverEnd as EventListener);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: "-50%",
        y: "-50%",
        scale: isHovered ? 2.5 : 1,
        opacity: isVisible ? 1 : 0,
        width: isHoveringProject ? 80 : 16,
        height: isHoveringProject ? 80 : 16,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isHoveringProject && (
        <span className="text-[10px] uppercase font-bold text-white tracking-tighter">
          View
        </span>
      )}
    </motion.div>
  );
}
