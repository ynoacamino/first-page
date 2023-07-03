import './SecProductLeft.css';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function ProductLeft({ product, isAndroid, isMobile }) {
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
    <a href="/" className={`SECProductLeft SECboxProduct ${(isMobile || isAndroid) && 'SECisMobileProductLeft'}`}>
      <motion.img
        onHoverStart={() => startAnimation()}
        onHoverEnd={() => endAnimation()}
        className="SECimgProductLeft "
        src={product.src}
        alt={product.name}
        animate={imgAnimationHover}
        variants={variantes}
      />

      { (isMobile || isAndroid) && (
        <div className="SECaniamtionBtnLeft">
          <span className="SECdescriptionProductLeft">
            {product.description}
          </span>
          <button className="SECbtnProduct pointer" type="button">
            Comprar
          </button>
        </div>
      )}
      { !isAndroid && (
        <motion.div
          className="SECaniamtionBtnLeft"
          onHoverStart={() => startAnimation()}
          onHoverEnd={() => endAnimation()}
        >
          <span className="SECnameProductLeft">{product.name}</span>
          <motion.span
            className="SECdescriptionProductLeft"
            animate={btnAnimationHidden}
            variants={variantes}
          >
            {product.description}
          </motion.span>
          <motion.button
            type="button"
            className="SECbtnProduct pointer"
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
