import React from 'react';
import { useDispatch } from 'react-redux';

export default props => {
  const dispatch = useDispatch();
  const onFilterIssue = e => {
    dispatch({
      type: 'FILTER_BY',
      payload: {
        value: e.target.value,
        name: props.name
      }
    });
  };
  return (
    <>
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={onFilterIssue}
      />
    </>
  );
};
