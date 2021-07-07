import { handleActions } from 'redux-actions';
import { addNewRow, onEditIssue, delRow, resetStore, filterBy } from './action';
import { nanoid } from 'nanoid';

const DEFAULT_STATE = {
  savingStatus: false,
  workLogItems: [],
  filterBy: {}
};

const handlers = {
  [addNewRow]: state => {
    const newRow = {
      id: nanoid(),
      issue: '',
      timeSpent: new Date().toUTCString().split('T')[0],
      comment: ''
    };
    const newWorkLog = state.workLogItems?.slice() || [];
    newWorkLog.push(newRow);
    return {
      ...state,
      workLogItems: newWorkLog
    };
  },
  [onEditIssue]: (state, action) => {
    const { id, value, name } = action.payload;
    console.log(id, value, state.workLogItems);
    const updateWorkLog = state.workLogItems.map(row => {
      if (row.id === id) {
        if (name === 'issue') {
          row.issue = value;
        } else if (name === 'timeSpent') {
          row.timeSpent = value;
        } else if (name === 'comment') {
          row.comment = value;
        }
      }
      return row;
    });
    console.log(updateWorkLog);
    return {
      ...state,
      workLogItems: updateWorkLog
    };
  },
  [delRow]: (state, action) => {
    const { id } = action.payload;
    const updateWorkLog = state.workLogItems.filter(row => row.id !== id);
    console.log('delRow updateWorkLog ', updateWorkLog);
    return {
      ...state,
      workLogItems: updateWorkLog
    };
  },
  [filterBy]: (state, action) => {
    const { value, name } = action.payload;
    return {
      ...state,
      filterBy: { value, name }
    };
  },
  [resetStore]: () => {
    return {
      ...DEFAULT_STATE
    };
  }
};

export default handleActions(handlers, DEFAULT_STATE);
