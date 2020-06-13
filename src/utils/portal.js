import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

const portalRoot = document.getElementById('portal');
const ele = document.getElementById('root');

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount() {
    ele.style.overflow = 'hidden';
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    ele.removeAttribute('style');
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDom.createPortal(children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

Portal.defaultProps = {
  children: <></>,
};
