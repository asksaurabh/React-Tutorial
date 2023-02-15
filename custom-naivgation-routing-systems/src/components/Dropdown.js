import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import Panel from './Panel';

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
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const dropdownText = value ? value.label : 'Select...';
  const dropdownIcon = isOpen ? (
    <GoChevronUp className='text-lg' />
  ) : (
    <GoChevronDown className='text-lg' />
  );
  const dropdownOptions = isOpen && (
    <Panel className='absolute top-full'>{renderedOptions}</Panel>
  );

  return (
    <div className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleDropdownClick}
      >
        {dropdownText}
        {dropdownIcon}
      </Panel>
      {dropdownOptions}
    </div>
  );
}

export default Dropdown;
