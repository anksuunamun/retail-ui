import React from 'react';
import ReactDOM from 'react-dom';
import reactTools from 'react-tools';

import components from '../components';

import styles from './CodeRunner.less';

function run(src, mountNode) {
  try {
    evalCode(src, mountNode);
  } catch (ex) {
    console.error(ex);

    ReactDOM.render(<div>{ex.toString()}</div>, mountNode);
  }
}

const vars = {
  React,
  ReactDOM,
};
for (const component of components) {
  vars[component.name] = component.component;
}

function evalCode(_src, mountNode) {
  const localVars = {
    ...vars,
    mountNode,
  };
  const names = Object.keys(localVars);
  const values = names.map(name => localVars[name]);

  const code = reactTools.transform(_src, {
    harmony: true,
  });


  new Function(...names, code)(...values); // eslint-disable-line no-new-func
}

var CodeRunner = React.createClass({
  render() {
    return <div className={styles.root} />;
  },

  componentDidMount() {
    run(this.props.src, ReactDOM.findDOMNode(this));
  },

  componentWillReceiveProps(props) {
    run(props.src, ReactDOM.findDOMNode(this));
  },

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this));
  },
});

export default CodeRunner;
