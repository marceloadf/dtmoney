import Modal from 'react-modal';
import { Container, TransactionButton, TransactionTypeContainer } from './styles';
import closeButtonImg from '../../assets/close.svg';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcomes.svg';
import { useState, FormEvent, useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps{
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function NewTransactionModal( {modalIsOpen, closeModal} : NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    
    const { createNewTransaction } = useContext(TransactionsContext);

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        createNewTransaction({
            title,
            amount,
            type,
            category
        });
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
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>

                    <TransactionButton 
                        type="button" 
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit" ? true : false}
                        activeColor="green"
                    >  
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TransactionButton> 

                    <TransactionButton 
                        type="button" 
                        isActive={type === "withdraw" ? true : false}
                        onClick={() => setType("withdraw")}
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