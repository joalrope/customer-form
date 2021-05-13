import React, { useState } from 'react';
import { CustomerForm } from './Modal/CustomerForm';
import { ModalFrm } from './Modal/ModalFrm'

function App() {

  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true)
  }

  const hideModal = () => {
    setOpenModal(false)
  }

  const result = ({ok, data}) => {
    if (ok) {
    alert(`Los datos introducidos son: \n ${JSON.stringify(data, null, 2)}`);
    }
  }
  return (
    <div>
      <button onClick={showModal}>Open Modal</button>
      <ModalFrm WrappedComponent={CustomerForm} width={33} showFrm={openModal} closeFrm={hideModal} result={result}/>
    </div>
  );
}

export default App;
