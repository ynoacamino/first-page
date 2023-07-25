import './ProductLeft.css';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function ProductLeft({
  image, text, isAndroid, isMobile,
}) {
  const btnAnimationHidden = useAnimation();
  const btnAnimationShow = useAnimation();
  const imgAnimationHover = useAnimation();

  const startAnimation = () => {
    btnAnimationHidden.start('hidden');
    btnAnimationShow.start('show');
    imgAnimationHover.start('hoverStart');
  };

  const endAnimation = () => {
    btnAnimationHidden.start('hiddenEnd');
    btnAnimationShow.start('showEnd');
    imgAnimationHover.start('hoverEnd');
  };

  const variantes = {
    hidden: {
      y: -70,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.1,
      },
    },
    hiddenEnd: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.1,
      },
    },
    show: {
      y: -70,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.1,
      },
    },
    showEnd: {
      y: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.1,
      },
    },
    hoverStart: {
      scale: 1.1,
    },
    hoverEnd: {
      scale: 1,

    },
  };
  return (
    <a href="/" className={`ProductLeft boxProduct ${(isMobile || isAndroid) && 'isMobileProductLeft'}`}>
      <motion.img
        onHoverStart={() => startAnimation()}
        onHoverEnd={() => endAnimation()}
        className="imgProductLeft "
        src={image.src}
        alt={image.alt}
        animate={imgAnimationHover}
        variants={variantes}
      />

      { (isMobile || isAndroid) && (
        <div className="aniamtionBtnLeft">
          <span className="nameProductLeft">{text.name}</span>
          <span className="descriptionProductLeft">
            {text.description}
          </span>
          <button className="pointer btnProduct" type="button">
            Comprar
          </button>
        </div>
      )}
      { !isAndroid && (
        <motion.div
          className="aniamtionBtnLeft"
          onHoverStart={() => startAnimation()}
          onHoverEnd={() => endAnimation()}
        >
          <span className="nameProductLeft">{text.name}</span>
          <motion.span
            className="descriptionProductLeft"
            animate={btnAnimationHidden}
            variants={variantes}
          >
            {text.description}
          </motion.span>
          <motion.button
            type="button"
            className="pointer btnProduct"
            initial={{ opacity: 0 }}
            animate={btnAnimationShow}
            variants={variantes}
          >
            Comprar
          </motion.button>
        </motion.div>
      )}
    </a>
  );
}

export default ProductLeft;
