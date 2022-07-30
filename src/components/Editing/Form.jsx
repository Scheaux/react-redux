import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import changeItems from '../../redux/changeItems';
import { v4 } from 'uuid';
import changeFormName from '../../redux/changeFormName';
import changeFormPrice from '../../redux/changeFormPrice';
import changeFormId from '../../redux/changeFormId';
import editItem from '../../redux/editItem';
import changeFilter from '../../redux/changeFilter';

function Form() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  function resetForm() {
    dispatch(changeFormName(''));
    dispatch(changeFormPrice(''));
    dispatch(changeFormId(''));
  }

  function nameChange(evt) {
    dispatch(changeFormName(evt.target.value));
  }

  function priceChange(evt) {
    dispatch(changeFormPrice(evt.target.value));
  }

  function dispatchHandler() {
    if (form.id === '') {
      dispatch(changeItems({ name: form.name, price: form.price, id: v4() }));
      resetForm();
    } else {
      dispatch(editItem(form));
      resetForm();
    }
  }

  function dispatchFilter(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <>
      <div>
        <input
          type='text'
          onChange={nameChange}
          value={form.name}
          placeholder='Name'
        />
        <input
          type='text'
          onChange={priceChange}
          value={form.price}
          placeholder='Price'
        />
        <button onClick={dispatchHandler}>Save</button>
        {form.id !== '' && <button onClick={resetForm}>Cancel</button>}
      </div>
      <input type='text' onChange={dispatchFilter} placeholder='Filter' />
    </>
  );
}

export default Form;
