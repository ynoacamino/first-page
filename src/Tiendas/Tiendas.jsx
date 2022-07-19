import React from 'react';
import './Tiendas.css';
import Shop from './Shop/Shop';

const Shops = {
  Aqp: [
    {
      name: 'Xiaomi Plaza norte',
      direccion: 'Calle Schell 168, frente al parque Keneddy',
      phone: '+51 932 262 031',
      email: 'informes@xiaomiperu.com',
      horario: 'Lunes a Sábado: 10:00 - 21:00',
      key: '1',
    },
    {
      name: 'Xiaomi Plaza norte',
      direccion: 'Calle Schell 168, frente al parque Keneddy',
      phone: '+51 932 262 031',
      email: 'informes@xiaomiperu.com',
      horario: 'Lunes a Sábado: 10:00 - 21:00',
      key: '2',
    },
  ],
  Lima: [
    {
      name: 'Xiaomi Plaza norte',
      direccion: 'Calle Schell 168, frente al parque Keneddy',
      phone: '+51 932 262 031',
      email: 'informes@xiaomiperu.com',
      horario: 'Lunes a Sábado: 10:00 - 21:00',
      key: '3',
    },
    {
      name: 'Xiaomi Plaza norte',
      direccion: 'Calle Schell 168, frente al parque Keneddy',
      phone: '+51 932 262 031',
      email: 'informes@xiaomiperu.com',
      horario: 'Lunes a Sábado: 10:00 - 21:00',
      key: '4',
    },
    {
      name: 'Xiaomi Plaza norte',
      direccion: 'Calle Schell 168, frente al parque Keneddy',
      phone: '+51 932 262 031',
      email: 'informes@xiaomiperu.com',
      horario: 'Lunes a Sábado: 10:00 - 21:00',
      key: '5',
    },
  ],
  Tacna: [
    {
      name: 'Xiaomi Plaza norte',
      direccion: 'Calle Schell 168, frente al parque Keneddy',
      phone: '+51 932 262 031',
      email: 'informes@xiaomiperu.com',
      horario: 'Lunes a Sábado: 10:00 - 21:00',
      key: '6',
    },
    {
      name: 'Xiaomi Plaza norte',
      direccion: 'Calle Schell 168, frente al parque Keneddy',
      phone: '+51 932 262 031',
      email: 'informes@xiaomiperu.com',
      horario: 'Lunes a Sábado: 10:00 - 21:00',
      key: '7',
    },
  ],
};

function Tiendas() {
  return (
    <div className="Tiendas">
      <h1 className="titleTienda">
        CONOCE NUESTRAS TIENDAS
      </h1>
      <h2 className="namesShops">Arequipa</h2>
      {Shops.Aqp.map((shop, index) => (
        <Shop
          name={shop.name}
          direccion={shop.direccion}
          phone={shop.phone}
          email={shop.email}
          horario={shop.horario}
          key={shop.key}
          llave={shop.key}
          vol={index !== Shops.Aqp.length - 1}
        />
      ))}
      <h2 className="namesShops">Lima</h2>
      {Shops.Lima.map((shop, index) => (
        <Shop
          name={shop.name}
          direccion={shop.direccion}
          phone={shop.phone}
          email={shop.email}
          horario={shop.horario}
          key={shop.key}
          llave={shop.key}
          vol={index !== Shops.Lima.length - 1}
        />
      ))}
      <h2 className="namesShops">Tacna</h2>
      {Shops.Tacna.map((shop, index) => (
        <Shop
          name={shop.name}
          direccion={shop.direccion}
          phone={shop.phone}
          email={shop.email}
          horario={shop.horario}
          key={shop.key}
          llave={shop.key}
          vol={index !== Shops.Tacna.length - 1}
        />
      ))}
    </div>
  );
}

export default Tiendas;
