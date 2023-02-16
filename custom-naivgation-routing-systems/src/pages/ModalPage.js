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
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {isModalOpen && modal}
    </div>
  );
}

export default ModalPage;
