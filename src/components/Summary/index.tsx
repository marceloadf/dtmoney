import { useContext } from 'react'
import incomeImg from '../../assets/incomes.svg'
import outcomeImg from '../../assets/outcomes.svg'
import total from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from "./styles"

export function Summary() {

    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
        }

        acc.total = acc.deposit - acc.withdraw;

        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })

    return(
        <Container>

            <div>

                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(summary.deposit)}
                </strong>

            </div>

            <div>

                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(summary.withdraw)}
                </strong>

            </div>

            <div className="highlight-background">
                
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total"/>
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(summary.total)}
                </strong>

            </div>
            
        </Container>
    );
}