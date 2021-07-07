import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const workLogs = useSelector(state => state?.worklogs?.workLogItems || []);
  const filterBy = useSelector(state => state?.worklogs?.filterBy || {});
  const dispatch = useDispatch();
  const handleOnChange = e => {
    dispatch({
      type: 'EDIT_ACTION',
      payload: {
        id: e.target.id,
        name: e.target.name,
        value: e.target.value
      }
    });
  };
  const delRow = id => {
    dispatch({
      type: 'DELETE_ROW',
      payload: { id }
    });
  };
  return (
    <>
      <p>worklog here</p>
      {workLogs.length > 0 &&
        workLogs
          .map(row => {
            console.log('row', row.issue);
            return (
              <div style={{ display: 'flex' }}>
                <input
                  key={row.id}
                  id={row.id}
                  list={'datalist' + row.id}
                  name="issue"
                  value={row.issue}
                  onChange={handleOnChange}
                />
                <datalist id={'datalist' + row.id}>
                  <option>irfan</option>
                </datalist>
                <input
                  key={row.id}
                  id={row.id}
                  name="timeSpent"
                  type="date"
                  value={row.timeSpent}
                  onChange={handleOnChange}
                />
                <input
                  key={row.id}
                  id={row.id}
                  name="comment"
                  value={row.comment}
                  onChange={handleOnChange}
                />
                <button onClick={() => delRow(row.id)}>-</button>
              </div>
            );
          })
          .filter(row => {
            if (filterBy.length > 0) {
              if (filterBy.name === 'filterByIssue') {
                return row.issue !== filterBy.value;
              }
            }
            return row;
          })}
    </>
  );
};

// id(pin):0.8973947179250057
// issue(pin):""
// timeSpent(pin):""
// comments(pin):""
