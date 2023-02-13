import PropTypes from 'prop-types';

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
  return <button>{children}</button>;
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
