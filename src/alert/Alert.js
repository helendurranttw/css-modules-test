import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { MessageType, Size } from '../common/propValues';
import styles from './Alert.module.css';

const Alert = ({ children, dismissible, onDismiss, size, special, type }) => {
  const classes = `${styles.alert} ${styles[size] || ''}  ${styles[type] || ''}`;

  return (
    <div
      role="alert"
      className={classNames(classes, {
        [styles.special]: special,
        'p-x-2': size === Size.SMALL,
        'p-y-1': size === Size.SMALL,
      })}
    >
      {dismissible && (
        <button
          type="button"
          className={styles.close}
          data-dismiss="alert"
          onClick={onDismiss}
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: Types.node.isRequired,
  dismissible: Types.bool,
  onDismiss: requiredIf(Types.func, ({ dismissible }) => dismissible),
  size: Types.oneOf([Size.SMALL, Size.LARGE]),
  special: Types.bool,
  type: Types.oneOf([
    MessageType.INFO,
    MessageType.WARNING,
    MessageType.ERROR,
    MessageType.SUCCESS,
  ]),
};

Alert.defaultProps = {
  dismissible: false,
  onDismiss: null,
  size: Size.LARGE,
  special: false,
  type: MessageType.INFO,
};

export default Alert;
