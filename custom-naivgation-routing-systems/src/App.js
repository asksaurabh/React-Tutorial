import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      label: 'Can I use React in a project?',
      content: 'You can use React on any project you want.',
    },
    {
      label: 'Can I use JavaScript in a project?',
      content: 'You can use JavaScript on any project you want.',
    },
    {
      label: 'Can I use Python in a project?',
      content: 'You can use Python on any project you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
