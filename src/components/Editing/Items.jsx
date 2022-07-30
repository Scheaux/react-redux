import React from 'react';
import Item from './Item';

function Items({ items }) {
  return (
    <ul>
      {items.map((x) => {
        return <Item key={x.id} name={x.name} price={x.price} id={x.id} />;
      })}
    </ul>
  );
}

export default Items;
