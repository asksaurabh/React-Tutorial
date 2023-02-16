import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    console.log('Open Modal');
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {isModalOpen && <Modal />}
    </div>
  );
}

export default ModalPage;
