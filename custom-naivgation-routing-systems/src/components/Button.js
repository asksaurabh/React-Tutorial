/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    primary && 'border-blue-500 bg-blue-500 text-white',
    secondary && 'border-gray-900 bg-gray-900 text-white',
    success && 'border-green-500 bg-green-500 text-white',
    warning && 'border-yellow-400 bg-yellow-400 text-white',
    danger && 'border-red-500 bg-red-500 text-white',
    rounded && 'rounded-full',
    outline && 'bg-white',
    outline && primary && 'text-blue-500',
    outline && secondary && 'text-gray-900',
    outline && success && 'text-green-500',
    outline && warning && 'text-yellow-400',
    outline && danger && 'text-red-500'
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
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
