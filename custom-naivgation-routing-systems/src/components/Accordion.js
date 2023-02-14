import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const labelContent = isExpanded && <div>{item.content}</div>;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {labelContent}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
