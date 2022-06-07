import './PrimaryProducts.css';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const products = {
  left: {
    name: 'Redragon Fizz Pro',
    src: 'https://cdn.shopify.com/s/files/1/2695/9506/products/smallkeyboard_1024x1024@2x.png?v=1629454231',
    description: 'El K616-RGB FIZZ PRO te asegurará una respuesta ultrarrápida de 1 ms en modo inalámbrico de 2,4 GHz, 0 latencia y 0 input lag.',
  },
  rigth_top: {
    name: 'Redragon Monitor Ruby',
    src: 'https://redragon.es/content/uploads/2022/03/modal-ruby-desktop.png',
    description: 'El Ruby está equipado con un panel VA que proporciona una pérdida mínima de luz y un contraste superior con colores oscuros más fuertes y definidos, lo que te brindará la respuesta que necesitas.',
  },
  rigth_bottom: {
    name: 'Redragon Zeus 2',
    src: 'https://dojiw2m9tvv09.cloudfront.net/23332/product/X_h510-35542.png?80',
    description: 'Los Zeus son auriculares premium diseñados para disfrutar al 100% del magnífico mundo sonoro de los mejores juegos.',
  },
  bottom: {
    name: 'Redragon Esmerald',
    src: 'https://redragon.es/content/uploads/2021/06/EMERALD-1.png',
    description: 'El Emerald es un monitor gamer de 27" con tecnología IPS, lo que proporciona un ángulo de visión muy amplio, de 178º, y una mejoría sustancial en el color. ',
  },
};

function PrimaryProducts() {
  const btnAnimationHidden = useAnimation();
  const btnAnimationShow = useAnimation();

  const startAnimation = () => {
    console.log('start hover');
    btnAnimationHidden.start('hidden');
    btnAnimationShow.start('show');
  };

  const endAnimation = () => {
    btnAnimationHidden.start('hiddenEnd');
    btnAnimationShow.start('showEnd');
  };

  const variantes = {
    hidden: {
      y: -70,
      opacity: 0,
    },
    hiddenEnd: {
      y: 0,
      opacity: 1,
    },
    show: {
      y: -70,
      opacity: 1,
    },
    showEnd: {
      y: 0,
      opacity: 0,
    },
  };

  return (
    <div className="PrimaryProducts">
      <a href="/" className="ProductLeft boxProduct">
        <img className="imgProductLeft hoverProduct" src={products.left.src} alt={products.left.name} />
        <span className="nameProductLeft">{products.left.name}</span>
        <motion.div
          onHoverStart={() => startAnimation()}
          className="aniamtionBtn"
          onHoverEnd={() => endAnimation()}
        >
          <motion.span
            className="descriptionProductLeft"
            animate={btnAnimationHidden}
            variants={variantes}
          >
            {products.left.description}
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
      </a>
    </div>
  );
}

export default PrimaryProducts;
