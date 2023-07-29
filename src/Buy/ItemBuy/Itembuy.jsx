/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import eliminar from '../../assets/eliminar.png';
import { REMOVE_ITEM } from '../../Operations/Mutation';
import { useShop } from '../../context/ShopContext';

function ItemBuy({
  name, cost, id, src,
}) {
  const { reload } = useShop();
  const [amount, setAmount] = useState(1);
  const [remove, { data }] = useMutation(REMOVE_ITEM);

  const deleteItem = () => {
    remove({
      variables: {
        id,
      },
    });
  };

  useEffect(() => {
    reload();
  }, [data]);

  return (
    <div className="ItemBuy">
      <img className="imgBuy" alt={name} src={src} />
      <div className="itemInfo">
        <span style={{ marginBottom: 20 }}>
          {name}
        </span>
        <span style={{ fontWeight: 'bold' }}>
          S/
          {' '}
          {cost}
        </span>
      </div>
      <div className="itemPrice">
        <input className="inputItemPrice" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" id="amount" />
        <button className="clearBtn btnRemoveItem pointer" type="button" onClick={deleteItem}>
          <img src={eliminar} alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default ItemBuy;
