import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import nexHireLogo from "../assets/logo/nexhire-logo-dark.png";

function LogoIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const displayTime = prefersReducedMotion ? 500 : 2200;

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, displayTime);

    return () => {
      window.clearTimeout(timer);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="logo-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.55,
          }}
        >
          <motion.div
            className="logo-intro-content"
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.92,
                    y: 14,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              className="logo-intro-image"
              src={nexHireLogo}
              alt="NexHire AI"
            />

            {!prefersReducedMotion && (
              <motion.div
                className="logo-intro-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.45,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            )}

            <motion.p
              className="logo-intro-label"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0 }
              }
              animate={{ opacity: 1 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.8,
                duration: 0.4,
              }}
            >
              Enterprise recruitment intelligence
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LogoIntro;

