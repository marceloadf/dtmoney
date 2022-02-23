import Modal from 'react-modal';
import { Container } from './styles';
import closeButton from '../../assets/close.svg';

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
            <button 
                type="button" 
                onClick={closeModal} 
                className="react-modal-close"
            >
                <img src={closeButton} alt="Fechar Modal" />
            </button>

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