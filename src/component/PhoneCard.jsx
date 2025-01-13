import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  width: 200px;
  background-color: ${(props) => props.color};
  color: white;
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: white;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const PhoneCard = ({ phone, onDelete }) => {
  return (
    <Card color={phone.color}>
      <StyledImage src={phone.image} alt="Phone Image" />
      <h2>ID: {phone.id}</h2>
      <p>MODEL: {phone.model}</p>
      <p>PRICE: {phone.price} COM</p>
      <DeleteButton onClick={onDelete}>delete</DeleteButton>
    </Card>
  );
};

export default PhoneCard;
