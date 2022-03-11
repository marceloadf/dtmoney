import { useContext, useEffect, useState } from 'react'
import incomeImg from '../../assets/incomes.svg'
import outcomeImg from '../../assets/outcomes.svg'
import total from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from "./styles"

export function Summary(){

    const [incomeSummary, setIncomeSummary] = useState(0);
    const [withdrawnSummary, setWithdrawnSummary] = useState(0);
    const [diffSummary, setDiffSummary] = useState(0)

    const { transactions } = useContext(TransactionsContext);

    useEffect(() => {
        var incomeTotal = transactions.reduce((acumulator, actualTransaction) => {

            if(actualTransaction.type === 'deposit')
                return acumulator += actualTransaction.amount;

            return acumulator;
        }, 0);
    
        setIncomeSummary(incomeTotal);

        var withdrawnTotal = transactions.reduce((acumulator, actualTransaction) => {

            if(actualTransaction.type === 'withdrawn')
                return acumulator += actualTransaction.amount;
                
            return acumulator;
        }, 0);
    
        setWithdrawnSummary(withdrawnTotal);

        setDiffSummary(incomeTotal - withdrawnTotal);

    }, [transactions])


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
                                }).format(incomeSummary)}
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
                                }).format(withdrawnSummary)}
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
                                }).format(diffSummary)}
                </strong>

            </div>
            
        </Container>
    );
}