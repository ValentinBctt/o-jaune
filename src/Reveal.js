import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { useState } from 'react';

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -70 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealNavBar = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 200 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealShort = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.1}}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealTop = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealBot = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}

      >
        {children}
      </motion.div>
    </div>
  );
};


export const RevealArrow = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 1.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};


export const RevealRight = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
  const maskControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      maskControls.start({ x: '0%' });
    }
  }, [isInView, mainControls, maskControls]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: width }}>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.7, delay: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: '100%' }}
        animate={maskControls}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to left, rgba(255, 255, 255, 0) 50%, var(--green) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export const RevealIcon = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.7, delay: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};


export const RevealImages = ({ images, width = "100%", columns = 3 }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.3 },
      }));
    }
  }, [isInView, controls]);

  const columnWrapper = Array.from({ length: columns }, () => []);

  images.forEach((src, index) => {
    columnWrapper[index % columns].push(
      <motion.img
        key={index}
        src={src}
        custom={index}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className='selected-soiree-photos img'
      />
    );
  });

  return (
    <div ref={inViewRef} className='selected-soiree-photos' style={{ display: 'flex', width: width }}>
      {columnWrapper.map((column, index) => (
        <div key={index} style={{ flex: 1 }}>
          {column}
        </div>
      ))}
    </div>
  );
};
