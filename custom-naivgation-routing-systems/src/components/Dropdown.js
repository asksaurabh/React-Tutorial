import { useState } from 'react';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  const dropdownOptions = isOpen && <div>{renderedOptions}</div>;

  return (
    <div>
      <div onClick={handleDropdownClick}>Select...</div>
      {dropdownOptions}
    </div>
  );
}

export default Dropdown;
