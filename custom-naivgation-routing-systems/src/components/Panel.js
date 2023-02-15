import { twMerge } from 'tailwind-merge';

function Panel({ children, ...rest }) {
  const finalClassName = twMerge(
    'border rounded p-3 shadow bg-white w-full',
    rest.className
  );

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}

export default Panel;
