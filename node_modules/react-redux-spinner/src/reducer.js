const actionKey = '@@__rrs_pendingTask__@@';
const begin = '@@__rrs_begin__@@';
const end = '@__rrs_end__@@';

const reducer = (state = 0, action) => {
  if (action[actionKey] === begin) {
    return state + 1;
  }
  if (action[actionKey] === end) {
    return state - 1;
  }
  return state;
};

export { actionKey, begin, end, reducer as pendingTasksReducer };
