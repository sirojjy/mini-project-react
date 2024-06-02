import React, { useState } from 'react';

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">{children}</div>
          <button className="modal-close" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
