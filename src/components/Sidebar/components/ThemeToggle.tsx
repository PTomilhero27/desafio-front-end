"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();
  const sunControls = useAnimation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    animateThemeSwitch(newTheme);
  };

  const animateThemeSwitch = (newTheme: string) => {
    if (newTheme === "dark") {
      controls.start({
        background: "#151d29",
      });
      sunControls.start({
        rotate: 180,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      });
    } else {
      controls.start({
        background: "#d6e7f7",
      });
      sunControls.start({
        rotate: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      });
    }
  };

  if (!mounted) return null;

  return (
    <label className="w-12 h-12 flex cursor-pointer">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        onChange={handleToggle}
        checked={theme === "dark"}
      />
      <motion.div
        className="relative rounded-full w-full h-full overflow-hidden flex items-center justify-center"
        initial={false}
        animate={controls}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          background: theme === "dark" ? "#151d29" : "#d6e7f7",
        }}
      >
        <svg viewBox="0 0 28 28" className="absolute w-12 h-12">
          <defs>
            <linearGradient id="gradient-light" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#8bc8f2" offset="0"></stop>
              <stop stopColor="#fff" offset="1"></stop>
            </linearGradient>
            <linearGradient id="gradient-dark" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#1F21w-121" offset="0"></stop>
              <stop stopColor="#7D59DF" offset="1"></stop>
            </linearGradient>
            <pattern
              id="pattern-light"
              width="0.1"
              height="1"
              viewBox="0 0 10 45"
            >
              <path
                fill="#40b5f8"
                d="M 0 0 a 6 6 0 0 0 10 0 v 45 h -10 z"
              ></path>
            </pattern>
            <pattern
              id="pattern-dark"
              width="0.2"
              height="1"
              viewBox="0 0 20 45"
            >
              <path fill="#fff" d="M 2 5 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
              <path fill="#fff" d="M 10 16 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
              <path fill="#fff" d="M 16 27 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
              <path fill="#fff" d="M 10 38 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
            </pattern>
          </defs>
          <g clipPath="url(#clip)">
            <motion.g
              className="dark"
              animate={{ opacity: theme === "dark" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <rect
                fill="url(#gradient-dark)"
                x="0"
                y="0"
                width="32"
                height="32"
              ></rect>
              <rect
                fill="url(#pattern-dark)"
                x="0"
                y="0"
                width="32"
                height="32"
                transform="translate(0, -32)"
              ></rect>
            </motion.g>
            <motion.g
              className="light"
              animate={{ opacity: theme === "light" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <rect
                fill="url(#gradient-light)"
                x="0"
                y="0"
                width="32"
                height="32"
              ></rect>
              <rect
                fill="url(#pattern-light)"
                x="0"
                y="16"
                width="32"
                height="32"
                transform="translate(0, 16)"
              ></rect>
            </motion.g>
          </g>
        </svg>
        <motion.div
          className="absolute w-8 h-8 rounded-full"
          initial={false}
          animate={sunControls}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            background: theme === "dark" ? "#fff" : "#FFD21F",
          }}
        />
      </motion.div>
    </label>
  );
};

export default ThemeToggle;
