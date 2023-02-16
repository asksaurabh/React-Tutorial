import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        This site use cookies. Please accept to personalize for your
        suggestions.
      </p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum,
        lorem quis sollicitudin dignissim, nisi massa pulvinar magna, et
        consequat dui mi ac arcu. Duis et elementum nisi. Aenean pretium
        sollicitudin arcu et tristique. Ut eu pellentesque mauris. Aenean
        condimentum lacinia diam, in elementum magna lacinia non. Donec accumsan
        pulvinar dignissim. Vestibulum sed est odio. Curabitur vitae facilisis
        dolor, at mollis ipsum. Praesent vel sapien maximus, eleifend lorem ut,
        eleifend nunc. In tincidunt non lacus et consequat. Etiam ac metus
        finibus, tristique velit ut, elementum nulla. Quisque quis est leo.
        Aenean eleifend, dolor quis auctor pulvinar, nisl nulla dapibus mi, eu
        euismod diam lectus sit amet libero.
      </p>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {isModalOpen && modal}
    </div>
  );
}

export default ModalPage;
