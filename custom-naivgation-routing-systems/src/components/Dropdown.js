import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  const dropdownText = value ? value.label : 'Select...';
  const dropdownOptions = isOpen && <div>{renderedOptions}</div>;

  return (
    <div>
      <div onClick={handleDropdownClick}>{dropdownText}</div>
      {dropdownOptions}
    </div>
  );
}

export default Dropdown;
