import '../SecProductRigth.css';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function ProductRigthBottom({ isMobile, isAndroid, product }) {
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
      y: -60,
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
    <a href="/" className="SECProductRigthTop SECboxProduct">
      <motion.div
        className="SECtextBoxRigthTop"
        onHoverStart={() => startAnimation()}
        onHoverEnd={() => endAnimation()}
      >
        <span className="SECnameProductRigthTop">
          {product.name}
        </span>
        { (isMobile || isAndroid) && (
          <div className="SECaniamtionBtnRigthTop SECMOBILEaniamtionBtnRigthTop">
            <span
              className="SECdescriptionProductRigthTop"
            >
              {product.description}
            </span>
            <button
              className="SECpointer SECbtnProduct"
              type="button"
            >
              Comprar
            </button>
          </div>
        )}
        { !isAndroid && (
          <div className="SECaniamtionBtnRigthTop">
            <motion.span
              className="SECdescriptionProductRigthTop "
              animate={btnAnimationHidden}
              variants={variantes}
            >
              {product.description}
            </motion.span>
            <motion.button
              className="SECpointer SECbtnProduct"
              type="button"
              initial={{ opacity: 0 }}
              animate={btnAnimationShow}
              variants={variantes}
            >
              Comprar
            </motion.button>
          </div>
        )}
      </motion.div>
      <motion.img
        onHoverStart={() => startAnimation()}
        onHoverEnd={() => endAnimation()}
        className="SECimgProductRigthTop"
        src={product.src}
        alt={product.name}
        animate={imgAnimationHover}
        variants={variantes}
      />
    </a>
  );
}

export default ProductRigthBottom;
