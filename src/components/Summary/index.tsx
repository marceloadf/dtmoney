import incomeImg from '../../assets/incomes.svg'
import outcomeImg from '../../assets/outcomes.svg'
import total from '../../assets/total.svg'

import { Container } from "./styles"

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>R$ 1.259,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total"/>
                </header>
                <strong>R$ 16.141,00</strong>
            </div>
        </Container>
    );
}