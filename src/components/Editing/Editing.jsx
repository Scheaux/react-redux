import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../Filter/Filter';
import Form from './Form';
import Items from './Items';

function Editing() {
  const { items } = useSelector((state) => state.items);

  return (
    <div className='wrap'>
      <Form />
      <Filter items={items} Component={Items} />
    </div>
  );
}

export default Editing;
