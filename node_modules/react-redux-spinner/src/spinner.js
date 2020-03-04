import React from 'react';
import NProgress from 'nprogress';

class Spinner extends React.Component {

  componentWillMount() {
    const { store } = this.context;
    const { config } = this.props;
    this.previousPendingTasks = store.getState().pendingTasks;
    NProgress.configure(config);
    this.disposeStoreSubscription = store.subscribe(() => {
      const diff = store.getState().pendingTasks - this.previousPendingTasks;
      if (diff > 0) {
        NProgress.start();
      }
      if (diff < 0) {
        NProgress.inc();
      }
      if (store.getState().pendingTasks === 0) {
        NProgress.done();
      }
      this.previousPendingTasks = store.getState().pendingTasks;
    });
  }

  componentWillUnmount() {
    this.disposeStoreSubscription();
  }

  render() {
    return false;
  }
}

Spinner.contextTypes = {
  store: React.PropTypes.shape({
    getState: React.PropTypes.func.isRequired
  })
};

Spinner.propTypes = {
  config: React.PropTypes.object
};


Spinner.defaultProps = {
  config: {}
};

export default Spinner;
