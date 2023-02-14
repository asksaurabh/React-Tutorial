import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'l2kj5sas',
      label: 'Can I use React in a project?',
      content: 'You can use React on any project you want.',
    },
    {
      id: 'l2kj5hsj',
      label: 'Can I use JavaScript in a project?',
      content: 'You can use JavaScript on any project you want.',
    },
    {
      id: 'l2kj5hsk',
      label: 'Can I use Python in a project?',
      content: 'You can use Python on any project you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
