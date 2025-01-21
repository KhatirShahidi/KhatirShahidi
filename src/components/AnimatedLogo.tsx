import { ReactElement, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from '../styles/components/AnimatedLogo.module.scss';

function AnimatedLogo(): ReactElement {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const [currentLogoState, setCurrentLogoState] = useState('expanded');

  const wrapperAnim = useAnimation();
  const solidBackgroundAnim = useAnimation();
  const gradientBackgroundAnim = useAnimation();
  const initialsAnims = {
    k: useAnimation(),
    s: useAnimation(),
  };
  const fullNameAnim = useAnimation();

  const controls = {
    solidBackground: async () => {
      await solidBackgroundAnim.start({
        opacity: [1, 1, 1, 1],
        scale: [0, 0.9, 0.9, 1],
        rotate: [0, 45, 270, 270, 0],
        borderRadius: ['10%', '50%', '50%', '8px'],
        transition: { duration: 2 },
      });
    },

    gradientBackground: async () => {
      await gradientBackgroundAnim.start({
        opacity: [0.2, 1, 1, 1],
        scale: [1, 1.5, 1, 1, 1],
        rotate: [0, 10, 270, 270, 0],
        borderRadius: ['10%', '50%', '50%', '8px'],
        transition: { duration: 2 },
      });
    },

    fullName: async () => {
      await fullNameAnim.start({
        opacity: [0, 1],
        transition: { duration: 0.8, delay: 0.5 },
      });
    },

    initialsK: async () => {
      await initialsAnims.k.start({
        transform: 'translateX(-22px)',
        transition: { duration: 1 },
      });

      await initialsAnims.k.start({
        opacity: [1, 0],
        transition: { duration: 1, delay: 0.5 },
      });
    },

    initialsS: async () => {
      await initialsAnims.s.start({
        transform: 'translateX(-5px)',
        transition: { duration: 1 },
      });

      await initialsAnims.s.start({
        opacity: [1, 0],
        transition: { duration: 1, delay: 0.5 },
      });
    },

    wrapper: async () => {
      await wrapperAnim.start({
        width: '200px',
        transition: { duration: 0.6 },
      });
    },

    start: async () => {
      controls.gradientBackground();
      controls.solidBackground().then(() => {
        controls.initialsK();
        controls.initialsS();
        controls
          .wrapper()
          .then(() => {
            controls.fullName();
          })
          .then(() => {
            setIsAnimationRunning(false);
          });
      });
    },

    reset: async () => {
      wrapperAnim.start({
        width: '86px',
        transition: { duration: 1 },
      });

      fullNameAnim.start({
        opacity: 0,
        transition: { duration: 0.5 },
      });

      initialsAnims.s.start({
        opacity: 1,
        transition: { duration: 0.2 },
      });
      initialsAnims.s.start({
        transform: 'translateX(0px)',
        transition: { duration: 1.2 },
      });

      initialsAnims.k.start({
        opacity: 1,
        transition: { duration: 0.2 },
      });
      initialsAnims.k
        .start({
          transform: 'translateX(0px)',
          transition: { duration: 1.2 },
        })
        .then(() => {
          setIsAnimationRunning(false);
        });
    },
  };

  useEffect(() => {
    controls.start();
    setIsAnimationRunning(true);
  }, []);

  return (
    <motion.div
      onClick={() => {
        switch (currentLogoState) {
          case 'expanded':
            if (isAnimationRunning) return;

            controls.reset();
            setIsAnimationRunning(true);
            return setCurrentLogoState('retracted');
          case 'retracted':
            if (isAnimationRunning) return;

            controls.start();
            setIsAnimationRunning(true);
            return setCurrentLogoState('expanded');

          default:
            break;
        }
      }}
      animate={wrapperAnim}
      className={styles.logoContainer}
    >
      <h1 className={styles.nameInitials}>
        <motion.span animate={initialsAnims.k}>k</motion.span>
        <motion.span animate={initialsAnims.s}>s</motion.span>
      </h1>
      <motion.h1 animate={fullNameAnim} className={styles.nameFull}>
        khatir shahidi
      </motion.h1>

      <motion.div
        animate={solidBackgroundAnim}
        className={styles.solidBackground}
      />

      <motion.div
        animate={gradientBackgroundAnim}
        className={styles.gradientBackground}
      />
    </motion.div>
  );
}

export default AnimatedLogo;
