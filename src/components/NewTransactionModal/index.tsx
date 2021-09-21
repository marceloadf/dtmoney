import Modal from 'react-modal';

interface NewTransactionModalProps{
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function NewTransactionModal( {modalIsOpen, closeModal} : NewTransactionModalProps) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Cadastrar Transação"
        >
            <h2>Cadastrar Transaão</h2>
        </Modal>
    );
}