import Modal from 'react-modal';
import { Container, TransactionButton, TransactionTypeContainer } from './styles';
import closeButtonImg from '../../assets/close.svg';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcomes.svg';
import { useState, FormEvent } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps{
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function NewTransactionModal( {modalIsOpen, closeModal} : NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    
    const { createNewTransaction } = useTransactions();

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        await createNewTransaction({
            title,
            amount,
            type,
            category
        });

        setType('deposit');
        setTitle('');
        setAmount(0);
        setCategory('');
        
        closeModal();
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

                <h2>Cadastrar Transação</h2>

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
                    min="0.1"
                    step="0.1"
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
                        isActive={type === "withdrawn" ? true : false}
                        onClick={() => setType("withdrawn")}
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