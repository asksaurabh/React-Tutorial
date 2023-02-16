function Table({ data, config }) {
  const renderedHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className='p-3'>
          {column.render(fruit)}
        </td>
      );
    });

    return (
      <tr className='border-b' key={fruit.name}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeader}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
