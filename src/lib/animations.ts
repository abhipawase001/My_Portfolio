// Reusable animation variants for the portfolio
export const animations = {
  // Fade and slide up
  fadeUp: {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.05,
      },
    }),
  },

  // Scale and fade
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    show: (i: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.08,
      },
    }),
  },

  // Slide in from left
  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    show: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.05,
      },
    }),
  },

  // Slide in from right
  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    show: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.05,
      },
    }),
  },

  // Hover lift effect
  hoverLift: {
    rest: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(79, 70, 229, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },

  // Glow pulse
  glowPulse: {
    hidden: { opacity: 0.5 },
    show: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // Button hover
  buttonHover: {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  },

  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Icon rotation on hover
  iconRotate: {
    rest: { rotate: 0 },
    hover: { rotate: 45, transition: { duration: 0.4 } },
  },

  // Image reveal
  imageReveal: {
    hidden: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
};

// Container for staggered children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Individual item for staggered animations
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
