import { motion } from "motion/react";
import logo from "../../assets/logo.png";
const Preloader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0A0F1F]">
      <motion.div
        animate={{
          scale: 1.6,
        }}
        transition={{
          duration: 0.8,
          delay: 3,
          ease: "easeIn",
        }}
      >
        <motion.img
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          exit={{
            scale: 2,
          }}
          src={logo}
          className="w-40 h-40 object-cover"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Preloader;
