import Modal from 'react-modal';
import { Container, TransactionButton, TransactionTypeContainer } from './styles';
import closeButtonImg from '../../assets/close.svg';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcomes.svg';
import { useState } from 'react';

interface NewTransactionModalProps{
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function NewTransactionModal( {modalIsOpen, closeModal} : NewTransactionModalProps) {

    const [transactionType, setTransactionType] = useState('deposit');

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

                    <TransactionButton 
                        type="button" 
                        onClick={() => setTransactionType("deposit")}
                        isActive={transactionType === "deposit" ? true : false}
                        activeColor="green"
                    >  
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TransactionButton> 

                    <TransactionButton 
                        type="button" 
                        isActive={transactionType === "withdraw" ? true : false}
                        onClick={() => setTransactionType("withdraw")}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TransactionButton> 

                </TransactionTypeContainer>

                <input placeholder='Categoria'/>

                <button type='submit'>
                    Cadastrar
                </button>

           </Container>
        </Modal>
    );
}