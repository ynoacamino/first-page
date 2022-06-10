import './SecundaryProducts.css';
import React from 'react';
import {
  isMobile, isAndroid,
} from 'react-device-detect';
import ProductLeft from './SecProductLeft/SecProductLeft';
import ProductRigthTop from './SecProductRigthTop/SecProductRigthTop';
import ProductRigthBottom from './SecProductRigthBottom/SecProductRigthBottom';

const products = {
  left: {
    name: 'Redragon Fizz Pro',
    src: 'https://cdn.shopify.com/s/files/1/2695/9506/products/smallkeyboard_1024x1024@2x.png?v=1629454231',
    description: 'El K616-RGB FIZZ PRO te asegurará una respuesta ultrarrápida de 1 ms en modo inalámbrico de 2,4 GHz, 0 latencia y 0 input lag.',
  },
  rigth_top: {
    name: 'Redragon Monitor Ruby',
    src: 'https://cdn.discordapp.com/attachments/772232222220615710/983895809722560592/modal-ruby-desktop_2.png',
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

function SecundaryProducts() {
  return (
    <div className="SECPrimaryProducts">
      <span className="SECtitleProducts">Aprovecha el descuento</span>
      <div className="SECboxProducts">
        <ProductLeft
          product={products.left}
          isAndroid={isAndroid}
          isMobile={isMobile}
        />
        <div className="SECBoxRigth">
          <ProductRigthTop
            isAndroid={isAndroid}
            isMobile={isMobile}
            product={products.rigth_top}
          />
          <ProductRigthBottom
            isAndroid={isAndroid}
            isMobile={isMobile}
            product={products.rigth_bottom}
          />
        </div>
      </div>
      <span className="SECviewMoreProducts">
        Descubre más productos
        {' '}
        <a href="/" className="SEClinkViewMore underline">Aquí</a>
      </span>
    </div>
  );
}

export default SecundaryProducts;
