import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneCard from './component/PhoneCard';
import Modal from './component/UI/Modal';




const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const App = () => {
  const [phones, setPhones] = useState([
    { id: 1, model: 'IPHONE-x', price: 40000, color: 'pink', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ksN0z34Tvq1_n7EKPwqcqymK7rLEWdIgaA&s' },
    { id: 2, model: 'IPHONE-12', price: 60000, color: 'blue', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfz6ZEuPkmRSz4nkF-LwYEbZHOH6fBP2l5Q&s' },
    { id: 3, model: 'IPHONE-14', price: 80000, color: 'red', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYlJ4vxIwlTj3NmcYl_abWdpgenJI6s3VAA&s' },

    <h1>heloo</h1>
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState(null);

  const handleDeleteClick = (phone) => {
    setSelectedPhone(phone);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    setPhones(phones.filter((phone) => phone.id !== selectedPhone.id));
    setModalVisible(false);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  return (
    <AppContainer>
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} onDelete={() => handleDeleteClick(phone)} />
      ))}
      {modalVisible && (
        <Modal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </AppContainer>
  );
};

export default App;






// project=>github:

// 1: git init
// 2:git add .
// 3:git commit -m "changes"
// 4:"your respository addrees"
// 5:git push origin master
