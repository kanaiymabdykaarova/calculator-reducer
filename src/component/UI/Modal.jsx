import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 10px;
`;


const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Modal = ({ onConfirm, onCancel }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <p>Are you sure?</p>
        <Button onClick={onConfirm}>OK</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
