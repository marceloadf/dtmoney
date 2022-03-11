import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function TransactionTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    interface Transaction {
        id: number;
        title: string;
        amount: number;
        category: string;
        createdAt: string;
    };

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    
                 {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className="deposit">{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                 ))}

                </tbody>
            </table>
        </Container>
    )
}