import React from 'react';
import { useSelector } from 'react-redux';

function Filter(props) {
  const { Component, items } = props;
  const { value } = useSelector((state) => state.filter);

  const filteredItems = items.filter((x) => {
    return (
      x.name.toLowerCase().includes(value.toLowerCase()) ||
      x.price.toLowerCase().includes(value)
    );
  });

  return (
    <div>
      <Component items={filteredItems} />
    </div>
  );
}

export default Filter;
