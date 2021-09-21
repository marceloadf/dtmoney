import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

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
      <Header openNewTransactionalModal={openNewTransactionalModal}/>
      <Dashboard />
      <NewTransactionModal closeModal={closeModal} modalIsOpen={modalIsOpen}/>
      <GlobalStyle />
    </>
  )
}