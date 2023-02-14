import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'l2kj5sas',
      label: 'Can I use React in a project?',
      content:
        'You can use React on any project you want. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, possimus? Voluptatem itaque, possimus a repudiandae doloremque quia facilis veniam consequatur mollitia quidem.',
    },
    {
      id: 'l2kj5hsj',
      label: 'Can I use JavaScript in a project?',
      content:
        'You can use JavaScript on any project you want. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, possimus? Voluptatem itaque, possimus a repudiandae doloremque quia facilis veniam consequatur mollitia quidem.',
    },
    {
      id: 'l2kj5hsk',
      label: 'Can I use Python in a project?',
      content:
        'You can use Python on any project you want. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, possimus? Voluptatem itaque, possimus a repudiandae doloremque quia facilis veniam consequatur mollitia quidem.',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
