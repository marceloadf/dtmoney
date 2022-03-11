import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextProviderProps {
    transactions: Transaction[];
    createNewTransaction: (transaction: TransactionInput) => void;
};

export const TransactionsContext = createContext<TransactionsContextProviderProps>(
    {} as TransactionsContextProviderProps
);

export function TransactionsProvider({ children } : TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    function createNewTransaction(transaction: TransactionInput) {
        api.post("/transactions", transaction);
    };
    
    return(
        <TransactionsContext.Provider value={{transactions, createNewTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
};

