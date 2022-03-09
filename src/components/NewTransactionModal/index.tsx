import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeButtonImg from '../../assets/close.svg';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcomes.svg';

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
                <img src={closeButtonImg} alt="Fechar Modal" />
            </button>

           <Container>
                <h2>Cadastrar Transaão</h2>
                <input placeholder='Título'/>
                <input placeholder='Valor' type='number'/>

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button> 
                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button> 
                </TransactionTypeContainer>

                <input placeholder='Categoria'/>

                <button type='submit'>
                    Cadastrar
                </button>
           </Container>
        </Modal>
    );
}