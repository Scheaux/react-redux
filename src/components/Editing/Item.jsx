import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import removeItems from '../../redux/removeItems';
import changeFormId from '../../redux/changeFormId';
import changeFormName from '../../redux/changeFormName';
import changeFormPrice from '../../redux/changeFormPrice';

function Item({ name, price, id }) {
  const dispatch = useDispatch();

  function removeHandler() {
    dispatch(removeItems(id));
  }

  function editHandler() {
    dispatch(changeFormId(id));
    dispatch(changeFormName(name));
    dispatch(changeFormPrice(price));
  }

  return (
    <li>
      {name} {price}
      <button onClick={editHandler}>✏️</button>
      <button onClick={removeHandler}>✖</button>
    </li>
  );
}

export default Item;
