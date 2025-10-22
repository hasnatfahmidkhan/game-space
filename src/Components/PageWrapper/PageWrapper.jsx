import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router";
const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    // <AnimatePresence mode="wait">
    <motion.div
      key={location.pathname}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
    // </AnimatePresence>
  );
};

export default PageWrapper;
