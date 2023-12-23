import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/Global/globalSlice';
import { showSelect } from 'redux/TransactionCategories/categoriesSlice';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
        dispatch(showSelect(false));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  return createPortal(
    <ModalOverlay
      onClick={e => {
        if (e.target === e.currentTarget) {
          dispatch(showSelect(false));
          dispatch(closeModal());
        }
      }}
    >
      {children}
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
