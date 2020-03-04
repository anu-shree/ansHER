import './nprogress.css';
import { pendingTasksReducer, actionKey, begin, end } from './reducer.js';
import Spinner from './spinner.js';

export {
  pendingTasksReducer,
  Spinner,
  actionKey as pendingTask,
  begin,
  end
};
