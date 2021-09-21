import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openNewTransactionalModal() {
      setModalIsOpen(true);
  }

  function closeModal() {
      setModalIsOpen(false);
  }
  return (
    <>
      <Header
        openNewTransactionalModal={openNewTransactionalModal}
      />
      <Dashboard />
      <GlobalStyle />
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Cadastrar Transação"
      >
          <h2>Cadastrar Transaão</h2>
      </Modal>
    </>
  )
}