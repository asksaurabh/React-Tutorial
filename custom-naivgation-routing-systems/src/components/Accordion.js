import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const labelContent = isExpanded && <div>{item.content}</div>;

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {labelContent}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
