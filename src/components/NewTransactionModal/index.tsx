import Modal from 'react-modal';
import { Container, TransactionButton, TransactionTypeContainer } from './styles';
import closeButtonImg from '../../assets/close.svg';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcomes.svg';
import { useState, FormEvent } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function NewTransactionModal( {modalIsOpen, closeModal} : NewTransactionModalProps) {
    const [transactionType, setTransactionType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category
        };
        console.log(data);
        api.post("/transactions", data);
    };

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

           <Container onSubmit={handleFormSubmit}>

                <h2>Cadastrar Transaão</h2>

                <input 
                    placeholder='Título' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input 
                    placeholder='Valor' 
                    type='number' 
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />

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

                <input 
                    placeholder='Categoria' 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <button type='submit'>
                    Cadastrar
                </button>

           </Container>
           
        </Modal>
    );
}