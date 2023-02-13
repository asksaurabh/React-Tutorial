/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = classNames('px-3 py-1.5 border', {
    'border-blue-600 bg-blue-500 text-white': primary,
    'border-gray-600 bg-gray-500 text-white': secondary,
    'border-green-600 bg-green-500 text-white': success,
    'border-yellow-600 bg-yellow-500 text-white': warning,
    'border-red-600 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-500': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  });

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const onlyOneAllowed =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (onlyOneAllowed > 1) {
      throw new Error(
        'Only one of primary, secondary, success, warning, danger allowed'
      );
    }
  },
};

export default Button;
