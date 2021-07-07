import React from 'react';
import { useDispatch } from 'react-redux';
import Filter from './Filter';

export default () => {
  const dispatch = useDispatch();
  return (
    <>
      <Filter name="filterByIssue" placeholder="Filter by issue" />
      <button onClick={() => dispatch({ type: 'ADD_NEW_ROW' })}>Add New</button>
    </>
  );
};
