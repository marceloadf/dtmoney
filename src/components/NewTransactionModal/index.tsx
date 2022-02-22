import Modal from 'react-modal';
import { Container } from './styles';

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
            className="modal-class"
            overlayClassName="modal-overlay"
        > 
           <Container>
                <h2>Cadastrar Transaão</h2>
                <input placeholder='Título'/>
                <input placeholder='Valor' type='number'/>
                <input placeholder='Categoria'/>

                <button type='submit'>
                    Cadastrar
                </button>
           </Container>
        </Modal>
    );
}